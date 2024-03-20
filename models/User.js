import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minLength: [1, 'Name length must be from 1 to 20 characters long!'],
      maxLength: [20, 'Name length must be from 1 to 20 characters long!'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      index: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: [6, 'Password must be at least 6 characters long!'],
    },
    role: {
      type: String,
      default: 'user',
    },
    image: {
      type: String,
    },
    resetCode: {
      data: String,
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000),
      },
    },
  },
  { timestamps: true }
);

userSchema.plugin(mongooseUniqueValidator);

export default mongoose.models.User || mongoose.model('User', userSchema);
