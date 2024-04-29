import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  googleId: string;
  email: string;
  name: string;
}

const userSchema = new Schema<IUser>({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
