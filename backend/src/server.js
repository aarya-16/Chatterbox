import express from 'express';
import dotenv from 'dotenv';
import path from "path";

import authRouter from './routes/auth.route.js';
import messageRouter from './routes/message.route.js';
import connectDB from './db/index.js';

dotenv.config()

const app = express();
const __dirname = path.resolve();

const port = process.env.PORT;

app.use(express.json());

app.get('/health', (req, res)=> {
    res.status(200).json({message: "App working!"})
})

app.use('/api/auth', authRouter)
app.use('/api/message', messageRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

app.listen(port || 3000, () => {
    console.log(`Server started on port ${port}`)
    connectDB();
});