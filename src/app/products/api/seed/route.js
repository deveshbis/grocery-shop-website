import { connectDB } from "@/lib/connectDB";
import { products } from "@/lib/products";

export const GET =async () => {
    const db = await connectDB()
    const productsCollection = await db.collection('products')
    try {
        await productsCollection.deleteMany();
        const resp = await productsCollection.insertMany(products);
        return Response.json({message : "seeded successfully"})
    } catch (error) {
        console.log(error);
    }
}