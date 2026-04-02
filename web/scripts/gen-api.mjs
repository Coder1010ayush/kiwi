import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import openapiTS, { astToString } from "openapi-typescript";

const DEFAULT_OPENAPI_URL =
  "https://app-myautobots-public-dev.s3.amazonaws.com/files/8c45fca2-9d1a-4657-b782-674195cc8a99/autobots_specification.json";

const openApiUrl = process.env.AUTOBOTS_OPENAPI_URL || DEFAULT_OPENAPI_URL;
const outFile = path.join(process.cwd(), "src", "lib", "api", "schema.d.ts");

async function main() {
  console.log(`[gen:api] Fetching OpenAPI spec from: ${openApiUrl}`);

  const res = await fetch(openApiUrl);
  if (!res.ok) {
    throw new Error(`[gen:api] Failed to fetch OpenAPI spec (${res.status}): ${await res.text()}`);
  }

  const schema = await res.json();

  const astOrString = await openapiTS(schema, { exportType: true });
  const types = typeof astOrString === "string" ? astOrString : astToString(astOrString);

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, types, "utf8");

  console.log(`[gen:api] Wrote: ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
