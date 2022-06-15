import type { User } from "models/auth";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      //   const user = {
      //     isLoggedIn: false,
      //     username: "",
      //   } as User;
      //   req.session.user = user;
      await req.session.destroy();
      // await req.session.save();

      // res.json(user);
      res.status(200).json({ message: "logout success" });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
