import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.send({
    name: "Rose Kamal Love",
    email: "rosekamallove@gmail.com",
    github: "https://github.com/rosekamallove",
  });
}
