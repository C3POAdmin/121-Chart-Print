import fs from "fs";

fs.copyFileSync("src/index.js", "dist/index.js");
fs.copyFileSync("src/index.js", "dist/index.cjs");
