import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getOngs, postOngs } from "../../../lib";
import { ongsProps } from "@/@types/ongs";

export default async function ongs(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const prisma = new PrismaClient();
  if (method === "GET") {
    const ongs = getOngs();
    return res.status(200).json({
      data: ongs,
    });
  } else if (method === "POST") {
    const { name, uf, city, whatsapp, email }: ongsProps = req.body;
    const ongs = postOngs({name, uf, city, whatsapp, email});
    return res.status(200).json({
      data: ongs,
    });
  }

  return res.status(404).json({ message: "Router not found" });
}
