import { User } from "../models/User";
import connectDB from "../mongodb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const createUser = async (email: string, password: string) => {
  // request: Request
  await connectDB();
  // const newUser = new User({
  //   email,
  //   password,
  // });

  // await newUser.save();
  // const hashPassword = bcrypt.hashSync(password, 12);
  const user = await User.create({
    email: email,
    password,
    role: "USER",
  });
  return NextResponse.json({ message: "Successfully created user", user });
};

export const loginUser = async (email: string, password: string) => {
  await connectDB();
  const user = await User.findOne({ email, password });
  if (user) {
    const userPassword = user.password;
    const result = await bcrypt.compare(userPassword, password);
    console.log(result);
    return true;
  } else {
    return false;
  }
};
