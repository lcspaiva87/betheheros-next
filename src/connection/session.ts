import { prisma } from "@/connection/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getOngs } from "./ongs";
export async function session(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  const ongs = await getOngs();
  if (ongs.some((item: any) => item.email === email)) {
    const result: any = ongs.find((item: any) => item.email === email);
    const ong = await prisma.ongs.findUnique({
      where: { id: String(result.id) },
    });

    return res.status(200).json({
      ong,
    });
  } else {
    return res.status(404).json({
      message: "Usuário não existe.",
    });
  }
}
