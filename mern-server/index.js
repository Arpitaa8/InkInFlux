import express from 'express';
import cors from 'cors';
import Connectdb from './db.js';
import { ObjectId } from 'mongodb';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
Connectdb()
  .then((client) => {
    console.log("Connected to MongoDB!");
    
    // Define the bookCollections inside the promise chain
    const bookCollections = client.db("BookInventory").collection("books");

    // Define the route for uploading a book
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.send(result);
      } catch (error) {
        console.error("Error uploading book:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    // Define the route for fetching all books
    // app.get("/all-books", async (req, res) => {
    // //   try {
    //     const books = await bookCollections.find().toArray();
    //     res.send(books);
    //   });
    //   } catch (error) {
    //     console.error("Error fetching books:", error);
    //     res.status(500).send("Internal Server Error");
    //   }
    // });

    //update a book data: patch or update
    app.patch("/book/:id", async(req, res) => {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = {upsert: true};

        const updateDoc = {
            $set: {
                ...updateBookData
            }
        }

        const result = await bookCollections.updateOne(filter, updateDoc, options);
        res.send(result);
    });

    //delete a book data
    app.delete("/book/:id", async(req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await bookCollections.deleteOne(filter);
        res.send(result);
    });

    //Find by Category
    app.get("/all-books", async (req, res) => {
        let query = {};
        if(req.query?.category){
            query = {category: req.query.category}
        }
        const result = await bookCollections.find(query).toArray();
        res.send(result);
    })

     //to get single book data
     app.get("/book/:id", async(req, res) =>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
     })

    // Define other routes and logic as needed
    app.get('/', (req, res) => {
      res.send('Hello World!')
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
