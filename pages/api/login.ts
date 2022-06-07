import type { User } from "models/auth";

import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(loginRoute, sessionOptions);
import { MongoClient } from "mongodb";
import crypto from "crypto";
import { DATABASE_URL } from "middleware/mongodb";

// Create a new MongoClient
const client = new MongoClient(DATABASE_URL);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }

  const { username, password } = await req.body;
  if (!username || !password) {
    res.status(400).json({ error: "username and password required" });
    return;
  }

  try {
    await client.connect();
    const login = await client.db().collection("users").findOne({ username });
    if (!login) {
      res.status(401).json({ error: "Invalid credential" });
      await client.close();
      return;
    }
    const hash = crypto
      .pbkdf2Sync(password, login.salt, 100000, 64, "sha512")
      .toString("hex");

    if (login?.hash !== hash) {
      res.status(401).json({ error: "Invalid credential" });
    }

    const user = {
      isLoggedIn: true,
      username: username,
      avatarUrl: "avatar_url:",
      _id: login._id,
    } as User;
    req.session.user = user;
    await req.session.save();
    res.json(user);
    res.redirect("/home");
  } catch (error) {
    await client.close();
    res.status(500).json({ message: (error as Error).message });
  }
}
