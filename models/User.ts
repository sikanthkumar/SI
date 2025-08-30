import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    passwordHash: string;
    isVerified: boolean;
    verificationToken?: string | null;
    verificationTokenExpires?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, index: true },
        passwordHash: { type: String, required: true },
        isVerified: { type: Boolean, default: false },
        verificationToken: { type: String, default: null },
        verificationTokenExpires: { type: Date, default: null },
    },
    { timestamps: true }
);

export const User: Model<IUser> =
    (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema);
