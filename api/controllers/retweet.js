// const model = require('../models');

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const tweetModel = require('../schemas/tweet');

 const Schema = mongoose.Schema({
     tweetId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Tweet"
     },
     userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
     }
 });

const lretweetModel = mongoose.model('retweet', Schema);
router.post('/',async(req, res) => {
    console.log('Deepak');
    const { tweetId, userId } = req.body;
    const tweetObj = await tweetModel.findOne({ _id: tweetId });
    console.log(tweetObj);
    console.log("retweeted");
    res.send("retweeted");
    console.log(tweetObj.content);
   // await tweetModel.create( { content: tweetObj.content});
   await tweetModel.insertMany({content:tweetObj.content});
})

// router.post('/', async (req, res) => {
//     console.log('Deepak');
//     const { tweetId, likedBy } = req.body;
//     const tweetObj = await tweetModel.findOne({ _id: tweetId });
//     const likedByUserObj = await tweetModel.findOne({ _id: likedBy });
//     console.log(tweetObj, likedByUserObj);
//     await likeModel.create({ tweetObj, likedByUserObj });   
//     const likes = tweetObj.likeCount+1;
//     console.log(likes, 'likes');

//     await tweetModel.updateOne({'_id': tweetId}, { 'likeCount': likes });

//     console.log(likes);
//     // console.log(likeCount)
//     res.send('Tweet Liked');
// });
// class likeTweet {
//     constructor(){
//     console.log('agya');
//     }

//     async likeUpdate(req,res){
       
//         var like={
//             $inc: {'likeCount': 1}   
//         }

//         const like = await model.tweetModel.like({"likeCount": req.body.likeCount},  like)


//         var like= {
//             "likeCount": req.body.likeCount
//         }

//         res.send("like")

//     }


// }
module.exports = router;