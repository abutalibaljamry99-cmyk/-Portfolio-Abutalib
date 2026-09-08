export type Project = {
  slug: string;
  number: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  scope: string[];
  coverImage: string;   // صورة الغلاف (تظهر في كارت المشروع)
  gallery: string[];    // صور تفاصيل المشروع (تظهر في صفحته الخاصة)
};

export const projects: Project[] = [
  {
    slug: "king-salman-oasis",
    number: "01",
    title: "King Salman Oasis",
    location: "Riyadh, Saudi Arabia",
    type: "Large-scale development",
    summary: "A coordinated architectural and BIM workflow supporting design development, documentation, and multidisciplinary integration for a major Riyadh destination.",
    scope: ["Architectural design", "Revit BIM modeling", "Construction documentation", "Navisworks coordination"],
    coverImage: "/projects/king-salman-oasis/cover.jpg",
    gallery: [
      "/projects/king-salman-oasis/01.jpg",
      "/projects/king-salman-oasis/02.jpg",
      "/projects/king-salman-oasis/03.jpg",
    ],
  },
  {
    slug: "royal-commission",
    number: "02",
    title: "Royal Commission Projects",
    location: "Jubail & Yanbu, Saudi Arabia",
    type: "Government projects",
    summary: "Design and delivery support across Royal Commission projects, with a focus on coordinated information, clash detection, and reliable project timelines.",
    scope: ["BIM coordination", "Clash detection", "MEP integration", "4D scheduling"],
    coverImage: "/projects/royal-commission/cover.jpg",
    gallery: [
      "/projects/royal-commission/01.jpg",
      "/projects/royal-commission/02.jpg",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
