import { IncidentsPros } from "@/@types/incidents";
import { ongsProps } from "@/@types/ongs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



  export async function postOngs( {name, uf, city, whatsapp, email} : ongsProps) {
  const ongs = await prisma.ongs.create({
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

export async function getIncidents() {
  const incidents_list = await prisma.incidents.findMany();
  return incidents_list;
}

export async function postIncidemts({
  title,
  description,
  value,
  ong_id,
}: IncidentsPros) {
  const incidents = await prisma.incidents.create({
    data: {
      title,
      description,
      value,
      ong_id,
    },
  });

  return incidents;
}
