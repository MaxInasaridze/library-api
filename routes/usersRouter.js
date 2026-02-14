const express = require("express");
const mongoose = require("mongoose");
const Book = require("../models/Book.js");
const User = require("../models/User.js");

const userRouter = express.Router();

//create user
userRouter.post("/new", async (req, res) => {});
//read all users
userRouter.get("/all", async (req, res) => {});
//read single users
userRouter.get("/:userId", async (req, res) => {});

//delete user
userRouter.delete("/:userId", async (req, res) => {});


module.exports = userRouter;