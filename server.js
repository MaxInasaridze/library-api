const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Book = require("./models/Book.js");
const booksRouter = require("./routes/booksRouter.js");
const userRouter = require("./routes/usersRouter.js");

// Load .env varriables
dotenv.config();

// Initial Express
const app = express();

// JSON-ის დამუშავება და გადაქცევა ობიექტებად
app.use(express.json());

// MongoDB-სთან დაკავშირება
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB-თან დაკავშირება წარმატებულია");
  })
  .catch((error) => {
    console.error("❌ MongoDB-სთან დაკავშირება ვერ მოხერხდა:", error.message);
    process.exit(1);
  });

// რაუტების დამატება
app.use("/api/books", booksRouter);

app.use("/api/users", userRouter);


const PORT = 3030;
app.listen(PORT, () => {
  console.log("http://localhost:3030");
});