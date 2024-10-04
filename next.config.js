// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    appEnv: process.env.APP_ENV ?? 'development',
    robotIndex: process.env.ROBOT_INDEX ?? 'false',
    gtmId: process.env.GTM_ID ?? '',

    apiUrl: process.env.API_URL ?? 'http://localhost:9001/api',
    apiToken: process.env.API_TOKEN ?? '',
  },

  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
};

module.exports = withBundleAnalyzer(nextConfig);
