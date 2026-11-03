import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 3, maxlength: 30 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 50,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'],
    },
    message: { type: String, required: true, trim: true, minlength: 5, maxlength: 2000 },
  },
  { timestamps: true }
);

export default mongoose.model('ContactMessage', contactMessageSchema);
