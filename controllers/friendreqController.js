import Request from "../models/friendreq.schema.js";
import User from "../models/user.schema.js";

const friendRequestController = async (req, res) => {
  try {
    const { senderId, receiverId, status } = req.body; // action can be 'send', 'accept', 'reject'

    if (status === 'send') {
      
      const newRequest = new Request({ senderId, receiverId, status: 'pending' });
      await newRequest.save();
      return res.status(201).json(newRequest);
    }

    if (status === 'accepted') {
      
      const request = await Request.findOne({ senderId, receiverId, status: 'pending' });
      if (!request) {
        return res.status(404).json({ error: 'Friend request not found' });
      }
      request.status = 'accepted';
      await request.save();

      
      await User.findByIdAndUpdate(senderId, { $addToSet: { friends: receiverId } });
      await User.findByIdAndUpdate(receiverId, { $addToSet: { friends: senderId } });

      return res.status(200).json({ message: 'Friend request accepted' });
    }

    if (status === 'rejected') {
      
      const request = await Request.findOne({ senderId, receiverId, status: 'pending' });
      if (!request) {
        return res.status(404).json({ error: 'Friend request not found' });
      }
      request.status = 'rejected';
      await request.save();

      return res.status(200).json({ message: 'Friend request rejected' });
    }

    res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { friendRequestController };
