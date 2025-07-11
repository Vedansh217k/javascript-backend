import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try{
        const connectionstring = `${
            process.env.MONGODB_URI}/${DB_NAME}
            `;
        console.log('connectionstring',connectionstring)
        const connectionInstance = await mongoose.connect(connectionstring)
            console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
            //console.log(connectionInstance);

    } catch(error){
        console.log("MONGODB CONNECTION ERROR", error);
        process.exit(1)


    }
}

export default connectDB