import { pool } from "@/lib/connectionDB";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM produk");
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { nama_produk, produk_khas, harga, image } = req.body;
      const result = await pool.query(
        "INSERT INTO produk (nama_produk, produk_khas, harga, image) VALUES ($1,$2,$3,$4) RETURNING *",
        [nama_produk, produk_khas, harga, image]
      );
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }   else {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
