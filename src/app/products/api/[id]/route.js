import { connectDB } from '@/lib/connectDB';
import { ObjectId } from 'mongodb';

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const productsCollection = db.collection('products');
    try {
        // Convert the string ID to ObjectId
        const product = await productsCollection.findOne({ _id: new ObjectId(params.id) });
        return Response.json({ products: product });
    } catch (error) {
        console.log(error);
        return new Response('Error fetching product', { status: 500 });
    }
};
