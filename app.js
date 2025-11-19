const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/LodgeQuest";

main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req,res) => {
    res.send("Hii i am root..");
});

app.get("/testListing",async (req,res) => {
   let sampleListing = new Listing({
    title:"My new Villa",
    description : "By the Beach",
    price : 1500,
    location : "Calangute, Goa",
    country : "India",
   });
   await sampleListing.save();
   console.log("sample was saved");
   res.send("Successful testing");
})

app.listen(8080,() => {
    console.log("Server Listening to port 8080");
});