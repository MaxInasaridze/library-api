const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "წიგნის სათაური აუცილებელია"],
    },
    author: {
        type: String,
        required: [true, "წიგნის ავტორი აუცილებელია"],
    },
    genre: {
        type: String,
        required: [true, "წიგნის ჟანრი აუცილებელია"],
    },
    publicationYear: {
        type: Number,
        required: [true, "გამოცემის წელი აუცილებელია"],
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
},{
    timestamps: true,}
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;