"use client";

import { useEffect, useRef } from "react";

const pipelineItems = [
  "Customer request intake",
  "Knowledge retrieval + policy checks",
  "CRM update + owner routing",
  "Reporting stream to dashboard",
];

const statusItems = ["Product", "Automation", "Integrations"];

export function HeroCommandPanel() {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentRef = useRef({
    rotateX: 6,
    rotateY: -8,
    translateY: 0,
    glareX: 50,
    glareY: 50,
  });
  const targetRef = useRef({
    rotateX: 6,
    rotateY: -8,
    translateY: 0,
    glareX: 50,
    glareY: 50,
  });

  useEffect(() => {
    const animate = () => {
      const panel = panelRef.current;

      if (!panel) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const easing = 0.12;
      currentRef.current.rotateX +=
        (targetRef.current.rotateX - currentRef.current.rotateX) * easing;
      currentRef.current.rotateY +=
        (targetRef.current.rotateY - currentRef.current.rotateY) * easing;
      currentRef.current.translateY +=
        (targetRef.current.translateY - currentRef.current.translateY) * easing;
      currentRef.current.glareX +=
        (targetRef.current.glareX - currentRef.current.glareX) * easing;
      currentRef.current.glareY +=
        (targetRef.current.glareY - currentRef.current.glareY) * easing;

      panel.style.transform = `perspective(1700px) rotateX(${currentRef.current.rotateX.toFixed(2)}deg) rotateY(${currentRef.current.rotateY.toFixed(2)}deg) translateY(${currentRef.current.translateY.toFixed(2)}px)`;
      panel.style.setProperty(
        "--hero-glare-x",
        `${currentRef.current.glareX.toFixed(1)}%`,
      );
      panel.style.setProperty(
        "--hero-glare-y",
        `${currentRef.current.glareY.toFixed(1)}%`,
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;
    const rotateY = (relativeX - 0.5) * 18;
    const rotateX = (0.5 - relativeY) * 18;

    targetRef.current = {
      rotateX,
      rotateY,
      translateY: -10,
      glareX: relativeX * 100,
      glareY: relativeY * 100,
    };
  };

  const handlePointerLeave = () => {
    targetRef.current = {
      rotateX: 6,
      rotateY: -8,
      translateY: 0,
      glareX: 50,
      glareY: 50,
    };
  };

  return (
    <div
      className="panel glow-panel hero-panel hero-panel-interactive"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={panelRef}
      style={
        {
          "--hero-glare-x": "50%",
          "--hero-glare-y": "50%",
        } as React.CSSProperties
      }
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-xs uppercase tracking-[0.24em] text-foreground-muted">
        <span>business_problem.yml</span>
        <span>command center</span>
      </div>

      <div className="grid gap-6 p-5">
        <pre className="code-block">
          {`challenge: "Scale operations without hiring 50 reps"
goals:
  - launch client portal
  - automate lead routing
  - connect crm + reporting
solution:
  product: "customer operations dashboard"
  ai: "assistant + workflow logic"
  integrations: "salesforce, stripe, analytics"
outcome: "One system for growth"`}
        </pre>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                AI Operations Pipeline
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground-muted">
                Live architecture preview
              </p>
            </div>
            <span className="rounded-full bg-accent-violet/15 px-3 py-1 text-xs text-accent-violet">
              Active
            </span>
          </div>

          <div className="space-y-3">
            {pipelineItems.map((item, index) => (
              <div className="pipeline-row" key={item}>
                <span className="pipeline-index">0{index + 1}</span>
                <span className="text-sm text-foreground-soft">{item}</span>
                <span className="pipeline-dot" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {statusItems.map((item) => (
            <div className="status-card" key={item}>
              <p className="stack-label">{item}</p>
              <p className="mt-2 text-sm text-white">System aligned</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
