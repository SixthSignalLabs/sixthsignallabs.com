import { appData, getStoreUrl } from "../_data/app-data";

export function AppStoreCta() {
  const play = getStoreUrl("android");
  const apple = getStoreUrl("ios");
  return (
    <div className="hp-actions">
      {play ? (
        <a className="hp-button" href={play}>
          Get it on Google Play
        </a>
      ) : (
        <p className="hp-availability">
          <span aria-hidden="true" />
          {appData.availabilityMessage}
        </p>
      )}
      {apple && (
        <a className="hp-button" href={apple}>
          Download on the App Store
        </a>
      )}
    </div>
  );
}
