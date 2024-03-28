import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Category from '@/models/Category';
import slugify from 'slugify';

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name } = body;
    const isExist = await Category.findOne({ name });

    if (isExist) {
      throw new Error('This category already exist!');
    }

    const category = await Category.create({ name, slug: slugify(name) });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();

    const categories = Category.find({}).sort({ name: 1 });
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
