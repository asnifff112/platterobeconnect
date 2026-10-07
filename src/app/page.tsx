import { redirect } from "next/navigation";

/**
 * Root route — permanently redirects to /connect.
 * The QR code points to platterobe.co/connect, but if someone
 * visits the bare domain they land on the same page.
 */
export default function HomePage() {
  redirect("/connect");
}


