export type GalleryItem = {
  src: string;
  alt: string;
  category: "Workplaces" | "Team" | "Documentation" | "Travel";
  span?: boolean; // wider tile in the masonry grid
};

export const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    alt: "Construction crew working on a high-rise site",
    category: "Workplaces",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    alt: "Recruitment team in an office meeting",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    alt: "Candidate interview and selection drive",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Documentation and paperwork processing",
    category: "Documentation",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    alt: "Aircraft at the airport ready for departure",
    category: "Travel",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    alt: "Engineer reviewing technical plans on site",
    category: "Workplaces",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    alt: "Hospitality staff at a luxury hotel",
    category: "Workplaces",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Team collaborating over a project",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=900&q=80",
    alt: "Worker holding passport and travel documents",
    category: "Documentation",
  },
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=80",
    alt: "Workers travelling to a new destination",
    category: "Travel",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    alt: "Technician working in a manufacturing plant",
    category: "Workplaces",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    alt: "Modern office workspace of the recruitment team",
    category: "Team",
  },
];
