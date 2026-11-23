import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site builds to plain HTML/CSS/JS in `out/`,
  // deployable on Cloudflare Pages like any static site (no Node server).
  output: "export",
  // Emit each route as its own folder (about-us/index.html) so any static
  // host — Cloudflare Pages included — serves clean URLs like /about-us/.
  trailingSlash: true,
  images: {
    // next/image optimisation needs a server; images are already .webp,
    // so serve them as-is.
    unoptimized: true,
    formats: ["image/webp"],
  },
};

export default nextConfig;
