// import config from './config.mjs';

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   env: {
//     DB_URI: 'mongodb+srv://ntzolov:zZYLb8iwd7rDyaac@movie-characters.vtrawke.mongodb.net/nobleGrape?retryWrites=true&w=majority',
//     API: process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000', // have to change production link when deployed
//     NEXTAUTH_SECRET: 'fsaG!#g3egAgde!gDAGdagE!gE!GDGA',
//     NEXTAUTH_URL: 'http://localhost:3000',
//     GOOGLE_CLIENT_ID: '492827785480-pikr0ocv7j0aetu7ed0vfm65j60m3nnc.apps.googleusercontent.com',
//     GOOGLE_CLIENT_SECRET: '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',
//   },
// };

// export default nextConfig;

const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
