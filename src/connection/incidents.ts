import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./db";
export async function incidentsCreate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { title, description, value } = req.body;
    if (!title || !description || !value) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const ongsId = req.headers.authorization!;
    const incident = await prisma.incidents.create({
      data: {
        title,
        description,
        value: Number(value),
        ongsId,
      },
    });
    
    return res.status(200).json({ id: incident.id });
  } catch (error: unknown) {
    return res.status(500).json({ error: "Failed to create incident" });
  }
}

export async function getIncidents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ongsId = req.headers.authorization;
    const data = await prisma.incidents.findMany({
      where: {
        ongsId: ongsId
      }
    });
    return res.status(200).json({
      data,
    })
  
  } catch (error: unknown) {
    return res.status(404).json({
      message:error,
    });

  }
}
