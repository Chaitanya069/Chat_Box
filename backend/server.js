// const express = require("express");
import express from 'express';
// const dotenv = require("dotenv");
import dotenv from 'dotenv';
const app = express();

import authRoutes from './routes/auth.routes.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("Hello World!!");
})

app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 