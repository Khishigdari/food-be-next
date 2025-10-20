import { model, models, Schema } from "mongoose";

type UserSchemaType = {
  email: string;
  password: string;
};

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    phoneNumber: { type: String },
    role: { type: String, required: true, enum: ["USER", "ADMIN"] },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model<UserSchemaType>("User", UserSchema);
