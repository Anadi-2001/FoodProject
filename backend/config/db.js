import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://anadipatra18:mu6fHrqnHIb0UpBa@cluster0.1dtxk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.