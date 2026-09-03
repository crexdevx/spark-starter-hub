import { createFileRoute } from "@tanstack/react-router";

import { Gallery } from "../components/gallery";
import { siteConfig } from "../config/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Inside Our Gym | Sky Lifting Club Gallery" },
      {
        name: "description",
        content:
          "Take a look inside our gym — the free weight racks, strength machines, cardio floor and the members who train at Sky Lifting Club.",
      },
      { property: "og:title", content: "Inside Our Gym — Sky Lifting Club" },
      {
        property: "og:description",
        content:
          "Photos from the training floor at Sky Lifting Club: free weights, strength machines, cardio and community.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: siteConfig.name },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main id="top">
      <Gallery
        eyebrow="Gallery"
        heading="Inside Our Gym"
        description="Every corner of the floor — tap any photo to view it full screen."
      />
    </main>
  );
}
