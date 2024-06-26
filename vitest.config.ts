import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    css: true,
    server: {
      deps: {
        inline: ["@siemens/ix"],
      },
    },
  },
});
