import { pool } from "@/lib/connectionDB";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const {id_penjualan} = req.body;
 
  if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM produk WHERE id=$1", [id]);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      const datas = req.body;
      console.log("ini datas", datas);
      const result = await pool.query(
        "UPDATE produk SET nama_produk = $1, produk_khas = $2, harga = $3, image = $4 WHERE id = $5 RETURNING *",
        [datas.nama_produk, datas.produk_khas, datas.harga, datas.image, id]
      );

      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
            await pool.query("DELETE FROM penjualan WHERE id_penjualan=$1", [id_penjualan]);
      const result = await pool.query("DELETE FROM produk WHERE id=$1", [id]);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
