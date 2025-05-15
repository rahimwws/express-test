import { Schema, model, Document } from "mongoose";
import { IUser } from "../types";

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});
const User = model<IUser>("User", UserSchema);
export default User;
