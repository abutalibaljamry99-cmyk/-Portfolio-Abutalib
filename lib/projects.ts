export type ProjectMedia = {
  kind: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  poster?: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  scope: string[];
  coverImage?: string;
  media?: ProjectMedia[];
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
    media: [],
  },
  {
    slug: "royal-commission",
    number: "02",
    title: "Royal Commission Projects",
    location: "Jubail & Yanbu, Saudi Arabia",
    type: "Government projects",
    summary: "Design and delivery support across Royal Commission projects, with a focus on coordinated information, clash detection, and reliable project timelines.",
    scope: ["BIM coordination", "Clash detection", "MEP integration", "4D scheduling"],
    media: [],
  },
  {
    slug: "dreams-hotel",
    number: "03",
    title: "Dreams Hotel",
    location: "Saudi Arabia",
    type: "Hospitality / Architectural visualization",
    summary: "A hospitality design study exploring a refined hotel facade, illuminated public realm, and a clear arrival experience through architectural visualization.",
    scope: ["Architectural design", "Facade development", "3D visualization", "Public realm study"],
    coverImage: "/projects/dreams-hotel-1.png",
    media: [
      {
        kind: "image",
        src: "/projects/dreams-hotel-1.png",
        alt: "Dreams Hotel facade at dusk with illuminated entrances and a wet public plaza",
        caption: "This photo is from the Dreams Hotel project.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}