import { CircleAlert } from "lucide-react";

import { isPublishingReady, launchBlockers } from "../_data/oryfin-data";

export function PublicationNotice() {
  if (isPublishingReady) return null;

  return (
    <aside
      aria-label="Publication status"
      className="oryfin-screen-only border border-[#f6a828]/35 bg-[#fff8e8] p-5 sm:p-6"
    >
      <div className="flex gap-3">
        <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#9a5b00]" />
        <div>
          <h2 className="text-sm font-semibold text-[#6f4300]">Review draft — not ready to publish</h2>
          <p className="mt-2 text-sm leading-6 text-[#765315]">
            Required publishing details are missing: {launchBlockers.join(", ")}. These routes are
            marked noindex until the configuration is complete.
          </p>
        </div>
      </div>
    </aside>
  );
}
