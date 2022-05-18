import type { User } from "models/auth";

import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(registerRoute, sessionOptions);
import { MongoClient } from "mongodb";
import crypto from "crypto";
import { DATABASE_URL } from "middleware/mongodb";

// Create a new MongoClient
const client = new MongoClient(DATABASE_URL);

async function registerRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;
  if (!username || !password) {
    res.status(400).json({ error: "username and password required" });
    return;
  }

  try {
    await client.connect();
    const login = await client.db().collection("users").findOne({ username });
    if (login) {
      res.status(409).json({ error: "username already taken" });
      await client.close();
      return;
    }
    const salt = crypto.randomUUID();
    const hash = crypto
      .pbkdf2Sync(password, salt, 100000, 64, "sha512")
      .toString("hex");
    await client.db().collection("users").insertOne({
      username,
      salt,
      hash,
    });

    const user = {
      isLoggedIn: true,
      login: username,
      avatarUrl: "avatar_url:",
    } as User;
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    await client.close();
    res.status(500).json({ message: (error as Error).message });
  }
}
