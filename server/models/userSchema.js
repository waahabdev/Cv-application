import mongoose from "mongoose";
//mongoose genererar ett _id automatiskt
const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isadmin: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
  cvname: { type: String },
  profilepicture: { type: String },
  introduction: { type: String },
  jobroles: { type: String },
  tools: [{
      tools:{type: String}
  }],
  projects:[  {
    projects:{type: String}
}],
employment: [{
    employment:{type: String}
}],
education: [{
    education:{type: String}    
}]
});
//kopplar schema till model
export const user = mongoose.model("user", userSchema);


  




