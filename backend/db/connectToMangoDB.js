import mongoose from 'mongoose';

const connectToMangoDB = async () => {
    try {
        await mongoose.connect(process.env.MANGO_DB_URI);
        console.log("Connected to MangoDB");
    } catch (error) {
        console.log("Error connecting to MangoDB", error.message);
    }
};

export default connectToMangoDB;