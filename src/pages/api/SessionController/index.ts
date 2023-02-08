import { prisma } from "@/connection/db";
import { getOngs } from "@/connection/ongs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function SessionController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "POST") {
    const ongs = await getOngs();
    const {email}:any = req.body;
    if(ongs.some((item: any) => item.email === email)){
      const result:any = ongs.filter((item)=>item.email === email)
      const data:any = result.map((item:any) =>item.id);
      const ong = await prisma.ongs.findUnique(
        {
          where: { id:String(data) },
        })


      return res.status(200).json({
       ong
      });
    }
    else{
      return res.status(404).json({
        message: "Usuário não existe."
      });
    }
  }
}
