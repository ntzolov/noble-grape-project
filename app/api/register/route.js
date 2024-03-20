import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcrypt';

export async function POST(req) {
  await dbConnect();

  const body = await req.json();
  const { name, email, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ success: 'Registration Successful!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
