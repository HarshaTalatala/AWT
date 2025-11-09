const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const uri = "mongodb+srv://suresh:10pa1a1218@cluster0.kmhoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let db;

async function connectDB() {
 try {
   const client = new MongoClient(uri);
   await client.connect();
   db = client.db('mydb');
   console.log("Connected to MongoDB");
 } catch (error) {
   console.error("MongoDB connection error:", error);
 }
}
connectDB()

app.get("/", (req, res) => {
 res.render("form");
});

app.post("/submit", async (req, res) => {
 try {
   await db.collection('complaints').insertOne(req.body);
   res.send("Complaint submitted successfully!");
 } catch (err) {
   console.error("Error:", err);
   res.status(500).send("Failed to submit complaint");
 }
});

app.get('/data', async (req, res) => {
 try {
   const alldata = await db.collection('complaints').find().toArray();
   res.json(alldata);
 } catch (err) {
   console.error("Error:", err);
   res.status(500).send("Failed to fetch complaints");
 }
});

app.listen(3900, () => {
 console.log(`Server running at http://localhost:3900`);
});