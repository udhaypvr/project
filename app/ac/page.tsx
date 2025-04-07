// app/youtube-viewer/page.tsx
import React from "react";

export default function YouTubeViewerPage() {
  // Extracted details from your iframe:
  const embedUrl =
    "https://www.youtube.com/embed/6Ed5KvZXB_U?si=utAEOU6JpJ0hSAn7";
  const videoTitle = "YouTube video player";
  const allowPolicies =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  const referrer = "strict-origin-when-cross-origin";

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 pt-10">
      {" "}
      {/* Added pt-10 for spacing */}
      <h1 className="text-2xl font-bold mb-6">AC repair</h1>
      {/* Responsive iframe container (16:9 aspect ratio) */}
      <div
        className="relative w-full max-w-3xl overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={videoTitle}
          frameBorder="0" // camelCase for JSX
          allow={allowPolicies}
          referrerPolicy={referrer} // camelCase for JSX
          allowFullScreen // camelCase for JSX
        ></iframe>
      </div>
    </div>
  );
}
