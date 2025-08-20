import AddProduk from '@/components/addProduk';
import FoodCard from '@/components/menuRegular';
import { SuccessAlert } from '@/lib/successAlert';
import axios from 'axios';

import React, { useState } from 'react';


interface produk {
    nama_produk: string,
    produk_khas: string,
    harga: number,
    image: string
}
const Index = () => {
    const [produk, setProduk] = useState<produk>({ } as produk)

    const handleSubmit = async (e: React.FormEvent) => {
        if (!produk.nama_produk || !produk.produk_khas || !produk.harga || !produk.image) {
            SuccessAlert({
                title: "Error",
                message: "Data Tidak Boleh Kosong",
            })
            return
        }
        e.preventDefault();
        try {
            await axios.post('/api/produk', {
                ...produk
            })

            SuccessAlert({
                title: "Success",
                message: "Berhasil Tambah Data",
            })
            setProduk({} as produk)
        } catch (error) {
            SuccessAlert({
                title: "Error",
                message: "Gagal Tambah Data",
            })
        }
    }
    return (
        <div className='container    p-0'>

            <div className='mx-auto w-full flex justify-center items-center '>
                <div className='w-[40%] flex justify-center  bg-orange-400 '>
                
                    <div className='h-screen w-full flex justify-center items-center'>
                        <AddProduk produk={produk} setProduk={setProduk} handleSubmit={handleSubmit} />
                    </div>
                </div>
                <div className='w-[60%] flex flex-col gap-4  '>
                    <div className="flex justify-center items-center">
                        <FoodCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index