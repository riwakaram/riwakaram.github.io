// const { SitemapStream, streamToPromise } = require("sitemap");
// const { Readable } = require("stream");
// const fs = require("fs");

// const links = [
//     { url: "/", changefreq: "daily", priority: 1.0 },
//     { url: "/about", changefreq: "daily", priority: 0.9 },
//     { url: "/news", changefreq: "daily", priority: 0.9 },
//     { url: "/publications", changefreq: "daily", priority: 0.9 },
//     { url: "/vitae", changefreq: "daily", priority: 0.9 },
// ];

// (async () => {
//     try {
//         const stream = new SitemapStream({
//             hostname: "https://riwakaram.github.io",
//         });
//         const xml = await streamToPromise(Readable.from(links).pipe(stream));
//         fs.writeFileSync("./public/sitemap.xml", xml.toString());
//         console.log("Sitemap successfully generated.");
//     } catch (error) {
//         console.error("Error generating sitemap:", error);
//     }
// })();

// const fs = require("fs");
// const { create } = require("xmlbuilder2");

// const baseUrl = "https://riwakaram.github.io";
// const routes = ["/", "/about", "/news", "/publications", "/vitae"];

// const urlset = create({ version: "1.0" }).ele("urlset", {
//     xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
// });

// routes.forEach((route) => {
//     const url = urlset.ele("url");
//     url.ele("loc").txt(baseUrl + route);
//     url.ele("lastmod").txt(new Date().toISOString());
// });

// const xml = urlset.end({ prettyPrint: true });
// fs.writeFileSync("./public/sitemap.xml", xml);

// console.log("Sitemap generated successfully!");

const fs = require("fs");
const { create } = require("xmlbuilder2");

const baseUrl = "https://riwakaram.github.io";

const routes = [
    { path: "/", changefreq: "daily", priority: "1.0" },
    { path: "/about", changefreq: "daily", priority: "0.9" },
    { path: "/news", changefreq: "daily", priority: "0.9" },
    { path: "/publications", changefreq: "daily", priority: "0.9" },
    { path: "/vitae", changefreq: "daily", priority: "0.9" },
];

const urlset = create({ version: "1.0" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
});

routes.forEach(({ path, changefreq, priority }) => {
    const url = urlset.ele("url");
    url.ele("loc").txt(baseUrl + path);
    url.ele("lastmod").txt(new Date().toISOString());
    url.ele("changefreq").txt(changefreq);
    url.ele("priority").txt(priority);
});

const xml = urlset.end({ prettyPrint: true });
fs.writeFileSync("./public/sitemap.xml", xml);

console.log("Sitemap generated successfully!");
