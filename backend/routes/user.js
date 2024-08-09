import express from "express";
import auth from "../middelware/user.js";
const router = express.Router();

import { signup,signin,verifyToken} from "../controllers/user.js";

router.post("/user/signup", signup);
router.post("/user/signin", signin)
router.post('/user/verify-jwt', auth, verifyToken);

export default router;
