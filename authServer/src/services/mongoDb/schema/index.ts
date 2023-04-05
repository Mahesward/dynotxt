import { Schema } from "mongoose";

export const adminUserSchema = new Schema({
  name: "String",
  email: String,
  uid: String,
  password: String,
  img: String,
  photoURL: String,
  phone: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  admin: { type: Boolean, default: true },
  createdAt: { type: Date, default: new Date() },
  lastLogin: { type: Date, default: new Date() },
  lastRefresh: { type: Date, default: new Date() },
  phoneVerified: { type: Boolean, default: false },
  emailVerified: { type: Boolean, default: false },
});

export const adminRefreshTokenSchema = new Schema({
  value: String,
  uid: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const userSchema = new Schema({
  name: String,
  email: String,
  uid: String,
  provider: String,
  img: String,
  photoURL: String,
  referal: String,
  referedBy: String,
  phone: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
  lastLogin: { type: Date, default: new Date() },
  lastRefresh: { type: Date, default: new Date() },
  phoneVerified: { type: Boolean, default: false },
  emailVerified: { type: Boolean, default: false },
});



export const refreshTokenSchema = new Schema({
  value: String,
  uid: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
