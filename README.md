# Abutalib Eldaw Elnour — Portfolio

Presentation portfolio for Abutalib Eldaw Elnour, Architectural Designer and BIM Specialist based in Saudi Arabia.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Build

```bash
npm run build
```

The portfolio includes architectural and BIM services, selected projects, experience, certifications, and contact links.

## Adding projects and work files

Projects are managed in `lib/projects.ts`. Add a new object to the `projects` array with a unique `slug`, title, description, scope, and optional media.

Place project files in `public/projects/`, then reference them with a public path:

```ts
{
  slug: "dreams-hotel",
  number: "03",
  title: "Dreams Hotel",
  location: "Saudi Arabia",
  type: "Hospitality / Architectural visualization",
  summary: "A short description of the work.",
  scope: ["Architectural design", "3D visualization"],
  coverImage: "/projects/dreams-hotel-1.png",
  media: [
    {
      kind: "image",
      src: "/projects/dreams-hotel-1.png",
      alt: "Descriptive alternative text",
      caption: "This photo is from the Dreams Hotel project.",
    },
    {
      kind: "video",
      src: "/projects/dreams-hotel-walkthrough.mp4",
      alt: "Dreams Hotel walkthrough",
      caption: "Exterior walkthrough of the project.",
      poster: "/projects/dreams-hotel-poster.jpg",
    },
  ],public/projects/dreams-hotel-1.pnghttps://github.com/abutalibaljamry99-cmyk/-Portfolio-Abutalib/blob/78514cc5cb43aea0b9b48e2c30f6ac5a1ce80e33/Dreams%20Hotel%20(1).png
}
```https://github.com/abutalibaljamry99-cmyk/-Portfolio-Abutalib/blob/6c108fb624095ed5b4c5961fb13e3b20588d3629/Dreams%20Hotel%20(1).png

The project automatically appears on `/projects` and gets a detail page at `/projects/dreams-hotel`. Media is displayed as a photo gallery or a native video player on that detail page.
