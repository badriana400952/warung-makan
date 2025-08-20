import { Input } from '@heroui/input'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
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
    const [loading, setLoading] = React.useState(false);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setLoading(true)
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "next_produk");

        const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            formData
        );
        props.setProduk({ ...props.produk, image: res.data.secure_url });
        setLoading(false)
    };

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
                    type="file"
                    onChange={handleUpload}
                />
                <button type='submit' className={'bg-[#111d0f] text-white py-2 rounded-md ' + (loading ? 'opacity-50 cursor-not-allowed' : '') } disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>
                <button type='button' onClick={() => router.push('/')} className='bg-white text-orange-600 py-2 rounded-md'>Back To Home</button>

            </form>
        </>
    )
}

export default AddProduk