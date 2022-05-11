import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

// Connection URI
const dbUri = "mongodb://db:27017";
async function connectionDB() {
  const client = await MongoClient.connect(dbUri);
  return client;
}

async function getDocument(client) {
  const db = client.db();
  const documents = await db.collection("transaction").find().toArray();
  return documents;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection("transaction").insertOne(document);
}

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
      client = await connectionDB();
    } catch (error) {
      res.status(500).json({ message: "Connection to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, newtransaction);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed" });
      return;
    }

    client.close();
    res.status(201).json({
      message: "adding new transaction!",
      transaction: newtransaction,
    });
  }

  if (req.method === "GET") {
    const client = await MongoClient.connect(dbUri);
    const db = client.db();
    const documents = await db
      .collection("transaction")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({
      transaction: documents,
    });
    client.close();
  }
}

export default transactionHandler;
