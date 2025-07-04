import { asyncHandler } from "../utils/asyncHandler.js";
import{ApiError} from "../utils/ApiiError.js";
import {User} from "../models/user_model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
    //console.log(req.body);
    //res.status(200).json({
    //    message: "ok"
    //get user details from frontend
    //validation - not empty
    //check if user alreday exists: username, email
    //check for images ,check for avatar
    //upload them to cloudinary, avatar
    //create user object - create entry in db
    //remove password and refresh token field from response
    ///check for user creation

    
//});
    const {fullname, email, username, password} = req.body; 
    //console.log("email:", email);


    if([fullname, email, username, password].some((field) => 
    field?.trim() === "")
    ) {
        throw new ApiError(400, "fullname is required")
    }
    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })
    if(existedUser) {
        throw new ApiError(409,"Username or email already existed")
    }
    //console.log(req.files)
    const avatarLocalPath = req.files?.avatar[0]?.path;

    //const coverImageLocalPath = req.files?.coverImage[0]?.path;
    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0){
        coverImageLocalPath = req.files.coverImage[0].path
    }
    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }
      const avatar = await uploadOnCloudinary(avatarLocalPath)
      const coverImage = await uploadOnCloudinary(coverImageLocalPath)

      if(!avatar){
        throw new ApiError(400, "Avatar file is required")
      }
    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
        
    })
    const createdUser = await User.findById(user._id).select("-password -refreshTokens")
    if(!createdUser){
        throw new ApiError(500, "Something went wrong")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

});


export {registerUser};