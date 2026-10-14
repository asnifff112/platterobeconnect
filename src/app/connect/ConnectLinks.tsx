"use client";

import { useState } from "react";
import siteConfig from "@/config/site";
import styles from "./connect.module.css";

/* ── Minimal SVG Icons ───────────────────────────────────────── */

function MessageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
      strokeWidth="1.5"
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

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

/* ── Connect Links Component ─────────────────────────────────── */

export default function ConnectLinks() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  /* Coming Soon overlay */
  if (showComingSoon) {
    return (
      <div className={styles.comingSoon}>
        <p className={styles.comingSoonBrand}>{siteConfig.brandName}</p>
        <p className={styles.comingSoonTitle}>WEBSITE COMING SOON</p>
        <p className={styles.comingSoonBody}>
          We&rsquo;re working on something fresh.
          <br />
          Check back soon.
        </p>
        <button
          id="btn-back"
          className={styles.link}
          onClick={() => setShowComingSoon(false)}
        >
          <ArrowLeftIcon />
          <span>BACK</span>
        </button>
      </div>
    );
  }

  return (
    <nav className={styles.actions} aria-label="Connect with Platterobe">
      {/* WhatsApp */}
      <a
        id="btn-whatsapp"
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <MessageIcon />
        <span>ORDER ON WHATSAPP</span>
      </a>

      {/* Phone */}
      <a
        id="btn-phone"
        href={siteConfig.phoneUrl}
        className={styles.link}
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
        className={styles.link}
      >
        <InstagramIcon />
        <span>INSTAGRAM</span>
      </a>

      {/* Website — conditional: opens URL if available, else "Coming Soon" */}
      {siteConfig.websiteUrl ? (
        <a
          id="btn-website"
          href={siteConfig.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <ArrowUpRightIcon />
          <span>VISIT WEBSITE</span>
        </a>
      ) : (
        <button
          id="btn-website"
          className={styles.link}
          onClick={() => setShowComingSoon(true)}
        >
          <ArrowUpRightIcon />
          <span>VISIT WEBSITE</span>
        </button>
      )}
    </nav>
  );
}
