import React from 'react'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { useRouter } from 'next/router'
interface produks {
    nama_produk: string,
    produk_khas: string,
    harga: number,
    image: string
}
interface Produk {
    produk: produks
    setProduk: (produk: produks) => void
    handleSubmit: (e: React.FormEvent) => void
}
const AddProduk: React.FC<Produk> = ({ ...props }) => {
    const router = useRouter();
    return (
        <>
            <form onSubmit={props.handleSubmit} className=' w-[80%] mt-16 flex flex-col gap-4 '>
                <Input
                    isRequired
                    className=" w-full"
                    label="Nama Produk"
                    type="text"
                    value={props.produk.nama_produk}
                    onChange={(e) => props.setProduk({ ...props.produk, nama_produk: e.target.value })}
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Produk khas"
                    type="text"
                    value={props.produk.produk_khas}
                    onChange={(e) => props.setProduk({ ...props.produk, produk_khas: e.target.value })}
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Harga"
                    type="number"
                    value={`${props.produk.harga}`}
                    onChange={(e) => props.setProduk({ ...props.produk, harga: Number(e.target.value) })}
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Image"
                    type="text"
                    value={props.produk.image}
                    onChange={(e) => props.setProduk({ ...props.produk, image: e.target.value })}
                />
                <button type='submit' className='bg-[#111d0f] text-white py-2 rounded-md'>Submit</button>
                <button type='button' onClick={() => router.push('/')} className='bg-white text-orange-600 py-2 rounded-md'>Back To Home</button>
                
            </form>
        </>
    )
}

export default AddProduk