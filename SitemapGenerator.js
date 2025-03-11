// SitemapGenerator.js

// Ignore common asset files so Babel doesn't try to process them
[".jpg", ".jpeg", ".png", ".gif", ".pdf", ".ico"].forEach((ext) => {
    require.extensions[ext] = () => {};
});

// Transpile JSX and modern JavaScript with Babel
require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
    extensions: [".js", ".jsx"],
    ignore: [/node_modules/],
});

const router = require("./src/App").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router)
    .build("https://riwakaram.github.io") // Replace with your actual URL
    .save("./public/sitemap.xml");
