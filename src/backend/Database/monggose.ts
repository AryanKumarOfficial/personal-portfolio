import mongoose from "mongoose";

const connect = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Already connected.");
            return;
        } else {
            await mongoose.connect(process.env.MONGODB_URI as string,);
            console.log("Connected to MongoDB.");
        }
    } catch (error: any) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
};

const disconnect = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            await mongoose.disconnect();
            console.log("Disconnected from MongoDB.");
        } else {
            console.log("Already disconnected.");
        }
    } catch (error: any) {
        console.log("Error disconnecting from MongoDB: ", error.message);
    }
};

export {connect, disconnect};