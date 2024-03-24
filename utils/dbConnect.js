import mongoose from 'mongoose';

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(process.env.NEXT_PUBLIC_DB_URI);
}
