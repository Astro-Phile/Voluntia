const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    skills: {
      type: [String],
      required: [true, "Please add a skill"],
    },
    availability: {
      days: {
        type: [String],
      },
      times: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Volunteer", volunteerSchema);
