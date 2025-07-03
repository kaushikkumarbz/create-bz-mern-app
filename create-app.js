#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const targetDir = process.cwd();
const templateDir = path.join(__dirname, "template");

(async () => {
  try {
    const templateFiles = await fs.readdir(templateDir);

    for (const file of templateFiles) {
      const destPath = path.join(targetDir, file);

      if (fs.existsSync(destPath)) {
        console.error(`❌ File or directory '${file}' already exists in the current directory`);
        process.exit(1);
      }
    }

    await fs.copy(templateDir, targetDir);
    console.log(`✅ Template files copied to current directory!`);
    console.log(`✅ Update the environment variables and you are ready to run the project!`);
    console.log(`
👉 Next steps:
  npm run dev
    `);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
})();
