import React from "react";

export default function DashboardPage() {
  const embedUrl =
    "https://www.youtube.com/embed/4KDM-LI1Z_0?si=bJnIb6uIcO7Ci1wC";
  const videoTitle = "YouTube video player";
  const allowPolicies =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  const referrer = "strict-origin-when-cross-origin";

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 pt-10">
      <h1 className="text-2xl font-bold mb-6">Dashboard Video</h1>

      <div
        className="relative w-full max-w-3xl overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={videoTitle}
          frameBorder="0"
          allow={allowPolicies}
          referrerPolicy={referrer}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
