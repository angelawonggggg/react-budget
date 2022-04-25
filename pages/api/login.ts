import type { User } from "./user";

import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(loginRoute, sessionOptions);
import { MongoClient } from "mongodb";
import crypto from "crypto";

// Connection URI
const dbUri = "mongodb://db:27017";

// Create a new MongoClient
const client = new MongoClient(dbUri);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
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
    const hash = crypto.pbkdf2Sync(password, login.salt, 100000, 64, "sha512").toString("hex");
    
    if (login?.hash !== hash) {
      res.status(401).json({ error: "Invalid credential" });
    }

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
