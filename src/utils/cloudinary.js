import { v2 as cloudinary } from 'cloudinary'
import { response } from 'express';
import fs from "fs"
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const uploadOnCloudinary = async (localFilePath) => {

    try{
        console.log(localFilePath)
        if(!localFilePath) return null
        //upload the file on cloudinary
       const response =  await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto' 
        })
        // file has been uploaaded successfull
        //console.log(response)
        //console.log("file is uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        return response;

    }
    catch(error){
        console.log(error)
        fs.unlinkSync(localFilePath) // remove the locally saved tempory file as the upload operation not done
        return null;
    }
}
export {uploadOnCloudinary}