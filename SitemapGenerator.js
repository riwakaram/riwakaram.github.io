const fs = require("fs");
const { create } = require("xmlbuilder2");

const baseUrl = "https://riwakaram.github.io";

const routes = require("./src/data/sitePages.json");

const urlset = create({ version: "1.0" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
});

routes.forEach(({ path }) => {
    const url = urlset.ele("url");
    url.ele("loc").txt(baseUrl + (path === "/" ? "/" : path + "/"));
});

const xml = urlset.end({ prettyPrint: true });
fs.writeFileSync("./public/sitemap.xml", xml);

console.log("Sitemap generated successfully!");
