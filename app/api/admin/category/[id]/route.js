import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Category from '@/models/Category';
import slugify from 'slugify';

export async function PUT(req, context) {
  try {
    await dbConnect();
    const body = req.json();
    const { name } = body;

    const updatedCategory = await Category.findByIdAndUpdate(context.params.id, { ...body, slug: slugify(name) }, { new: true });
    return NextResponse.json(updatedCategory, { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
}

export async function DELETE(req, context) {
  try {
    await dbConnect();

    const deletedCategory = await Category.findByIdAndDelete(context.params.id);
    return NextResponse.json(deletedCategory, { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
