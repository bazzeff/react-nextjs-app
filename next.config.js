//module.exports = {
//  assetPrefix: !debug ? '/my-nextjs-app/' : '',
//  reactStrictMode: true,
//} 
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/my-nextjs-app/_next/static/images/',
  }],
  {
    basePath: '/my-nextjs-app',
    assetPrefix: '/my-nextjs-app/',
    env,
  },
]);
