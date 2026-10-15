import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "PLATTEROBE — More Than a Meal. A Daily Essential.",
  description:
    "Freshly prepared meals made for everyday living. Order on WhatsApp or call us directly.",
  metadataBase: new URL("https://www.platterobe.store"),
  icons: {
    icon: [
      { url: "/images/logo.png" },
      { url: "/favicon.ico" },
    ],
  },
  openGraph: {
    title: "PLATTEROBE",
    description: "More Than a Meal. A Daily Essential.",
    url: "https://www.platterobe.store/connect",
    siteName: "PLATTEROBE",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "PLATTEROBE Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
