#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const targetDir = process.cwd();
const templateDir = path.join(__dirname, "template");

(async () => {
  try {
    await fs.copy(templateDir, targetDir, {
      overwrite: false,
      errorOnExist: false,
      filter: (src, dest) => {
        return !fs.existsSync(dest); // Only copy if destination doesn't exist
      },
    });

    console.log(`✅ Template files copied to current directory (skipped existing files).`);
    console.log(`
👉 Next steps:
  npm install
  npm run dev
    `);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
})();
