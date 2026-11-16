import { permanentRedirect } from "next/navigation";

export default function MisspelledPrivacyRoute() {
  permanentRedirect("/privacy");
}
