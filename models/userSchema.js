import mongoose from "mongoose";
//mongoose genererar ett _id automatiskt
const userSchema = mongoose.Schema({
    // isActive: { type: Boolean }  //I think we should also have isActive bit so in future we have a feature to soft delete a user we can simply use that!
  firstname: { type: String },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // We can also set default value here in isadmin, 
  // so If the user checks the isAdmin 
  // we'll add the true value else it'll fall to the default one.
  isadmin: { type: Boolean, required: true }, 
  date: { type: Date, default: Date.now },
  cvname: { type: String },
  profilepicture: { type: String },
  introduction: { type: String },
  jobroles: { type: String },

    // For tools/projects/employment/education
    // We should define the objects these arrays will contain in it so it will be more accurate 
    // For example 
    // employment: [
    // {
    //     // TODO: Add more properties here if required
    //     companyName: { type: String },
    //     startDate: { type: Date },
    //     endDate: { type: Date },
    //   }
    // ],

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


  




