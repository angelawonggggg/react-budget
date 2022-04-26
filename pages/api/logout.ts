import type { User } from "models/auth";

import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = {
    isLoggedIn: false,
    username: "",
  } as User;
  req.session.user = user;
  await req.session.save();
  res.json(user);
}
