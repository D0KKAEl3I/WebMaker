const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    maker: "",
    file: "",
    title: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    likeCount: { type: Number, default: 0 },

})