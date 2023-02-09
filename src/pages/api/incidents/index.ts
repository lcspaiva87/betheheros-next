import { getOngs } from "@/connection/ongs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function incidentsController(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { method } = req;
    if (method === "POST") {
      const ongs = await getOngs();
      const {email} = req.body;
      if(ongs.some((item: any) => item.email === email)){
        return res.status(200).json({
          message: "Usuario existe"
        });
      }
      else{
        return res.status(404).json({
          message: "Usuário não existe."
        });
      }
    }
  }
  