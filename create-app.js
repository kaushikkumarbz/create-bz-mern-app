#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a project name");
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);
const templateDir = path.join(__dirname, "template");

if (fs.existsSync(targetDir)) {
  console.error("❌ Directory already exists");
  process.exit(1);
}

(async () => {
  try {
    await fs.copy(templateDir, targetDir);
    console.log(`✅ Project '${projectName}' created successfully!`);
    console.log(`
👉 Next steps:
  cd ${projectName}
  npm run dev
    `);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
})();
