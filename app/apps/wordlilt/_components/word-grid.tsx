import type { CSSProperties } from "react";

import type { GridCell, WordTone } from "../_data/app-data";

export type BandTone = WordTone | "tracing";

export type GridBand = {
  readonly cells: readonly GridCell[];
  readonly tone: BandTone;
};

type GridWindow = {
  readonly row: number;
  readonly col: number;
  readonly rows: number;
  readonly cols: number;
};

export const bandColors: Record<BandTone, { fill: string; stroke: string; ink: string }> = {
  rose: { fill: "#FCD5DE", stroke: "#F2899E", ink: "#171717" },
  sky: { fill: "#D3EAFB", stroke: "#71B5E6", ink: "#171717" },
  mint: { fill: "#CDEFE0", stroke: "#5CC79B", ink: "#171717" },
  amber: { fill: "#FFE3C2", stroke: "#FF8C1A", ink: "#171717" },
  tracing: { fill: "#2F80ED", stroke: "#1769D1", ink: "#FFFFFF" },
};

const BAND_WIDTH = 0.84;
const BAND_BORDER = 0.07;

export function WordGrid({
  grid,
  bands,
  window,
}: {
  grid: readonly string[];
  bands: readonly GridBand[];
  window?: GridWindow;
}) {
  const area = window ?? { row: 0, col: 0, rows: grid.length, cols: grid[0]?.length ?? 0 };
  const inkByCell = new Map<string, string>();
  for (const band of bands) {
    for (const [row, col] of band.cells) {
      inkByCell.set(`${row}-${col}`, bandColors[band.tone].ink);
    }
  }

  const cells = Array.from({ length: area.rows * area.cols }, (_, index) => {
    const row = area.row + Math.floor(index / area.cols);
    const col = area.col + (index % area.cols);
    return { key: `${row}-${col}`, letter: grid[row]?.[col] ?? "" };
  });

  const layerStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${area.cols}, minmax(0, 1fr))`,
  };

  return (
    <div
      aria-hidden="true"
      className="@container relative w-full select-none"
      style={{ aspectRatio: `${area.cols} / ${area.rows}` }}
    >
      <div className="absolute inset-0 grid" style={layerStyle}>
        {cells.map((cell) => (
          <span key={cell.key} className="p-[7%]">
            <span className="block size-full rounded-[24%] bg-[#F2F0EF] shadow-[0_1.5px_0_#DCD9D9]" />
          </span>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${area.cols} ${area.rows}`}
        className="absolute inset-0 size-full overflow-hidden"
      >
        {bands.map((band) => {
          const first = band.cells[0];
          const last = band.cells[band.cells.length - 1];
          if (!first || !last) return null;
          const colors = bandColors[band.tone];
          const line = {
            x1: first[1] - area.col + 0.5,
            y1: first[0] - area.row + 0.5,
            x2: last[1] - area.col + 0.5,
            y2: last[0] - area.row + 0.5,
            strokeLinecap: "round" as const,
          };
          return (
            <g key={band.cells.map((cell) => cell.join(",")).join("|")}>
              <line {...line} stroke={colors.stroke} strokeWidth={BAND_WIDTH} />
              <line {...line} stroke={colors.fill} strokeWidth={BAND_WIDTH - BAND_BORDER * 2} />
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-0 grid" style={layerStyle}>
        {cells.map((cell) => (
          <span
            key={cell.key}
            className="flex items-center justify-center font-semibold leading-none"
            style={{
              fontSize: `${44 / area.cols}cqw`,
              color: inkByCell.get(cell.key) ?? "#171717",
            }}
          >
            {cell.letter}
          </span>
        ))}
      </div>
    </div>
  );
}
