import { getIncidents } from "@/lib";
import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function incidentsController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    const page = req.query.page || 1;

    const count = await prisma.incidents.count();
  
    const incidents = await prisma.incidents
      .join({ ong: true })
      .skip((page - 1) * 5)
      .take(5)
      .select({
        incidents: true,
        ong: {
          nome: true,
          email: true,
          whatsapp: true,
          city: true,
          uf: true,
        },
      });
  
   res.header('X-Total-Count', count);
  
    return res.json(incidents);
  }
}
