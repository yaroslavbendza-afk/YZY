import { spawn } from "child_process";

const env = { ...process.env };
delete env.ELECTRON_RUN_AS_NODE;

const cypress = spawn("npx", ["cypress", "run"], {
  env,
  stdio: "inherit",
  shell: true,
});

cypress.on("exit", (code) => {
  process.exit(code || 0);
});
