const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, "Email must be valid"],
    },
    status: {
      type: String,
      enum: {
        values: [
          "New",
          "Engaged",
          "Proposal Sent",
          "Closed-Won",
          "Closed-Lost",
        ],
        message: "Invalid status value",
      },
      default: "New",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

module.exports = mongoose.model("Lead", leadSchema);
