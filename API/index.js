import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user-route.js';
import authRoutes from './routes/auth-route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config (); //Initialize dotenv for .end file to access it in index.js

// Connect to DB
mongoose
  .connect ("mongodb+srv://abhishekkj522001:Abhishekjha@mern-auth-project.o1ok13n.mongodb.net/?retryWrites=true&w=majority&appName=mern-auth-project")
  .then (() => {
    console.log ('Connected to MONGODB');
  })
  .catch (err => {
    console.log (err);
});

const __dirname = path.resolve();

const app = express (); 

app.use(express.static(path.join(__dirname, "/client/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
});

app.use (express.json ()); // to automatically parse JSON data from incoming requests
app.use (cookieParser ());

app.listen (3000, () => {
  console.log ('Server listening on port 3000');
});

app.use ('/api/user', userRoutes);
app.use ('/api/auth', authRoutes);

// Error handling
app.use ((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status (statusCode).json ({
    success: false,
    message,
    statusCode,
  });
});
