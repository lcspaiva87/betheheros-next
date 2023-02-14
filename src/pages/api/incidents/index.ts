import { prisma } from "@/connection/db";
import { getIncidents, incidentsCreate } from "@/connection/incidents";
import { getOngs } from "@/connection/ongs";
import { deleteIncidents } from "@/services/incidents";
import { NextApiRequest, NextApiResponse } from "next";

export default async function incidentsController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "POST") {
    try {
      const incidents = await incidentsCreate(req, res);
      return res.status(200).json({
        incidents,
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  } else if (method === "GET") {
    const incident = await getIncidents(req, res);
    return res.status(200).json({
      data: incident,
    });
  } else if (req.method === "DELETE") {
    try {
      const id = req.body;

      const incidents = await prisma.incidents.delete({
        where: { id: String(id) },
      });
      return res.status(200).json({
        message: "Incident deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
}
