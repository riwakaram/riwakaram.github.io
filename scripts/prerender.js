/* Emit real HTML entry points for GitHub Pages, which has no SPA rewrites. */
process.env.NODE_ENV = "production";
const fs = require("fs");
const path = require("path");
const pages = require("../src/data/sitePages.json");
const buildDir = path.resolve(__dirname, "../build");
const manifest = require(path.join(buildDir, "asset-manifest.json")).files;
const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

require("@babel/register")({
    babelrc: false,
    configFile: false,
    presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-react"],
    extensions: [".js"],
    ignore: [/node_modules/],
});

for (const extension of [".png", ".jpg", ".jpeg", ".JPG", ".svg", ".ico", ".webp", ".pdf"]) {
    require.extensions[extension] = (module, filename) => {
        const asset = manifest[`static/media/${path.basename(filename)}`];
        if (asset) {
            module.exports = asset;
            return;
        }
        // CRA's url-loader embeds small raster images instead of listing files.
        const mime = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg" }[extension.toLowerCase()];
        const data = fs.readFileSync(filename);
        if (mime && data.length < 10000) {
            module.exports = `data:${mime};base64,${data.toString("base64")}`;
            return;
        }
        throw new Error(`Built asset missing from manifest: ${filename}`);
    };
}

const React = require("react");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const App = require("../src/App").default;
const escape = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function renderPage(page, is404 = false) {
    const canonical = `https://riwakaram.github.io${page.path === "/" ? "/" : `${page.path}/`}`;
    const markup = renderToString(React.createElement(StaticRouter, { location: page.path }, React.createElement(App)));
    let html = template
        .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)} | Riwa Karam</title>`)
        .replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escape(page.description)}">`)
        .replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${escape(page.title)} | Riwa Karam">`)
        .replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${escape(page.description)}">`)
        .replace(/<meta property="og:url" content="[^"]*"\s*\/?\s*>/, `<meta property="og:url" content="${canonical}">`)
        .replace(/<link rel="canonical" href="[^"]*"\s*\/?\s*>/, is404 ? "" : `<link rel="canonical" href="${canonical}">`)
        .replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
    if (is404) html = html.replace("</head>", '<meta name="robots" content="noindex"></head>');
    const destination = is404 ? path.join(buildDir, "404.html") : path.join(buildDir, page.path, "index.html");
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, html);
}

pages.forEach((page) => renderPage(page));
renderPage({ path: "/not-found", title: "Page not found", description: "This page could not be found. Explore Riwa Karam’s research, publications, or homepage." }, true);
fs.writeFileSync(path.join(buildDir, ".nojekyll"), "");
console.log(`Prerendered ${pages.length} pages and a real 404 page for GitHub Pages.`);
