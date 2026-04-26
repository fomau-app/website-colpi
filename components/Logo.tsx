interface LogoProps {
  className?: string;
}

export default function ColpiLogo({ className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-end gap-0 ${className}`}
      style={{
        fontFamily: "var(--font-fredoka), sans-serif",
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: "-0.01em",
      }}
    >
      <span style={{ color: "white" }}>COL</span>

      {/* P avec bière */}
      <svg
        viewBox="0 0 100 122"
        style={{ height: "0.79em", width: "auto", display: "inline-block", verticalAlign: "bottom" }}
        aria-hidden="true"
      >
        {/* Lettre P blanche avec trou (evenodd) */}
        <path
          fillRule="evenodd"
          fill="white"
          d="
            M 16,0 Q 0,0 0,16
            V 106 Q 0,122 16,122
            H 36 Q 52,122 52,106
            V 74 H 66
            Q 100,74 100,38
            Q 100,0 66,0
            Z
            M 52,18 H 64
            Q 82,18 82,38
            Q 82,58 64,58
            H 52 Z
          "
        />
        {/* Liquide doré */}
        <path
          fill="#F0A500"
          d="M 52,36 C 56,24 68,22 78,30 Q 82,34 82,38 Q 82,58 64,58 H 52 Z"
        />
        {/* Bulles */}
        <circle cx="68" cy="30" r="4.5" fill="#FFD666" opacity="0.9" />
        <circle cx="75" cy="23" r="3.5" fill="#FFD666" opacity="0.85" />
        <circle cx="58" cy="45" r="2.8" fill="#FFD666" opacity="0.7" />
        <circle cx="55" cy="54" r="2" fill="#FFD666" opacity="0.55" />
      </svg>

      <span style={{ color: "white" }}>I</span>
    </span>
  );
}
