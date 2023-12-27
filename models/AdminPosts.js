const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    authorName:{
        type: String,
        required: true
    },
    date:{
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    body:{
        type: Object,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    authorProfile: {
        type: String,
        required: true
    },
    coverPic: {
        type: String,
        required: true
    },
})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post