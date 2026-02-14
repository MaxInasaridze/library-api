const express = require("express");
const mongoose = require("mongoose");
const Book = require("../models/Book.js");


const bookRouter = express.Router();

bookRouter.post("/create", async (req, res) => {
    try {
        const { title, author, isAvailable, genre, publicationYear } = req.body;

        // Check if dublicate
        const existingBook = await Book.findOne({ title, author });
    
        if (existingBook) {
          return res.status(409).json({ error: "Book already exist" });
        }
    
        const book = await Book.create({
          title,
          author,
          isAvailable,
          genre,
          publicationYear,
        });
    
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

bookRouter.get("/all", async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = bookRouter;    