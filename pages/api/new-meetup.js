import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://joshSalas:Gm$cNZpg3-CT-G7@cluster0.voctrhx.mongodb.net/test?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
