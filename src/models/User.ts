import { Schema, model, Document } from "mongoose";

// Интерфейс для TypeScript
export interface IUser extends Document {
  name: string;
  email: string;
  createdAt: Date;
}

// Схема Mongoose
const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// Экспорт модели
const User = model<IUser>("User", UserSchema);
export default User;
