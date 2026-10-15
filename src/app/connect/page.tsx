import type { Metadata } from "next";
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
        <h1 className={styles.brandName}>{siteConfig.brandName}</h1>
        <ConnectLinks />
      </div>
    </main>
  );
}
