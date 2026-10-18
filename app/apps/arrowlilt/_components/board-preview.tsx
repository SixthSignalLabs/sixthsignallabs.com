import { appData } from "../_data/app-data";

// ─── Board definition ─────────────────────────────────────────────────────────
// A 5×5 illustrative puzzle. Each cell has an arrow direction.
// "cleared" cells are faded; "active" cells are highlighted as the next tap.
// "path" cells show the arrow path that is about to slide out.

type CellState = "idle" | "cleared" | "path" | "active";

type BoardCell = {
  arrow: string; // Unicode arrow character
  state: CellState;
};

const SAGE = "#7a9c7e";
const MOSS = "#4d7a5e";
const CLAY = "#b87050";
const FERN = "#8aab4a";
const CREAM = "#F7F6ED";

const stateStyles: Record<CellState, { bg: string; border: string; color: string }> = {
  idle: { bg: "white", border: "#d4e0d8", color: "#2c3f54" },
  cleared: { bg: "#edf3f0", border: "#c6d9cc", color: "#a0b8a4" },
  path: { bg: "#e8f3ea", border: SAGE, color: MOSS },
  active: { bg: SAGE, border: MOSS, color: "white" },
};

// 5×5 board — rows × cols
const board: BoardCell[][] = [
  [
    { arrow: "→", state: "cleared" },
    { arrow: "→", state: "cleared" },
    { arrow: "↓", state: "cleared" },
    { arrow: "←", state: "idle" },
    { arrow: "↑", state: "idle" },
  ],
  [
    { arrow: "↑", state: "idle" },
    { arrow: "↗", state: "idle" },
    { arrow: "↓", state: "cleared" },
    { arrow: "←", state: "idle" },
    { arrow: "↙", state: "idle" },
  ],
  [
    { arrow: "→", state: "path" },
    { arrow: "→", state: "path" },
    { arrow: "→", state: "active" },
    { arrow: "↓", state: "idle" },
    { arrow: "←", state: "idle" },
  ],
  [
    { arrow: "↑", state: "idle" },
    { arrow: "↗", state: "idle" },
    { arrow: "↓", state: "idle" },
    { arrow: "←", state: "idle" },
    { arrow: "↙", state: "idle" },
  ],
  [
    { arrow: "→", state: "idle" },
    { arrow: "↑", state: "idle" },
    { arrow: "↗", state: "idle" },
    { arrow: "→", state: "idle" },
    { arrow: "↑", state: "idle" },
  ],
];

const clearedCount = board.flat().filter((c) => c.state === "cleared").length;
const totalCount = board.flat().length;

const previewLabel = `Illustrative ${appData.name} gameplay: a 5 by 5 arrow puzzle board with ${clearedCount} arrows cleared and one path highlighted for the next tap.`;

export function BoardPreview() {
  return (
    <figure className="relative mx-auto w-full max-w-[23rem]">
      <div
        role="img"
        aria-label={previewLabel}
        className="relative rounded-[2.6rem] border border-black/[0.12] bg-[var(--ink)] p-2 shadow-[var(--shadow-float)] sm:p-2.5"
      >
        <div
          className="overflow-hidden rounded-[2.1rem] px-3 pb-5 pt-3 sm:px-4"
          style={{ background: CREAM }}
        >
          {/* Phone notch */}
          <div aria-hidden="true" className="mx-auto h-1.5 w-16 rounded-full bg-black/[0.12]" />

          {/* Puzzle header */}
          <div aria-hidden="true" className="mt-3 flex items-center justify-between gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-white shadow-[0_2px_0_rgba(0,0,0,0.08)]">
              <span className="font-mono text-[0.7rem] font-bold text-[var(--ink)]">←</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.8rem] font-bold tracking-[-0.02em] text-[var(--ink)] shadow-[0_2px_0_rgba(0,0,0,0.06)]">
              Chapter 1
              <span className="text-[0.62rem] font-medium text-[var(--muted)]">Level 4</span>
            </span>
            <span className="size-9" />
          </div>

          {/* Progress bar */}
          <div
            aria-hidden="true"
            className="mt-3 flex items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_2px_0_rgba(0,0,0,0.06)]"
          >
            <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
              Cleared
            </span>
            <span className="text-sm font-bold text-[var(--ink)]">
              {clearedCount}/{totalCount}
            </span>
            <span className="ml-auto h-1.5 w-20 overflow-hidden rounded-full bg-[#e0ebe2]">
              <span
                className="block h-full rounded-full"
                style={{ width: `${(clearedCount / totalCount) * 100}%`, background: SAGE }}
              />
            </span>
          </div>

          {/* Arrow grid */}
          <div
            aria-hidden="true"
            className="mt-3 overflow-hidden rounded-[1.25rem] bg-white p-2 shadow-[0_8px_24px_rgba(23,23,23,0.06)]"
          >
            <div className="grid grid-cols-5 gap-1">
              {board.flat().map((cell, i) => {
                const s = stateStyles[cell.state];
                return (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-xl border text-base font-bold"
                    style={{
                      background: s.bg,
                      borderColor: s.border,
                      color: s.color,
                    }}
                  >
                    {cell.state === "active" ? (
                      <span className="relative flex items-center justify-center">
                        {cell.arrow}
                        {/* tap ripple */}
                        <span
                          className="absolute inset-[-4px] animate-ping rounded-full opacity-40"
                          style={{ background: SAGE }}
                        />
                      </span>
                    ) : (
                      cell.arrow
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Color key */}
          <div
            aria-hidden="true"
            className="mt-3 flex items-center gap-3 rounded-[1.25rem] bg-white p-3 shadow-[0_2px_0_rgba(0,0,0,0.06)]"
          >
            {[
              { color: CLAY, label: "Ch.1" },
              { color: FERN, label: "Ch.2" },
              { color: SAGE, label: "Ch.3" },
              { color: MOSS, label: "Ch.4" },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span
                  className="size-2.5 rounded-full"
                  style={{ background: item.color }}
                />
                <span className="font-mono text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                  {item.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted)]">
        Illustrative gameplay
      </figcaption>
    </figure>
  );
}

