import express from 'express';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js';
import messageRouter from './routes/message.route.js';

dotenv.config()

const app = express();
const port = process.env.PORT;

app.get('/health', (req, res)=> {
    res.send("App working!")
})

app.use('/api/auth', authRouter)
app.use('/api/message', messageRouter)

app.listen(port || 3000, () => 
    console.log(`Server started on port ${port}`)
);