
export default async function handler(request, response) {

  try {

    const result = await fetch(process.env.API_ENDPOINT);
    const data = await result.json();
    response.status(200).json(data);

  } catch (error) {

    console.error("Server error:", error);
    response.status(500).json({ error: "An error occured while fetching your data" });

  }

}
