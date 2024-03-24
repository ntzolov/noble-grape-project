const DB_URI =
  'mongodb+srv://ntzolov:zZYLb8iwd7rDyaac@movie-characters.vtrawke.mongodb.net/nobleGrape?retryWrites=true&w=majority';
const API = process.env.NODE_ENV === 'production' ? 'https://noble-grape-project.vercel.app/api' : 'http://localhost:3000/api';
const NEXTAUTH_SECRET = 'fsaG!#g3egAgde!gDAGdagE!gE!GDGA';
const NEXTAUTH_URL = 'http://localhost:3000';
const GOOGLE_CLIENT_ID = '492827785480-pikr0ocv7j0aetu7ed0vfm65j60m3nnc.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

module.exports = {
  API,
  DB_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET,
  NEXTAUTH_URL,
};
