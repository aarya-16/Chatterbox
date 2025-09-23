import express from 'express';

const authRouter = express.Router();

authRouter.get('/signup', (req,res) => {
    res.send("Signup endpoint");
})

export default authRouter