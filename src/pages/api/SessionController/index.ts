import { prisma } from "@/connection/db";
import { getOngs } from "@/connection/ongs";
import { session } from "@/connection/session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function SessionController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "POST") {
    const response = session(req, res);
    return response;
  }
}
