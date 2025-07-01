const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
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
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    postedOpportunities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Opportunity",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organization", organizationSchema);
