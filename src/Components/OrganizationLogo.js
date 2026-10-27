import React from "react";
import uci from "../Images/logos/uci.svg";
import asml from "../Images/logos/asml.svg";
import balamand from "../Images/logos/balamand.png";
import csff from "../Images/logos/csff.svg";
import conservatory from "../Images/logos/conservatory.jpg";
import aviapro from "../Images/logos/aviapro.svg";
import geecs from "../Images/logos/geecs.jpg";
import css from "../Images/logos/ieee-css.jpg";
import ieee from "../Images/logos/ieee.png";
import computer from "../Images/logos/ieee-computer.png";
import mentor from "../Images/logos/mentor.svg";
import zaka from "../Images/logos/zaka.webp";
import asme from "../Images/logos/asme.svg";
import arab from "../Images/logos/arab-iot.png";
import mathworks from "../Images/logos/mathworks.svg";
import ielts from "../Images/logos/ielts.png";
import collegeboard from "../Images/logos/collegeboard.png";
import guides from "../Images/logos/guides.png";
import laTimes from "../Images/logos/la-times.svg";
import arm from "../Images/logos/arm.svg";
import cdc2025 from "../Images/logos/cdc-2025.svg";
import cdc2026 from "../Images/logos/cdc-2026.png";
import ucla from "../Images/logos/ucla.svg";
import usc from "../Images/logos/usc.svg";
import ucsd from "../Images/logos/ucsd.png";
import ucsb from "../Images/logos/ucsb.svg";
import arxiv from "../Images/logos/arxiv.svg";

// Specific organizations precede parent institutions (e.g. GEECS before UCI).
// Asset provenance and presentation variants: Images/logos/sources.json.
const organizations = [
    { match: /^UCLA$/, src: ucla, name: "UCLA", dark: true },
    { match: /^USC$/, src: usc, name: "University of Southern California" },
    { match: /^UCSD$/, src: ucsd, name: "UC San Diego" },
    { match: /^UCSB$/, src: ucsb, name: "UC Santa Barbara" },
    { match: /^arXiv$/i, src: arxiv, name: "arXiv" },
    { match: /^CDC 2025$/, src: cdc2025, name: "IEEE CDC 2025 — Rio de Janeiro" },
    { match: /^CDC 2026$/, src: cdc2026, name: "IEEE CDC 2026 — Honolulu" },
    { match: /^Arm$/i, src: arm, name: "Arm", dark: true },
    { match: /Los Angeles Times|LA Times/i, src: laTimes, name: "Los Angeles Times", dark: true },
    { match: /GEECS/i, src: geecs, name: "UCI GEECS" },
    { match: /IEEE CSS|Control Systems Society/i, src: css, name: "IEEE Control Systems Society" },
    { match: /IEEE Computer Society/i, src: computer, name: "IEEE Computer Society" },
    { match: /Mentor Collective/i, src: mentor, name: "Mentor Collective" },
    { match: /ZAKA/i, src: zaka, name: "ZAKA" },
    { match: /ASME/i, src: asme, name: "ASME", dark: true },
    { match: /Arab IoT|Lebanon IoT/i, src: arab, name: "Arab IoT & AI Challenge" },
    { match: /Mathworks/i, src: mathworks, name: "MathWorks" },
    { match: /IELTS/i, src: ielts, name: "IELTS" },
    { match: /^SAT\b/, src: collegeboard, name: "College Board" },
    { match: /Guides du Liban/i, src: guides, name: "Association des Guides du Liban" },
    { match: /Sainte Famille/i, src: csff, name: "Collège de la Sainte Famille Fanar" },
    { match: /Conservatory of Music/i, src: conservatory, name: "Lebanese National Higher Conservatory of Music" },
    { match: /AviaPro/i, src: aviapro, name: "AviaPro Consulting" },
    { match: /ASML/i, src: asml, name: "ASML" },
    { match: /Balamand/i, src: balamand, name: "University of Balamand" },
    { match: /University of California, Irvine|UCI|UC Irvine/, src: uci, name: "UC Irvine" },
    { match: /\bIEEE\b/, src: ieee, name: "IEEE", dark: true },
];

export default function OrganizationLogo({ name = "" }) {
    const organization = organizations.find((item) => item.match.test(name));
    return organization ? <img className={`organization-logo${organization.dark ? " organization-logo-dark" : ""}`} src={organization.src} alt={organization.name} loading="lazy" width="144" height="64" /> : null;
}
