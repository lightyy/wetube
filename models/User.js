import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchenma = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

UserSchenma.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.Model("User", UserSchenma);

export default model;
