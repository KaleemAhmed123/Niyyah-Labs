import Link from "next/link";
import { ThemeToggle } from "@/components/site/theme-toggle";

type SiteHeaderProps = {
  currentPath?: string;
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/engineering", label: "Engineering" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header-shell">
      <div className="site-header">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground-muted">
            Niyyah Labs
          </p>
          <p className="text-sm text-foreground-soft">
            Product engineering, AI systems, and integrations
          </p>
        </div>

        <div className="site-header-actions">
          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive =
                link.href === currentPath ||
                (link.href !== "/" &&
                  !link.href.includes("#") &&
                  currentPath.startsWith(link.href));

              return (
                <Link
                  className={
                    isActive
                      ? "site-nav-link site-nav-link-active"
                      : "site-nav-link"
                  }
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
