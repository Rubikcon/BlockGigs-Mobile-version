import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "BlockGigs",
        short_name: "BlockGigs",
        description:
          "A decentralized platform leveraging Web3 technologies to connect employers and freelancers in a trustless environment. This platform uses smart contracts to act as an escrow service for job offers, ensuring secure payments and transparency throughout the project lifecycle.",
        theme_color: "#2f66f6",
        background_color: "#fff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "../src/assets/logo1.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "../src/assets/logo_.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],

  server: {
    proxy: {
      "/api": {
        target: "https://blockgigs-mobile-version-backend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
