import { business } from "../data/business.config";
import { validateBusinessConfig } from "../lib/validate-config";

const result = validateBusinessConfig(business);

if (result.placeholders.length > 0) {
  console.error("\n[TODO_HUMAN] placeholders remaining:");
  for (const p of result.placeholders) {
    console.error(`  - ${p}`);
  }
}

if (result.zodErrors.length > 0) {
  console.error("\nSchema errors:");
  for (const e of result.zodErrors) {
    console.error(`  - ${e}`);
  }
}

if (result.ok) {
  console.log("✓ business.config.ts is valid — ready for delivery.");
  process.exit(0);
} else {
  console.error("\n✗ Config validation failed.");
  process.exit(1);
}
