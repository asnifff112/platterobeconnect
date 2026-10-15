import { redirect } from "next/navigation";

/**
 * Root route — permanently redirects to /connect.
 * If someone visits the bare domain they land on the /connect page.
 */
export default function HomePage() {
  redirect("/connect");
}


