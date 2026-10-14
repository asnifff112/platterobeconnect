import type { Metadata } from "next";
import Image from "next/image";
import siteConfig from "@/config/site";
import ConnectLinks from "./ConnectLinks";
import styles from "./connect.module.css";

/* ── Metadata ────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — Connect`,
  description:
    "Freshly prepared meals made for everyday living. Order on WhatsApp or call us directly.",
};

/* ── Page ─────────────────────────────────────────────────────── */

export default function ConnectPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.brandName}
            width={68}
            height={68}
            className="rounded-[14px] object-contain shadow-sm"
            priority
          />
          <h1 className={styles.brandName}>{siteConfig.brandName}</h1>
        </div>
        <ConnectLinks />
      </div>
    </main>
  );
}
