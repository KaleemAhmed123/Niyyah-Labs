import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  applicationName: "Niyyah Labs",
  metadataBase: new URL("https://niyyahlabs.dev"),
  title: {
    default: "Niyyah Labs | Product Engineering, AI Systems, and Integrations",
    template: "%s | Niyyah Labs",
  },
  description:
    "Niyyah Labs builds software, AI systems, and integrations that run modern businesses.",
  keywords: [
    "product engineering agency",
    "mvp development",
    "ai automation agency",
    "custom software development",
    "salesforce development",
    "api integrations",
  ],
  openGraph: {
    title: "Niyyah Labs",
    description:
      "Software, AI systems, and integrations engineered for businesses that need real operating systems, not disconnected tools.",
    url: "https://niyyahlabs.dev",
    siteName: "Niyyah Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niyyah Labs",
    description:
      "We build software, AI systems, and integrations that run modern businesses.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const storedTheme = localStorage.getItem("niyyah-theme");
    const theme = storedTheme || "dark";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();`,
          }}
        />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
