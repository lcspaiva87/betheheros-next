import { NextApiRequest, NextApiResponse } from "next";
import { ongs } from "@prisma/client";
import { getOngs, postOngs } from "../../../lib";
import { ongsProps } from "@/@types/ongs";

export default async function ongs(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;

    if (method === "GET") {
      const ongs = getOngs();
      return res.status(200).json({
        data: ongs,
      });
    } else if (method === "POST") {
      const { name, uf, city, whatsapp, email }: ongsProps = req.body;
      if(!name){
        return res.status(404).json({ message: "Campo nome esta vazio" });
      }
      if(!uf){
        return res.status(404).json({ message: "Campo uf esta vazio" });
      }
      if(!city){
        return res.status(404).json({ message: "Campo cidade esta vazio" });
      }
      if(!whatsapp){
        return res.status(404).json({ message: "Campo whatsapp esta vazio" });
      }
      if(!email){
        return res.status(404).json({ message: "Campo email esta vazio" });
      }
      const ongs: Promise<ongs> = postOngs({ name, uf, city, whatsapp, email });
      return res.status(200).json({
        data: ongs,
      });
    }
  } catch (error) {
    return res.status(404).json({ message: error });
  }
}
