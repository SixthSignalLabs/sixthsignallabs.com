import { redirect } from "next/navigation";

export default function MisspelledPrivacyRoute() {
  redirect("/privacy");
}
