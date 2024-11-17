import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    bio: { type: String },
    skills: { type: String },
    resume: { type: String }, // url resume file
    resumeOriginalName: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    profilePhoto: { type: String, default: "" },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    
    profile: profileSchema,
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
