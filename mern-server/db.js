import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const uri = "mongodb+srv://book-store:arpita08@cluster0.yf65khh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function Connectdb() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default Connectdb;