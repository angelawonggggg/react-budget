import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../utils/db-util";

async function transactionHandler(req: NextApiRequest, res: NextApiResponse) {
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
    let client: MongoClient;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection to the database failed!" });
      return;
    }
    try {
      const query: { accountType?: string } = {};
      if (req.query.accountType) {
        query.accountType = req.query.accountType as string;
      }
      const documents = await client
        .db()
        .collection("transaction")
        .find(query)
        .toArray();

      res.status(200).json({ transactions: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting transaction failed." });
    }
  }

  // client.close();
}

export default transactionHandler;
