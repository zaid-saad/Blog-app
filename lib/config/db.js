import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://zaidsaad327327327:v8sTMl5t8cScTrKe@cluster0.ucjqywz.mongodb.net/Blog-app');
    console.log("MongoDB Connected");
}