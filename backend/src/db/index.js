import mongoose from 'mongoose';

const connectDB = async () => {
    
    try {
        const {MONGODB_URI} = process.env;
        if(!MONGODB_URI) throw new Error("MONGODB_URI is not set!")
        
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected!: ", conn.connection.host);
        
    }
    catch(error) {
        console.log("MongoDB Connection ERROR!: ", error);
        process.exit(1);
    }
}

export default connectDB;