import { pool } from "@/lib/connectionDB";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //conect db
  const client = await pool.connect();
  const hasil = await client.query("SELECT * FROM users");
  console.log(hasil.rows);

  if (req.method === "GET") {
    try {
      const result = await pool.query("select * from users");
      return res.status(200).json({
        status: "200",
        data: result.rows,
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { email, password_hash } = req.body;
      if (email === "badriana@gmail.com" && password_hash === "dede01") {
        res.status(200).json({
          status: "200",
          is_user: true,
        });
      } else if (email !== "badriana@gmail.com") {
        res.status(400).json({
          status: "401",
          is_user: false,
          message: "Email atau password salah",
        })
      } else if (password_hash === "dede01") {
        res.status(400).json({
          status: "401",
          is_user: false,
          message: "Email atau password salah",
        })
      } else {
        res.status(401).json({
          status: "401",
          is_user: false,
          message: "Email atau password salah",
        });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: "Method not allowed" });
  }
}
