/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: false },

  // Optimize lucide-react imports to only bundle used icons
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },

  // Strip console.log in production (keep error/warn)
  compiler: {
    removeConsole: { exclude: ['error', 'warn'] },
  },
}

export default nextConfig
