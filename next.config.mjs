/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["en", "mm"], // Both English and Myanmar
  //   defaultLocale: "en", // Default is English
  // },
  images: {
    domains: ["www.go-myanmar.com", "i.ibb.co"],
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
