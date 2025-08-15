/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["en", "mm"], // Both English and Myanmar
  //   defaultLocale: "en", // Default is English
  // },
  images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.go-myanmar.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.tourism.gov.mm',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'admin-mm.tourism.gov.mm',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/", // Only redirect root
  //       destination: "/en", // Redirect to English home
  //       permanent: true,
  //       locale: false, // Prevents locale re-adding and loops
  //     },
  //   ];
  // },
};

export default nextConfig;
