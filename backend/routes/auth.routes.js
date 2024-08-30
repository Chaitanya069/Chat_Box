// const express = require("express");
import express from "express";
const router = express.Router();
// import { login, logout, signup } from "../controllers/auth.controller.js";

router.get("/login", (req,res) => {
    res.send("Login Route");
});

export default router;