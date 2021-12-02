//importerar alla packages
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoute.js";
//app skapar en kopia av express som kan hämta allt som finns i express.
const app = express();

app.use(cors());
//connectar till routes
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", userRoutes);

//bodyparser.json kommer att begränsa varje json-object, extended true gör att inte bara strings går igenom.

//möjliggör cors

//om den inte hittar första porten väljer den 9999 istället
const PORT = process.env.PORT || 9999;
//

//connection till databasen
mongoose
  .connect(process.env.ATLAS_URI, {
    //för att undvika varningar och errors i konsolen
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`connected to server on port ${PORT}`))
  )
  .catch((err) => console.log(err));
