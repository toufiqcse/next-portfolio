import { projectsData } from "../../../data";
import { services } from "../../../data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ projectsData });
}
