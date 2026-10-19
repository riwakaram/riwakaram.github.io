# Riwa Karam | Personal Academic Website

[![Website](https://img.shields.io/badge/Website-riwakaram.github.io-9B4DCA?style=for-the-badge)](https://riwakaram.github.io)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222222?style=for-the-badge&logo=github)](https://pages.github.com/)

The source code for my personal academic and professional website. The site
presents my work in multi-agent systems, robotics, machine learning,
optimization, and human-swarm interaction.

**Live website:** [riwakaram.github.io](https://riwakaram.github.io)

## Overview

This website provides a central, accessible record of my research,
publications, presentations, education, professional experience, awards, and
recent activities. It is designed as a responsive single-page React
application and deployed through GitHub Pages.

The content reflects my work as a Ph.D. candidate in Electrical Engineering
and Computer Science at the University of California, Irvine and as a member
of the UCI Robot Ecology Lab.

## Website Sections

| Page | Description |
| --- | --- |
| **Home** | Research introduction, academic highlights, and recent updates |
| **Research** | Current research directions in collaborative multi-agent systems, robot learning, hardware testbeds, and human-swarm interaction |
| **Projects** | Placeholder page marked TBD |
| **Publications** | Papers, preprints, thesis work, presentations, posters, slides, and recordings |
| **News** | Research milestones, conferences, internships, awards, and academic activities |
| **CV** | Education, research and industry experience, service, certifications, awards, and technical skills |
| **Contact** | Professional profiles, contact information, and downloadable résumé |

## Key Features

- Responsive layout for desktop, tablet, and mobile devices
- Timeline CV with section navigation, expandable details, and print support
- News timeline grouped by year with an index and expand/collapse controls
- Interactive research map with keyboard-accessible nodes and direct links to related work
- Custom research illustrations, official organization logos, and subtle motion
- Keyboard focus, skip navigation, and reduced-motion support
- Reusable React components for cards, navigation, and carousels
- Dedicated research, publication, news, CV, and contact pages
- Direct access to papers, posters, presentations, certificates, and résumé
- Client-side routing with React Router
- Search-engine metadata, `robots.txt`, and an automatically generated sitemap
- Static deployment through GitHub Pages

## Technology Stack

- **Frontend:** React 18, React Router
- **UI:** React Bootstrap, Bootstrap, custom CSS
- **Build tooling:** Create React App and React Scripts
- **SEO:** XML sitemap generation with `xmlbuilder2`
- **Hosting:** GitHub Pages
- **Testing:** React Testing Library and Jest

## Project Structure

```text
.
├── public/
│   ├── index.html              # HTML template and search metadata
│   ├── 404.html                # GitHub Pages fallback
│   ├── robots.txt              # Search crawler configuration
│   └── sitemap.xml             # Generated sitemap
├── src/
│   ├── Components/             # Shared interface components
│   ├── Files/                  # Résumé, papers, posters, and certificates
│   ├── Images/                 # Profile, event, award, and news images
│   ├── Pages/                  # Route-level page components
│   ├── App.js                  # Application routes and shared layout
│   └── index.css               # Global design system and responsive styles
├── SitemapGenerator.js         # Sitemap generation script
└── package.json                # Dependencies and project scripts
```

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### Installation

```bash
git clone https://github.com/riwakaram/riwakaram.github.io.git
cd riwakaram.github.io
npm install
```

### Start the Development Server

```bash
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000).
Changes to source files will reload automatically.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Run the local development server |
| `npm test` | Run the test suite in interactive watch mode |
| `npm run build` | Generate the sitemap, build assets, and prerender each page |
| `npm run sitemap` | Regenerate `public/sitemap.xml` |
| `npm run predeploy` | Regenerate the sitemap and create the production build |
| `npm run deploy` | Publish the production build to GitHub Pages |

## Updating Website Content

Most website content is maintained directly in the relevant page component:

- Research topics, illustrations, and related work: `src/data/researchAreas.js`
- Publications and presentations: `src/Pages/Publications.js`
- News and milestones: `src/Pages/News.js`
- CV content: `src/Pages/Vitae.js`
- Contact and profile links: `src/Pages/About.js`
- Projects placeholder: `src/Pages/Projects.js`
- Homepage highlights: `src/Pages/Home.js`

Supporting PDFs and images are stored in `src/Files` and `src/Images`.
Asset filenames use underscores between words to keep import paths consistent.
After replacing an asset, verify that its filename matches the corresponding
React import exactly.

## Sitemap and Search Indexing

The sitemap and static page metadata share the route list in
`src/data/sitePages.json`. When adding or removing a public route:

1. Update the routes in `src/App.js`.
2. Update the route metadata in `src/data/sitePages.json`.
3. Run `npm run sitemap`.
4. Deploy the updated website.

The deployment process generates the sitemap before building, ensuring that
the latest `sitemap.xml` is included in the published site. The sitemap is
available at:

[https://riwakaram.github.io/sitemap.xml](https://riwakaram.github.io/sitemap.xml)

It is also declared in `public/robots.txt` for search-engine discovery.

## Deployment

To build and publish the site to GitHub Pages:

```bash
npm run deploy
```

The `predeploy` script automatically regenerates the sitemap and creates the
optimized production build before deployment.

## Contact

- **Website:** [riwakaram.github.io](https://riwakaram.github.io)
- **LinkedIn:** [linkedin.com/in/riwakaram](https://www.linkedin.com/in/riwakaram/)
- **GitHub:** [github.com/riwakaram](https://github.com/riwakaram)
- **Google Scholar:** [Riwa Karam](https://scholar.google.com/citations?user=Xt1TuawAAAAJ&hl=en)
- **ORCID:** [0009-0009-4042-4530](https://orcid.org/0009-0009-4042-4530)

---

Built and maintained by **Riwa Karam**.

## Visual assets and design

The theme uses a warm neutral background, lightly tinted cards, charcoal text,
muted plum primary actions, and small burnt-orange details. Shared tokens keep
cards, navigation, controls, and the graph consistent. Solid fills, thin borders,
and light shadows create a restrained finish; hover and press feedback stay subtle.
Motion respects reduced-motion settings, and pointer effects are limited to precise
pointing devices.
Shared theme tokens live in `src/index.css`; layouts in `src/refresh.css`,
actions in `src/buttons.css`, and the interactive map in `src/research-map.css`.

The four current research illustrations were generated with the built-in image
generation tool and optimized as 1200 × 800 WebP assets in `src/Images/research`:
`collaboration-concept-v2.webp`, `learning-concept-v2.webp`,
`testbed-concept-v2.webp`, and `human-swarm-concept-v2.webp`.
They illustrate complementary capabilities, robot transfers between teams,
experimental infrastructure, and sketch-to-swarm formations. They are conceptual
artwork, not photographs or exact experimental schematics. The final prompt set
and research sources are recorded in `src/Images/research/research-redraw-prompts.json`.
Previous illustration variants remain available in the same directory.

Additional CV logo sources and asset notes are recorded in `src/Images/logos/sources.json`. Specific society logos take precedence over parent-institution logos; reversed white marks use a dark backing.

Organization logos are stored locally under `src/Images/logos` and sourced
from the organizations' public sites:

- UC Irvine: official wordmark from [uci.edu](https://uci.edu/)
- ASML: [official SVG](https://www.asml.com/images/icons/asml-logo.svg)
- University of Balamand: [official logo](https://www.balamand.edu.lb/Style%20Library/balamand_files_/BalamandLogo.png)

The UCI and ASML SVG symbols are wrapped as standalone SVG images without
changing their paths. No external image service is needed at runtime.

## Static routes and Google Search Console

`npm run build` generates real HTML files for all seven routes, including
`build/research/index.html`, plus route-specific titles, descriptions, and canonical
URLs. This allows GitHub Pages to serve the pages directly instead of returning
404 and relying on a JavaScript redirect. `scripts/prerender.js` uses the existing
React components and compiled asset manifest. Unknown paths retain a real 404 page.
The build also contains `.nojekyll` and `sitemap.xml`.

After deployment, verify `/research/`, `/publications/`, `/news/`, `/vitae/`,
`/about/`, `/projects/`, and `/sitemap.xml` return HTTP 200. In Search Console,
remove ordinary page paths from the submitted-sitemaps list and resubmit only
`https://riwakaram.github.io/sitemap.xml`. Inspect the reported 404 URL: keep 404
for truly removed pages, or confirm the intended page now works before requesting
indexing and validating the fix. Indexing is ultimately controlled by Google.
