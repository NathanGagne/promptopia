import mongoose from 'mongoose';

let isConected = false; // track the connect

export const connectToDB = async () => { //lambda function, dies after completion
    mongoose.set("strictQuery", true)

    if(isConected) {
        console.log("MongoDB is already connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONOGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected to database")
        isConected = true
    } catch (err) {
        console.log(err)
    }
}