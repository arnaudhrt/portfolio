import { useState, useEffect } from "react";

// ─── All the classic CLI spinner frame sets ─────────────────────────────
const SPINNERS = {
  dot: { frames: ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"], interval: 80 },
  line: { frames: ["|", "/", "—", "\\"], interval: 130 },
  pulse: { frames: ["█", "▓", "▒", "░", "▒", "▓"], interval: 120 },
  globe: { frames: ["🌍", "🌎", "🌏"], interval: 200 },
  moon: { frames: ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"], interval: 120 },
  monkey: { frames: ["🙈", "🙉", "🙊"], interval: 300 },
};

// ─── The hook — this is all you really need ─────────────────────────────
function useTerminalSpinner(type = "dot") {
  const [frameIndex, setFrameIndex] = useState(0);
  const spinner = SPINNERS[type as keyof typeof SPINNERS] || SPINNERS.dot;

  useEffect(() => {
    setFrameIndex(0);
    const id = setInterval(() => {
      setFrameIndex((i) => (i + 1) % spinner.frames.length);
    }, spinner.interval);
    return () => clearInterval(id);
  }, [type, spinner.frames.length, spinner.interval]);

  return spinner.frames[frameIndex];
}

// ─── Inline spinner component for copy-paste reuse ──────────────────────
export function TerminalSpinner({ type = "dot", label, className = "" }: { type?: string; label?: string; className?: string }) {
  const frame = useTerminalSpinner(type);
  return (
    <span className={className} style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
      {frame}
      {label ? ` ${label}` : ""}
    </span>
  );
}
