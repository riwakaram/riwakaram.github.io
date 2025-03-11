if (process.env.GENERATE_SITEMAP === "true") {
    const extensionsToIgnore = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".pdf",
        ".ico",
    ];
    extensionsToIgnore.forEach((ext) => {
        require.extensions[ext] = () => {};
        require.extensions[ext.toUpperCase()] = () => {};
    });
}

require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
    extensions: [".js", ".jsx"],
    ignore: [/node_modules/],
});

const router = require("./src/App").default;
const Sitemap = require("react-router-sitemap").default;

const sitemapInstance = new Sitemap(router).build(
    "https://riwakaram.github.io"
);

if (sitemapInstance && sitemapInstance.urls) {
    sitemapInstance.urls.push({
        loc: "https://riwakaram.github.io/about",
    });
    sitemapInstance.urls.push({
        loc: "https://riwakaram.github.io/experience",
    });
    sitemapInstance.urls.push({
        loc: "https://riwakaram.github.io/publications",
    });
    sitemapInstance.urls.push({
        loc: "https://riwakaram.github.io/contact",
    });
}

sitemapInstance.save("./public/sitemap.xml");
