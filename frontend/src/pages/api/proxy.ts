import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://n8n.americaintegracao.com.br/webhook/site_teste",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return res
          .status(response.status)
          .json({ error: "Erro ao enviar os dados", details: data });
      }

      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        return res
          .status(500)
          .json({ error: "Falha ao enviar os dados", details: error.message });
      }
      return res
        .status(500)
        .json({
          error: "Falha ao enviar os dados",
          details: "Erro desconhecido",
        });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}