import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI environment variable");
}

interface GlobalMongoose {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

let cached = (global as unknown as { mongoose?: GlobalMongoose }).mongoose;

if (!cached) {
    cached = (global as unknown as { mongoose: GlobalMongoose }).mongoose = {
        conn: null,
        promise: null,
    };
}

export async function connectToDatabase(): Promise<typeof mongoose> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                dbName: process.env.MONGODB_DB || undefined,
            })
            .then((m) => m);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
