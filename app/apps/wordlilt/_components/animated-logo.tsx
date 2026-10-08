import { appData } from "../_data/app-data";

const wordTiles = [
  { letter: "W", x: 4 },
  { letter: "O", x: 84 },
  { letter: "R", x: 164 },
  { letter: "D", x: 244 },
] as const;

const liltTiles = [
  { letter: "L", x: 4 },
  { letter: "I", x: 84 },
  { letter: "L", x: 164 },
  { letter: "T", x: 244 },
] as const;

const sparkles = [
  { x: 64, y: 34, fill: "#F59E0B" },
  { x: 144, y: 124, fill: "#38BDF8" },
  { x: 310, y: 124, fill: "#F59E0B" },
] as const;

const tileDelays = [0, 0.14, 0.28, 0.42, 0.58, 0.72, 0.86, 1] as const;
const sparkleDelays = [0.18, 0.74, 1.15] as const;

export function AnimatedLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label={appData.name}
      viewBox="28 22 324 222"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-auto w-full overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="wl-logo-word-bg" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient id="wl-logo-lilt-bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="wl-logo-bevel" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <style>{`
          @keyframes wl-logo-bounce {
            0%, 46%, 100% {
              transform: translateY(0px) scale(1, 1);
              filter: drop-shadow(0 4px 0 #DCD9D9);
            }
            10.5% {
              transform: translateY(-38px) scale(0.94, 1.12);
              filter: drop-shadow(0 24px 12px rgba(47, 128, 237, 0.28));
            }
            18.5% {
              transform: translateY(0px) scale(1.12, 0.88);
              filter: drop-shadow(0 2px 0 #DCD9D9);
            }
            25.5% {
              transform: translateY(-14px) scale(0.98, 1.04);
              filter: drop-shadow(0 10px 6px rgba(47, 128, 237, 0.16));
            }
            32.5% {
              transform: translateY(0px) scale(1.04, 0.96);
              filter: drop-shadow(0 3px 0 #DCD9D9);
            }
            39.5% {
              transform: translateY(-4px) scale(0.99, 1.01);
              filter: drop-shadow(0 5px 2px rgba(47, 128, 237, 0.1));
            }
          }
          @keyframes wl-logo-sparkle {
            0%, 58%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
            29% { transform: scale(1.15) rotate(90deg); opacity: 1; }
            57.9% { transform: scale(0) rotate(180deg); opacity: 0; }
          }
          .wl-logo-tile {
            transform-box: fill-box;
            transform-origin: center;
            filter: drop-shadow(0 4px 0 #DCD9D9);
            animation: wl-logo-bounce 4.2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
          }
          .wl-logo-sparkle {
            transform-box: fill-box;
            transform-origin: center;
            transform: scale(0);
            opacity: 0;
            animation: wl-logo-sparkle 4.2s ease-in-out infinite;
          }
          .wl-logo-letter {
            font-family: var(--font-geist-sans), system-ui, sans-serif;
            font-weight: 900;
            text-anchor: middle;
            dominant-baseline: central;
          }
          @media (prefers-reduced-motion: reduce) {
            .wl-logo-tile, .wl-logo-sparkle { animation: none; }
          }
        `}</style>
      </defs>

      <g transform="translate(34, 40)">
        {wordTiles.map((tile, index) => (
          <g
            key={`word-${tile.x}`}
            className="wl-logo-tile"
            style={{ animationDelay: `${tileDelays[index]}s` }}
          >
            <rect
              fill="url(#wl-logo-word-bg)"
              height="64"
              rx="16"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              width="64"
              x={tile.x}
              y="32"
            />
            <rect fill="url(#wl-logo-bevel)" height="12" rx="6" width="56" x={tile.x + 4} y="34" />
            <text className="wl-logo-letter" fill="#0F172A" fontSize="34" x={tile.x + 32} y="66">
              {tile.letter}
            </text>
          </g>
        ))}

        {liltTiles.map((tile, index) => (
          <g
            key={`lilt-${tile.x}`}
            className="wl-logo-tile"
            style={{ animationDelay: `${tileDelays[index + 4]}s` }}
          >
            <rect fill="url(#wl-logo-lilt-bg)" height="64" rx="16" width="64" x={tile.x} y="124" />
            <path
              d={`M ${tile.x + 8} 132 Q ${tile.x + 32} 128 ${tile.x + 56} 132`}
              fill="none"
              opacity="0.6"
              stroke="#93C5FD"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
            <text className="wl-logo-letter" fill="#FFFFFF" fontSize="34" x={tile.x + 32} y="158">
              {tile.letter}
            </text>
          </g>
        ))}

        {sparkles.map((sparkle, index) => (
          <path
            key={`${sparkle.x}-${sparkle.y}`}
            className="wl-logo-sparkle"
            style={{ animationDelay: `${sparkleDelays[index]}s` }}
            fill={sparkle.fill}
            d={`M ${sparkle.x} ${sparkle.y - 10} Q ${sparkle.x} ${sparkle.y} ${sparkle.x + 10} ${sparkle.y} Q ${sparkle.x} ${sparkle.y} ${sparkle.x} ${sparkle.y + 10} Q ${sparkle.x} ${sparkle.y} ${sparkle.x - 10} ${sparkle.y} Q ${sparkle.x} ${sparkle.y} ${sparkle.x} ${sparkle.y - 10} Z`}
          />
        ))}
      </g>
    </svg>
  );
}
