import { connectionStr } from "@/lib/db"
import { restaurantSchema } from "@/lib/restaurantModel";
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET() {
    // await mongoose.connect(connectionStr, { useNewUrlParser: true });
    // const data = await restaurantSchema.find()
    // console.log("data", data);
    try {
        const PORT = 5000;

        await mongoose.connect(connectionStr, { useNewUrlParser: true })
        // .then(()=>app.listen(5000,()=> console.log(`Server running on port: ${5000}`)))
        // .catch((error)=> console.log(error.message));
        

// mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=>app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
//     .catch((error)=> console.log(error.message));
        return NextResponse.json({ result: true })
    } catch (error) {
        console.log("Error in route.ts page --||-- ", error);
    }
}