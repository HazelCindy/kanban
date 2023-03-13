const ContentSecurityPolicy = `
  default-src 'none';
  prefetch-src 'self';
  style-src https://fonts.googleapis.com/ 'unsafe-inline';
  style-src-elem 'self' https://fonts.googleapis.com/ 'unsafe-inline';
  connect-src *;
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  img-src * data: blob:;
  font-src https://fonts.gstatic.com/ 'self';  
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*?)",
        headers: securityHeaders,
      },
    ];
  },
};
