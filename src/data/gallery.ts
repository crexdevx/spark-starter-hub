import g1 from "../assets/gallery-1.webp.asset.json";
import g2 from "../assets/gallery-2.webp.asset.json";
import g3 from "../assets/gallery-3.webp.asset.json";
import g4 from "../assets/gallery-4.webp.asset.json";
import g5 from "../assets/gallery-5.webp.asset.json";
import g8 from "../assets/gallery-8.webp.asset.json";
import g9 from "../assets/gallery-9.webp.asset.json";
import g10 from "../assets/gallery-10.webp.asset.json";

export type Shot = { url: string; alt: string };

export const SHOTS: Shot[] = [
  { url: g9.url, alt: "Bench press racks under magenta neon lighting" },
  { url: g10.url, alt: "Row of adjustable benches beside dumbbell racks" },
  { url: g5.url, alt: "Member flexing in front of the mirror wall" },
  { url: g8.url, alt: "Treadmills lined along the floor-to-ceiling windows" },
  { url: g2.url, alt: "Plate-loaded machines in the strength zone" },
  { url: g1.url, alt: "Barbell and dumbbell racks in the free weights area" },
  { url: g3.url, alt: "Members training together on the gym floor" },
  { url: g4.url, alt: "Overhead shot of a member on the training floor" },
];
