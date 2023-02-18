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
    return ongs
  } else if (method === "POST") {
    const ongs = await createOngs(req, res);
    return ongs
  }
}
