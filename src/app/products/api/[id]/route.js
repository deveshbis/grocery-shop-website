import { connectDB } from '@/lib/connectDB';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const productsCollection = db.collection('products');
    try {
        const product = await productsCollection.findOne({ _id: new ObjectId(params.id) });
        return NextResponse.json({ products: product });
    } catch (error) {
        console.log(error);
        return new Response('Error fetching product', { status: 500 });
    }
};
