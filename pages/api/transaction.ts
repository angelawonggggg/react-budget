import { NextApiRequest, NextApiResponse } from "next";

import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../utils/db-util";

async function transactionHandler(req: NextApiRequest, res: NextApiResponse) {
  let client;
  if (req.method === "POST") {
    const { accountType, amount, category, categoryDetail, date, textDetails } =
      req.body;

    const newtransaction = {
      accountType,
      amount,
      category,
      categoryDetail,
      date,
      textDetails,
    };

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, "transaction", newtransaction);
      res.status(201).json({
        message: "adding new transaction!",
        transaction: newtransaction,
      });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed" });
      return;
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "transaction", {
        _id: -1,
      });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }

  client.close();
}

export default transactionHandler;
