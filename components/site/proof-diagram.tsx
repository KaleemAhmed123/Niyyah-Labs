type ProofDiagramProps = {
  label: string;
  title: string;
  items: string[];
  variant?: "platform" | "integration" | "ai" | "desktop" | "realtime";
};

const variantClass = {
  platform: "proof-diagram-platform",
  integration: "proof-diagram-integration",
  ai: "proof-diagram-ai",
  desktop: "proof-diagram-desktop",
  realtime: "proof-diagram-realtime",
};

export function ProofDiagram({
  label,
  title,
  items,
  variant = "platform",
}: ProofDiagramProps) {
  return (
    <figure className={`proof-diagram ${variantClass[variant]}`}>
      <div className="proof-diagram-header">
        <span>{label}</span>
        <span>anonymized proof</span>
      </div>

      <div className="proof-diagram-body">
        <div className="proof-diagram-core">
          <span className="proof-diagram-pulse" />
          <strong>{title}</strong>
        </div>

        <div className="proof-diagram-flow" aria-hidden="true">
          {items.slice(0, 4).map((item, index) => (
            <div className="proof-diagram-node" key={item}>
              <span>0{index + 1}</span>
              <em>{item}</em>
            </div>
          ))}
        </div>
      </div>

      <figcaption>
        Reserved for a real screenshot, architecture diagram, or workflow map
        once the public-safe asset is approved.
      </figcaption>
    </figure>
  );
}
