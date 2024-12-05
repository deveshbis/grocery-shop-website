import { connectDB } from "@/lib/connectDB";
import { products } from "@/lib/products";
import { NextResponse } from "next/server";



export const GET =async () => {
    const db = await connectDB()
    const productsCollection = await db.collection('products')
    try {
        const products = await productsCollection.find().toArray();
        return NextResponse.json({products})
    } catch (error) {
        console.log(error);
    }
}