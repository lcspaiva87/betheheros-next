import {
  deleteIncident,
  getIncidents,
  incidentsCreate,
} from "@/connection/incidents";
import { getOngs } from "@/connection/ongs";
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
  } else if (method === "DELETE") {
    const incident = await deleteIncident(req, res);
    return incident;
  }
}
