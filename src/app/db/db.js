import { MongoClient, ServerApiVersion, } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.udxqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
    console.log('connetin db')
    try {
        await client.connect();
        console.log('conneted')
        return client;
    } catch (error) {
        console.log(error)
    }
       
    
}

export {connectDB}