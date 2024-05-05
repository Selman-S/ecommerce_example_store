import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  clerkId: String,
  wishlist: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;