
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./db";
export async function getOngs() {
  try {
    const ongs = await prisma.ongs.findMany();
    return ongs;
  } catch (error) {
    return console.error(error);

  }
}

export async function createOngs(req: NextApiRequest, res: NextApiResponse) {
  try {
    const handleMissingFields = (missingFields: String[]) => {
      if (missingFields.length) {
        return res.status(404).json({
          status:400,
          message: `Campo${
            missingFields.length > 1 ? "s" : ""
          } ${missingFields.join(", ")} está${
            missingFields.length > 1 ? "m" : ""
          } vazio${missingFields.length > 1 ? "s" : ""}`,
        });
      }
    };
    const ongs = await getOngs();
    const requiredFields = ["name", "uf", "city", "whatsapp", "email"];
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    handleMissingFields(missingFields);
    console.log(req.body)
    const { name, uf, city, whatsapp, email } = req.body;
    if (ongs?.some((item: any) => item.email === email)) {
      return res
        .status(400)
        .json({
          status:400,
          message:
            "Desculpe, mas o endereço de e-mail que você tentou usar para se cadastrar já está em nosso sistema.",
        });
    }

    const ong = await prisma.ongs.create({
      data: {
        name,
        uf,
        city,
        whatsapp:String(whatsapp),
        email,
      },
    });
    await prisma.$disconnect();
    return res
      .status(200)
      .json({
        message:
          "Parabéns! Sua organização não governamental (ONG) foi criada com sucesso. ",
        ong,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        status:500,
        message:
          " Erro ao criar Sua organização não governamental (ONG) ",
      
      });
  }
}
