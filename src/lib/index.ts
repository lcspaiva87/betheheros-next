import { ongsProps } from "@/@types/ongs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getOngs() {
  const ongs = await prisma.ongs.findMany();
  return ongs;
}

export async function postOngs({ name, uf, city, whatsapp, email }:ongsProps) {
  const ongs= await prisma.ongs.create({
    data: {
      name,
      uf,
      city,
      whatsapp,
      email,
    },
  });
  return ongs;
}
