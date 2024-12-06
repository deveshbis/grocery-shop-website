import { MongoClient, ServerApiVersion } from "mongodb";


const mongoDbUri = process.env.NEXT_PUBLIC_MONGODB_URI;
let db;
export const connectDB = async()=>{
    if(db) return db;
    try{
        const uri = mongoDbUri
        const client = new MongoClient(uri,{
            serverApi:{
                version:ServerApiVersion.v1,
                strict:true,
                deprecationErrors:true,
            }
        })
        db=client.db('grocery-shop')
        return db;
    } catch(error){
        // console.log(error);
    }

}