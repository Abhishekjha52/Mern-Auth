import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user-route.js';
import authRoutes from './routes/auth-route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config(); //Initialize dotenv for .env file to access it in index.js

// Connect to DB
mongoose
  .connect (process.env.MONGO)
  .then (() => {
    console.log ('Connected to MONGODB');
  })
  .catch (err => {
    console.log (err);
});

const __dirname = path.resolve();

const app = express ();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get ('*', (req, res) => {
  res.sendFile (path.join (__dirname, 'client', 'dist', 'index.html'));
});

app.use (express.json ()); // to automatically parse JSON data from incoming requests
app.use (cookieParser ()); // The cookie-parser middleware in Node.js parses the Cookie header from HTTP requests and makes the cookies accessible in the req.cookies object, allowing you to easily access and manipulate cookie data within your application. 

app.listen (3000, () => {
  console.log ('Server listening on port 3000');
});

// app.get('/', (req, res)=>{
//   res.json({
//     message: "Api is working",
//   });
// });

app.use ('/api/user', userRoutes);
app.use ('/api/auth', authRoutes);

// Middle ware for Error handling
app.use ((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status (statusCode).json ({
    success: false,
    message,
    statusCode,
  });
});
