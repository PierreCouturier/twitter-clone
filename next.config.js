/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cloudflare-ipfs.com', 'localhost', 'cdn.discordapp.com'],
	},
}

module.exports = nextConfig
