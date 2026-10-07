import type { Metadata } from "next";
import siteConfig from "@/config/site";
import styles from "./connect.module.css";

/* ── SVG Icons (inline to avoid extra network requests) ────── */

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ── Metadata ────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — Connect`,
  description: siteConfig.heroDescription.replace(/\n/g, " "),
};

/* ── Page Component ──────────────────────────────────────────── */

export default function ConnectPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* ── Brand Header ─────────────────────────────── */}
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <img
              src="/logo.jpg"
              alt={`${siteConfig.brandName} logo`}
              className={styles.logo}
              width={72}
              height={72}
            />
          </div>

          <h1 className={styles.brandName}>{siteConfig.brandName}</h1>

          <div className={styles.tagline}>
            {siteConfig.tagline.map((line, i) => (
              <span key={i} className={styles.taglineLine}>
                {line}
              </span>
            ))}
          </div>
        </header>

        {/* ── Divider ──────────────────────────────────── */}
        <div className={styles.divider} />

        {/* ── Hero Section ─────────────────────────────── */}
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>{siteConfig.heroTitle}</h2>
          <p className={styles.heroDescription}>
            {siteConfig.heroDescription.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < siteConfig.heroDescription.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        </section>

        {/* ── Divider ──────────────────────────────────── */}
        <div className={styles.divider} />

        {/* ── Action Buttons ───────────────────────────── */}
        <nav className={styles.actions} aria-label="Contact options">
          {/* Primary CTA — WhatsApp */}
          <a
            id="btn-whatsapp"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            <WhatsAppIcon />
            <span>ORDER ON WHATSAPP</span>
          </a>

          {/* Phone */}
          <a
            id="btn-phone"
            href={siteConfig.phoneUrl}
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            <PhoneIcon />
            <span>CALL US</span>
          </a>

          {/* Instagram */}
          <a
            id="btn-instagram"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnOutline}`}
          >
            <InstagramIcon />
            <span>INSTAGRAM</span>
          </a>

          {/* ── Conditional Future Links ────────────────── */}

          {siteConfig.websiteUrl && (
            <a
              id="btn-website"
              href={siteConfig.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              <GlobeIcon />
              <span>WEBSITE</span>
            </a>
          )}

          {siteConfig.menuUrl && (
            <a
              id="btn-menu"
              href={siteConfig.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              <MenuIcon />
              <span>MENU</span>
            </a>
          )}

          {siteConfig.locationUrl && (
            <a
              id="btn-location"
              href={siteConfig.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              <MapPinIcon />
              <span>LOCATION</span>
            </a>
          )}

          {siteConfig.email && (
            <a
              id="btn-email"
              href={`mailto:${siteConfig.email}`}
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              <MailIcon />
              <span>EMAIL</span>
            </a>
          )}
        </nav>

        {/* ── Divider ──────────────────────────────────── */}
        <div className={styles.divider} />

        {/* ── Footer ───────────────────────────────────── */}
        <footer className={styles.footer}>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.handle}
          >
            {siteConfig.instagramHandle}
          </a>
        </footer>
      </div>
    </main>
  );
}
