"use client";
import dynamic from "next/dynamic";
const YouTubeReview = dynamic(() => import("../components/YouTubeReviewSection"), {
  ssr: false,
  loading: () => <div>Loading video...</div>,
});
export default function HomePage() {
  return (
    <>
      <YouTubeReview />
      {/* Other client UI here */}
    </>
  );
}
