// @ts-check
import fs from "fs/promises";
import path from "path";

const PATH_TO_PACKAGE_1_FOLDER = path.join(process.cwd(), "packages/package-1");
const PATH_TO_SRC_FOLDER = path.join(PATH_TO_PACKAGE_1_FOLDER, "src");
const PATH_TO_MODULES_FOLDER = path.join(PATH_TO_SRC_FOLDER, "modules");

await fs.mkdir(PATH_TO_MODULES_FOLDER, { recursive: true });

const array = new Array(10).fill(0);
await Promise.all(
  array.map((_, idx) =>
    fs.writeFile(
      path.join(PATH_TO_MODULES_FOLDER, `module-${idx}.ts`),
      `export const value${idx} = ${idx}`,
      "utf-8"
    )
  )
);

await fs.writeFile(
  path.join(PATH_TO_SRC_FOLDER, "index.ts"),
  array
    .map((_, idx) => `export { value${idx} } from './modules/module-${idx}'`)
    .join("\n"),
  "utf-8"
);
