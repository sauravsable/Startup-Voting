const mongoose = require("mongoose");

const StartupIdeaSchema = new mongoose.Schema({
    ideaName: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    problemSolved: {
        type: String,
        required: true,
    },
    uniqueness: {
        type: String,
        required: true,
    },
    expectedImpact: {
        type: String,
        required: true,
    },
    futurePlan: {
        type: String,
        required: true,
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const StartupIdea = mongoose.model("ideas", StartupIdeaSchema);
module.exports = StartupIdea;
