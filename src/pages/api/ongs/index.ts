import { NextApiRequest, NextApiResponse } from "next";
import { ongs } from "@prisma/client";
import { createOngs, getOngs } from "@/connection/ongs";

export default async function OngController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET") {
    const ongs = await getOngs();
    return res.status(200).json({
      data: ongs,
    });
  } else if (method === "POST") {
    try {
      const handleMissingFields = (missingFields: string[]) => {
        if (missingFields.length) {
          return console.log(res.status(404).json({
            message: `Campo${
              missingFields.length > 1 ? "s" : ""
            } ${missingFields.join(", ")} está${
              missingFields.length > 1 ? "m" : ""
            } vazio${missingFields.length > 1 ? "s" : ""}`,
          }));
        }
      };
      const requiredFields = ["name", "uf", "city", "whatsapp", "email"];
      const missingFields: string[] = requiredFields.filter(
        (field) => !req.body[field]
      );
      handleMissingFields(missingFields);
      const { name, uf, city, whatsapp, email }: ongs = req.body;
 
      
      const ongs = await createOngs({ name, uf, city, whatsapp, email });
    
      return res.status(200).json({
        ongs,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao salvar ONG" });
    }
  }

 
}
