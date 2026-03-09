import createMDX from '@next/mdx'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const normalizedBasePath =
  basePath && basePath !== '/' ? basePath.replace(/\/$/, '') : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: normalizedBasePath,
  assetPrefix: normalizedBasePath || undefined,
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
