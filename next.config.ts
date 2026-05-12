/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/corte-de-pelo%20-hombre-marbella",
        destination: "/corte-de-pelo-hombre-marbella",
        permanent: true,
      },
      {
        source: "/corte-premium",
        destination: "/corte-de-pelo-hombre-marbella",
        permanent: true,
      },
      {
        source: "/barba-premium",
        destination: "/arreglo-de-barba-marbella",
        permanent: true,
      },
      {
        source: "/corte-barba-premium",
        destination: "/corte-y-barba-premium-marbella",
        permanent: true,
      },
      {
        source: "/barberia-marbella-corte-barba",
        destination: "/corte-y-barba-premium-marbella",
        permanent: true,
      },
      {
        source: "/tratamientos",
        destination: "/tratamiento-capilar-hombre-marbella",
        permanent: true,
      },
      {
        source: "/servicios",
        destination: "/barberia-hombre-marbella",
        permanent: true,
      },
      {
        source: "/barberia-marbella",
        destination: "/barberia-hombre-marbella",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;