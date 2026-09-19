export function AnimatedPinMark({ className = "" }: { className?: string }) {
  return (
    <div className={className} id="animated-svg-geopixly-pin">
      <svg
        fill="none"
        height="1024"
        viewBox="0 0 1024 1024"
        width="1024"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="pinBodyGradAnim"
            x1="512"
            x2="512"
            y1="200"
            y2="824"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="60%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="highlightGradAnim"
            x1="512"
            x2="512"
            y1="200"
            y2="400"
          >
            <stop offset="0%" stopColor="#B4C5FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#B4C5FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="shutterRingGradAnim"
            x1="380"
            x2="644"
            y1="310"
            y2="574"
          >
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <radialGradient cx="50%" cy="45%" id="lensGlassAnim" r="55%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="70%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          <filter
            filterUnits="userSpaceOnUse"
            height="145%"
            id="softDepthAnim"
            width="140%"
            x="-20%"
            y="-20%"
          >
            <feDropShadow
              dx="0"
              dy="16"
              floodColor="#020617"
              floodOpacity="0.55"
              stdDeviation="24"
            />
          </filter>
          <filter height="180%" id="glowMintAnim" width="180%" x="-40%" y="-40%">
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="#10B981"
              floodOpacity="0.9"
              stdDeviation="8"
            />
          </filter>
          <style>{`
            @keyframes spinAndPause {
              0% { transform: rotate(0deg); }
              38% { transform: rotate(360deg); }
              70% { transform: rotate(360deg); }
              100% { transform: rotate(720deg); }
            }
            @keyframes shutterIrisSnap {
              0%, 70%, 100% { transform: rotate(0deg) scale(1); }
              19% { transform: rotate(-35deg) scale(0.96); }
              38% { transform: rotate(0deg) scale(1); }
              85% { transform: rotate(-35deg) scale(0.96); }
            }
            @keyframes floatBreathing {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes radarPing {
              0% { r: 280px; opacity: 0.45; stroke-width: 3.5px; }
              50% { r: 350px; opacity: 0.15; stroke-width: 2px; }
              100% { r: 400px; opacity: 0; stroke-width: 1px; }
            }
            @keyframes beaconGlow {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.55; transform: scale(0.88); }
            }
            .shutter-spin-group {
              transform-origin: 512px 435px;
              animation: spinAndPause 3.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
            }
            .iris-sub-blades {
              transform-origin: 512px 435px;
              animation: shutterIrisSnap 3.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
            }
            .pin-floating-container {
              animation: floatBreathing 3.6s ease-in-out infinite;
            }
            .radar-pulse-ring {
              animation: radarPing 3.6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
            }
            .beacon-pulse {
              transform-origin: 658px 284px;
              animation: beaconGlow 1.8s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .shutter-spin-group,
              .iris-sub-blades,
              .pin-floating-container,
              .radar-pulse-ring,
              .beacon-pulse {
                animation: none !important;
              }
            }
          `}</style>
        </defs>
        <g className="pin-floating-container" filter="url(#softDepthAnim)" id="animated-splash-root">
          <circle
            cx="512"
            cy="450"
            r="325"
            stroke="#93C5FD"
            strokeOpacity="0.14"
            strokeWidth="2"
          />
          <circle
            className="radar-pulse-ring"
            cx="512"
            cy="450"
            r="280"
            stroke="#3B82F6"
            strokeDasharray="8 12"
            strokeOpacity="0.25"
            strokeWidth="3"
          />
          <line
            stroke="#60A5FA"
            strokeLinecap="round"
            strokeWidth="6"
            x1="512"
            x2="512"
            y1="125"
            y2="155"
          />
          <line
            stroke="#3B82F6"
            strokeLinecap="round"
            strokeWidth="5"
            x1="512"
            x2="512"
            y1="842"
            y2="866"
          />
          <line
            stroke="#60A5FA"
            strokeLinecap="round"
            strokeWidth="6"
            x1="187"
            x2="215"
            y1="450"
            y2="450"
          />
          <line
            stroke="#60A5FA"
            strokeLinecap="round"
            strokeWidth="6"
            x1="809"
            x2="837"
            y1="450"
            y2="450"
          />
          <circle cx="282" cy="220" fill="#93C5FD" fillOpacity="0.4" r="4.5" />
          <circle cx="742" cy="220" fill="#93C5FD" fillOpacity="0.4" r="4.5" />
          <circle cx="282" cy="680" fill="#93C5FD" fillOpacity="0.3" r="4.5" />
          <circle cx="742" cy="680" fill="#93C5FD" fillOpacity="0.3" r="4.5" />
          <path
            d="M 512 215
             C 633.5 215 732 313.5 732 435
             C 732 522 668 594 602 668
             L 512 808
             L 422 668
             C 356 594 292 522 292 435
             C 292 313.5 390.5 215 512 215 Z"
            fill="url(#pinBodyGradAnim)"
          />
          <path
            d="M 512 220
             C 630.7 220 727 316.3 727 435
             C 727 519 664.5 590 598.5 664
             L 512 800
             L 425.5 664
             C 359.5 590 297 519 297 435
             C 297 316.3 393.3 220 512 220 Z"
            fill="none"
            stroke="#60A5FA"
            strokeOpacity="0.4"
            strokeWidth="4"
          />
          <path
            d="M 330 380
             C 355 275 425 227 512 227
             C 599 227 669 275 694 380
             C 638 315 578 285 512 285
             C 446 285 386 315 330 380 Z"
            fill="url(#highlightGradAnim)"
          />
          <circle
            cx="512"
            cy="435"
            fill="url(#shutterRingGradAnim)"
            r="162"
            stroke="#090D16"
            strokeWidth="6"
          />
          <circle
            cx="512"
            cy="435"
            fill="none"
            r="156"
            stroke="#334155"
            strokeOpacity="0.8"
            strokeWidth="2.5"
          />
          <circle cx="512" cy="435" fill="url(#lensGlassAnim)" r="148" />
          <g className="shutter-spin-group" id="spinning-shutter-assembly">
            <g className="iris-sub-blades">
              <path
                d="M 512 295 C 555 335 570 385 575 420 L 512 435 L 438 380 Z"
                fill="#1E293B"
                opacity="0.95"
                stroke="#3B82F6"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M 450 312 L 542 418"
                opacity="0.6"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M 633 365 C 625 424 595 464 565 485 L 512 435 L 536 345 Z"
                fill="#1E293B"
                opacity="0.95"
                stroke="#3B82F6"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M 605 378 L 530 460"
                opacity="0.6"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M 633 505 C 582 539 537 529 502 500 L 512 435 L 588 410 Z"
                fill="#1E293B"
                opacity="0.95"
                stroke="#3B82F6"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M 605 492 L 500 488"
                opacity="0.6"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M 512 575 C 469 535 454 485 449 450 L 512 435 L 586 490 Z"
                fill="#1E293B"
                opacity="0.95"
                stroke="#3B82F6"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M 574 558 L 482 452"
                opacity="0.6"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M 391 505 C 399 446 429 406 459 385 L 512 435 L 488 525 Z"
                fill="#1E293B"
                opacity="0.95"
                stroke="#3B82F6"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M 419 492 L 494 410"
                opacity="0.6"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M 391 365 C 442 331 487 341 522 370 L 512 435 L 436 460 Z"
                fill="#1E293B"
                opacity="0.95"
                stroke="#3B82F6"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M 419 378 L 524 382"
                opacity="0.6"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <circle
                cx="512"
                cy="435"
                fill="#090D16"
                r="28"
                stroke="#2563EB"
                strokeWidth="2.5"
              />
              <circle cx="512" cy="435" fill="#1E293B" r="14" />
              <line
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
                x1="512"
                x2="512"
                y1="415"
                y2="423"
              />
              <line
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
                x1="512"
                x2="512"
                y1="447"
                y2="455"
              />
              <line
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
                x1="492"
                x2="500"
                y1="435"
                y2="435"
              />
              <line
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeWidth="2"
                x1="524"
                x2="532"
                y1="435"
                y2="435"
              />
            </g>
          </g>
          <g className="beacon-pulse">
            <g filter="url(#glowMintAnim)">
              <circle cx="658" cy="284" fill="#10B981" r="14" />
              <circle cx="658" cy="284" fill="#ECFDF5" r="7" />
            </g>
            <circle
              cx="658"
              cy="284"
              r="24"
              stroke="#10B981"
              strokeDasharray="3 4"
              strokeOpacity="0.45"
              strokeWidth="2.5"
            />
          </g>
          <circle cx="512" cy="742" fill="#93C5FD" fillOpacity="0.9" r="8" />
        </g>
      </svg>
    </div>
  );
}
