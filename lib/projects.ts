export type Project = {
  slug: string;
  number: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  scope: string[];
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
  },
  {
    slug: "royal-commission",
    number: "02",
    title: "Royal Commission Projects",
    location: "Jubail & Yanbu, Saudi Arabia",
    type: "Government projects",
    summary: "Design and delivery support across Royal Commission projects, with a focus on coordinated information, clash detection, and reliable project timelines.",
    scope: ["BIM coordination", "Clash detection", "MEP integration", "4D scheduling"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}