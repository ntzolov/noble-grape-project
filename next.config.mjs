/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: 'mongodb+srv://ntzolov:zZYLb8iwd7rDyaac@movie-characters.vtrawke.mongodb.net/nobleGrape?retryWrites=true&w=majority',
    API: process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000', // have to change production link when deployed
    NEXTAUTH_SECRET: 'fsaG!#g3egAgde!gDAGdagE!gE!GDGA',
  },
};

export default nextConfig;
