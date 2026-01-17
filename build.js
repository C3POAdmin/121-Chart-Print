import fs from "fs";
import path from "path";

const srcDir = "src";
const distDir = "dist";

fs.mkdirSync(distDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  if (file.endsWith(".js") || file.endsWith(".css") ) {
    fs.copyFileSync(
      path.join(srcDir, file),
      path.join(distDir, file)
    );
  }
}
