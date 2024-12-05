import { connectDB } from "@/lib/connectDB";

export const GET =async () => {
    const db = await connectDB()
    const productsCollection = await db.collection('products')
    try {
        const products = await productsCollection.find().toArray();
        return Response.json({products})
    } catch (error) {
        console.log(error);
    }
}