/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  head: {
    // Add the link element for the favicon
    link: [
      {
        rel: 'icon',
        type: 'image/png', // Set the appropriate MIME type for your favicon
        href: '/offpro.png' // Update the path and filename if necessary
      }
    ]
  }
}

module.exports = nextConfig
