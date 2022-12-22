import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./assets/styles/mixins.scss"; @import "./assets/styles/variables.scss";`,
        },
      },
    },
  };
});
