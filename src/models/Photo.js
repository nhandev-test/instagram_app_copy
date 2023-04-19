const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  photo_path: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    require: true,
    default: "",
  },
  likes: {
    type: Number,
    require: true,
    default: 0,
  },
  isAvatar: {
    type: Boolean,
    require: true,
    default: false,
  },
  privacy: {
    type: String,
    enum: ["public", "friends", "private"],
  },
  uploadAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Model = mongoose.model("Photo", photoSchema);
Model.createCollection();
module.exports = Model;
