

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
  const response = await fetch("/api/incidents", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: idOng,
    },
  });
  return response.json();;
}