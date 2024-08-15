import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fatherName: { type: String, required: true },
  country: { type: String, required: true },
  dob: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  id: { type: String, unique: true },
});

export default mongoose.model("User", userSchema);
