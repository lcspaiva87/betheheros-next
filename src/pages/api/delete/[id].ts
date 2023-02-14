import { prisma } from "@/connection/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function deleteIncident(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id;
  if (req.method === "DELETE") {
    const incident = await prisma.incidents.delete({
      where: { id: String(id) },
    });
   return res.status(200).json({ message: "O incidente foi deletado com sucesso! " });
  } else {
    return res.status(500).json({ error: "Ocorreu um erro ao tentar deletar o incidente" });
  }
}
