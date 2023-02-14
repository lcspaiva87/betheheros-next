
export async function createIncidents(data:any,idOng:any) {

  try {
    const response = await fetch("/api/incidents", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: idOng,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function listIncidents(idOng:any) {
  const response = await fetch(`/api/incidents/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: idOng,
    },
  });
  return response.json();;
}


export async function deleteIncidents(idOng:any,idIncident:string) {
  console.log("aqui",idOng)
  const response = await fetch(`/api/delete/${idIncident}`, {
    method: "DELETE",
    body: JSON.stringify(idIncident),
    headers: {
      "Content-Type": "application/json",
      Authorization: idOng,
    },
  });
  return response.json();
}