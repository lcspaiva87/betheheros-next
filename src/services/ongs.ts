export async function createOngs(data:any) {
  try {
    const response = await fetch("/api/ongs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
