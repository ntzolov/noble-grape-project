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

    console.log('User created!', newUser);
    return NextResponse.json({ success: 'Registration Successful!' }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
