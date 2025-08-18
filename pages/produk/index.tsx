import AddProduk from '@/components/addProduk';
import FoodCard from '@/components/menuRegular';
import { SuccessAlert } from '@/lib/successAlert';
import { Button } from '@heroui/button';
import axios from 'axios';

import Image from 'next/image'
import React, { useState } from 'react'

const StarIcon = () => (
    <svg
        className="w-4 h-4 fill-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.122 3.45a1 1 0 00.95.69h3.631c.969 0 1.371 1.24.588 1.81l-2.938 2.135a1 1 0 00-.364 1.118l1.123 3.451c.3.922-.755 1.688-1.54 1.118l-2.938-2.135a1 1 0 00-1.176 0l-2.938 2.135c-.784.57-1.838-.196-1.539-1.118l1.122-3.451a1 1 0 00-.364-1.118L2.76 8.877c-.783-.57-.38-1.81.588-1.81h3.631a1 1 0 00.951-.69l1.12-3.45z" />
    </svg>
);
interface produk {
    nama_produk: string,
    produk_khas: string,
    harga: number,
    image: string
}
const Index = () => {
    const [produk, setProduk] = useState<produk>({
        nama_produk: '',
        produk_khas: '',
        harga: 0,
        image: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/produk', {
                ...produk
            })

            SuccessAlert({
                title: "Success",
                message: "Berhasil Tambah Data",
            })
            axios.get('/api/produk')
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