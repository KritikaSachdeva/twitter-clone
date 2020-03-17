const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./userDetails");
 
const tweetSchema = Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"

  },
  content: {
    text: String,
 
    imageURL: String,
    mentions: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  recentLikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  tags: [
    {
      type: String,
      required: true
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comments"
  },
  commentCount: {
    type: Number,
    default:0,
    required: true
  },
  likes: {
    type: Schema.Types.ObjectId,
    ref: "Likes"
  },
  likeCount: {
    type: Number,
    required: true,
    default: 0
  },
 
  retweet: {
    type: Schema.Types.ObjectId,
    ref: "Retweet"
  }
});
 
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
