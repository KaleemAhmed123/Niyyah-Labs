import Image from "next/image";
import type { VisualAsset } from "@/components/home/home-data";

type VisualMediaProps = {
  asset: VisualAsset;
  className?: string;
  priority?: boolean;
  size?: "card" | "wide" | "hero";
};

export function VisualMedia({
  asset,
  className = "",
  priority = false,
  size = "card",
}: VisualMediaProps) {
  return (
    <figure
      className={`visual-media visual-media-${size} ${className}`}
      tabIndex={0}
    >
      <Image
        alt={asset.alt}
        className="visual-media-image"
        fill
        priority={priority}
        sizes={
          size === "hero"
            ? "(min-width: 1024px) 36vw, 100vw"
            : size === "wide"
              ? "(min-width: 1024px) 32vw, 100vw"
              : "(min-width: 1024px) 28vw, 100vw"
        }
        src={asset.src}
      />
      <div className="visual-media-shade" />
      <div aria-hidden="true" className="visual-scan-loop">
        <span />
        <span />
        <span />
      </div>
      <figcaption className="visual-media-caption">
        <span>{asset.label}</span>
        <strong>{asset.signal}</strong>
      </figcaption>
      <div className="visual-media-insight">
        <span>Business reading</span>
        <strong>{asset.hoverTitle}</strong>
        <p>{asset.hoverText}</p>
        <em>{asset.trustSignal}</em>
      </div>
    </figure>
  );
}

export function AnimatedSignalPanel({
  label,
  lines,
}: {
  label: string;
  lines: string[];
}) {
  return (
    <div className="animated-signal-panel" aria-label={label}>
      <div className="animated-signal-header">
        <span>{label}</span>
        <span>Live</span>
      </div>
      <div className="animated-signal-grid" aria-hidden="true">
        {lines.map((line, index) => (
          <div className="animated-signal-row" key={line}>
            <span className="animated-signal-node" />
            <span>{line}</span>
            <span
              className="animated-signal-pulse"
              style={{ animationDelay: `${index * 180}ms` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
