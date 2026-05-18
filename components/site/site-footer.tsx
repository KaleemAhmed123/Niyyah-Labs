import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

const supportLinks = [
  { href: "/engineering", label: "Engineering" },
  { href: "/faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="page-shell mt-6 px-6 pb-10 lg:px-10">
      <div className="site-footer">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground-muted">
            Niyyah Labs
          </p>
          <p className="max-w-md text-sm leading-7 text-foreground-soft">
            Product engineering, AI systems, and integrations for teams that need
            software they can actually operate on.
          </p>
        </div>

        <div className="site-footer-links">
          <div>
            <p className="stack-label">Primary</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {primaryLinks.map((link) => (
                <Link className="site-footer-link" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="stack-label">More</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {supportLinks.map((link) => (
                <Link className="site-footer-link" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
