export type DesignFit = "contain" | "cover";

export interface DesignWork {
  title: string;
  category: "Brand Identity" | "Promotional Design" | "Merchandise / Branding";
  image: string;
  alt: string;
  fit: DesignFit;
}

export const designWorks: DesignWork[] = [
  { title: "Logo 1", category: "Brand Identity", image: "/logo-1.png", alt: "Logo design work", fit: "contain" },
  { title: "Logo 2", category: "Brand Identity", image: "/logo-2.png", alt: "Logo design work", fit: "contain" },
  { title: "Logo 3", category: "Brand Identity", image: "/logo-4.png", alt: "Logo design work", fit: "contain" },
  { title: "Poster 1", category: "Promotional Design", image: "/poster-1.png", alt: "Promotional poster design", fit: "contain" },
  { title: "Poster 2", category: "Promotional Design", image: "/poster-2.png", alt: "Promotional poster design", fit: "contain" },
  { title: "Poster 3", category: "Promotional Design", image: "/poster-3.png", alt: "Promotional poster design", fit: "contain" },
  { title: "Shirt 1", category: "Merchandise / Branding", image: "/shirt-1.png", alt: "Branded shirt design", fit: "contain" },
  { title: "Shirt 2", category: "Merchandise / Branding", image: "/shirt-2.png", alt: "Branded shirt design", fit: "contain" },
];
