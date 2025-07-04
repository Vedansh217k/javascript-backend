import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer_middleware.js";

const router = express.Router();
router.route("/register").
    post(upload.fields([
        {
            name: "avatar",
            maxcount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)



export default router