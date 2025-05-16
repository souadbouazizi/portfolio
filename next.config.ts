// next.config.js
const createMDX = require("@next/mdx")();

const nextConfig = {
  experimental: {
    viewTransition: true,
    mdxRs: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    resolveExtensions: [".js", ".jsx", ".md", ".mdx", ".ts", ".tsx"],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };

      // Ajout pour gérer le prefixe "node:" dans imports
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "node:fs": false,
        "node:path": false,
        "node:os": false,
      };
    }
    return config;
  },
};

module.exports = createMDX(nextConfig);
