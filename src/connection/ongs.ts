import { ongsProps } from "@/@types/ongs";
import { prisma } from "./db";
export async function getOngs() {
  const ongs = await prisma.ongs.findMany();
  return ongs;
}

export async function createOngs(data: any) {
  const { name, uf, city, whatsapp, email } = data;
  const ongs = await prisma.ongs.create({
    data: {
      name,
      uf,
      city,
      whatsapp,
      email,
    },
  })

  ;
  return ongs;
}