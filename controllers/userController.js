import User from "../models/user.schema.js";
import Post from '../models/post.schema.js';
import Comment from '../models/comment.schema.js';


const registerController=async(req,res)=>{
  try{
    const data = req.body;
        
    
    const { username, email, password, firstName,lastName } = data;
    if (!username|| !email || !password || !firstName || !lastName) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newUser = new User(data);
    await newUser.save();
    res.status(201).json(newUser);
  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
}

const postController=async (req,res)=>{
  try{
    const data = req.body;
        
    
    const newUser = new Post(data);
    await newUser.save();
    res.status(201).json(newUser);
  }
  catch(error){
    res.status(500).json({ error:error .message });
  }
}

const commentController=async(req,res)=>{
   try{
    const data = req.body;
    
    const newComment = new Comment(data);
    await newComment.save();
    res.status(201).json(newComment);
   }
   catch(error){
    res.status(500).json({ error:error .message });
   }
}

const feedController = async (req, res) => {
  try {
    const {userId} = req.body;

    // Fetch user's friends
    const user = await User.findById(userId).populate('friends', '_id');
    const friendIds = user.friends.map(friend => friend._id);

    
    const friendsPosts = await Post.find({ userId: { $in: friendIds } });

    // Fetch posts commented on by user's friends
    const commentedPosts = await Post.find({
      comments: { 
        $in: await Comment.find({ userId: { $in: friendIds } }).distinct('postId')
      }
    });

    // Combine and remove duplicate posts
    const allPosts = [...friendsPosts, ...commentedPosts];
    const uniquePosts = allPosts.filter((post, index, self) =>
      index === self.findIndex(p => p._id.toString() === post._id.toString())
    );

    res.status(200).json(uniquePosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export {registerController,postController,commentController,feedController};