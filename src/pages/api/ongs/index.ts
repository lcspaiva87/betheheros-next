import { NextApiRequest, NextApiResponse } from "next";
import { ongs } from "@prisma/client";
import { createOngs, getOngs } from "@/connection/ongs";

export default async function OngController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    const ongs = await getOngs();
    return res.status(200).json({
      data: ongs,
    });
  } else if (method === "POST") {
    try {
      const ongs = await createOngs(req.body);
      return res.status(200).json({
        ongs,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao salvar ONG" });
    }
  }
}
