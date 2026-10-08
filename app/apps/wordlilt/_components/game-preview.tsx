import { ArrowLeft, Check, ListChecks } from "lucide-react";

import { appData, getWordCells } from "../_data/app-data";
import { bandColors, WordGrid, type GridBand } from "./word-grid";

const puzzle = appData.previewPuzzle;
const size = puzzle.grid.length;
const foundWords = puzzle.words.filter((entry) => entry.foundTone !== null);
const remainingWords = puzzle.words.filter((entry) => entry.foundTone === null);

const bands: GridBand[] = foundWords.map((entry) => ({
  cells: getWordCells(entry),
  tone: entry.foundTone ?? "sky",
}));

const previewLabel = `Illustrative ${appData.name} gameplay: a ${size} by ${size} letter grid with ${foundWords
  .map((entry) => entry.word)
  .join(", ")} found, and ${remainingWords.map((entry) => entry.word).join(", ")} still to find.`;

export function GamePreview() {
  return (
    <figure className="relative mx-auto w-full max-w-[23rem]">
      <div
        role="img"
        aria-label={previewLabel}
        className="relative rounded-[2.6rem] border border-black/[0.12] bg-[var(--ink)] p-2 shadow-[var(--shadow-float)] sm:p-2.5"
      >
        <div className="overflow-hidden rounded-[2.1rem] bg-[#FCF9F8] px-3 pb-5 pt-3 sm:px-4">
          <div aria-hidden="true" className="mx-auto h-1.5 w-16 rounded-full bg-black/[0.12]" />

          <div aria-hidden="true" className="mt-3 flex items-center justify-between gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-white shadow-[0_2px_0_#DCD9D9]">
              <ArrowLeft className="size-4 text-[#171717]" strokeWidth={2.4} />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F0EF] px-4 py-2 text-[0.8rem] font-bold text-[#171717]">
              {puzzle.category}
              <span className="text-[0.62rem] font-medium text-[#6B7280]">
                {size}×{size}
              </span>
            </span>
            <span className="size-9" />
          </div>

          <div
            aria-hidden="true"
            className="mt-3 flex items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_2px_0_#E7E4E3]"
          >
            <ListChecks className="size-4 shrink-0 text-[#2F80ED]" strokeWidth={2.2} />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
              Found
            </span>
            <span className="text-sm font-bold text-[#171717]">
              {foundWords.length}/{puzzle.words.length}
            </span>
            <span className="ml-auto h-1.5 w-20 overflow-hidden rounded-full bg-[#EEEBEA]">
              <span
                className="block h-full rounded-full bg-[#2F80ED]"
                style={{ width: `${(foundWords.length / puzzle.words.length) * 100}%` }}
              />
            </span>
          </div>

          <div className="mt-3 rounded-[1.25rem] bg-white p-1.5 shadow-[0_8px_24px_rgba(23,23,23,0.06)] sm:p-2">
            <WordGrid grid={puzzle.grid} bands={bands} />
          </div>

          <div aria-hidden="true" className="mt-3 rounded-[1.25rem] bg-white p-3 shadow-[0_2px_0_#E7E4E3]">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#6B7280]">
              Words to find
            </p>
            <ul className="mt-2.5 grid grid-cols-4 gap-1.5">
              {puzzle.words.map((entry) => {
                const tone = entry.foundTone ? bandColors[entry.foundTone] : null;
                return (
                  <li
                    key={entry.word}
                    className="flex min-h-7 items-center justify-center gap-0.5 rounded-full border text-[0.62rem] font-bold tracking-[0.02em]"
                    style={
                      tone
                        ? { background: tone.fill, borderColor: tone.stroke, color: "#6B7280" }
                        : { background: "#F2F0EF", borderColor: "transparent", color: "#171717" }
                    }
                  >
                    {tone ? <Check className="size-2.5" strokeWidth={3} /> : null}
                    <span className={tone ? "line-through" : undefined}>{entry.word}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted)]">
        Illustrative gameplay
      </figcaption>
    </figure>
  );
}
