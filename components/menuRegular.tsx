import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddProduk from "./addProduk";
import { SuccessAlert } from "@/lib/successAlert";
import { useSession } from "next-auth/react";

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
  id?: number
  nama_produk: string,
  produk_khas: string,
  harga: number,
  image: string
  total_terjual?: number
  id_penjualan?: number
}
export default function FoodCard() {
  const [produk, setProduk] = useState<produk[]>([]);
  const [EditProduk, setEditProduk] = useState<produk>({} as produk);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data: session } = useSession()
  const handleGet = async () => {
    try {
      const result = await axios.get("/api/produk");
      setProduk(result.data);
    } catch (error) {
      SuccessAlert({
        title: "Error",
        message: "Gagal Ubah Data",
      })
    }
  };

  useEffect(() => {
    handleGet();
  }, [])

  const items = [
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

  const handleDetail = async (id?: number) => {

    try {
      const response = await axios.get(`/api/produk/${id}`);
      setEditProduk(response.data);
    } catch (error) {
      SuccessAlert({
        title: "Error",
        message: "Gagal Ubah Data",
      })
    }
  }

  const handleedit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/produk/${EditProduk.id}`, {
        ...EditProduk
      })
      handleGet()
      SuccessAlert({
        title: "Success",
        message: "Berhasil Ubah Data",
      })
      onClose()
    } catch (error) {
      SuccessAlert({
        title: "Error",
        message: "Gagal Ubah Data",
      })
    }
  }
  const handleDelete = async (id?: number, id_penjualan?: number) => {
    try {
      await axios.delete(`/api/produk/${id}`, {
        data: {
          id_penjualan: id_penjualan
        }
      })
      handleGet()
      SuccessAlert({
        title: "Success",
        message: "Berhasil Hapus Data",
      })
    } catch (error) {
      if (error instanceof Error) {
        SuccessAlert({
          title: "Error",
          message: error.message,
        })
      }
    }
  }
  return (
    <>

      <div className="py-10 px-4 sm:px-6 lg:px-10">
        <div className="flex justify-center gap-8  flex-wrap">
          {produk.map((menu, index) => (
            <div
              key={index}
              className="bg-[#fff4ee] mt-12 rounded-xl p-5 w-full max-w-[16rem] shadow-md flex flex-col items-center relative"
            >
              {/* Gambar Makanan */}
              {session?.user && (
                <div className="w-28 h-28 absolute -right-18 top-3">
                  <Dropdown>
                    <DropdownTrigger>
                      <svg onClick={(e) => handleDetail(menu?.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-16a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" /></svg>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Dynamic Actions" items={items}>
                      {(item) => (
                        <DropdownItem
                          key={item.key}
                          className={item.key === "delete" ? "text-danger" : ""}
                          color={item.key === "delete" ? "danger" : "default"}
                          onClick={() => {
                            if (item.key === "edit") {
                              onOpen()
                            } else if (item.key === "delete") {
                              handleDelete(menu?.id, menu?.id_penjualan)
                            }
                          }}
                        >
                          {item.label}
                        </DropdownItem>
                      )}
                    </DropdownMenu>
                  </Dropdown>

                </div>
              )}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden -mt-16 mb-4">
                {menu.image && (
                  <Image
                    src={menu.image}
                    alt={menu.nama_produk}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                )}

              </div>

              {/* Judul */}
              <h3 className="text-orange-600 font-bold text-xs sm:text-sm text-center">
                {menu.nama_produk}
              </h3>
              <p className="text-gray-800 font-semibold text-base sm:text-lg mb-2 text-center">
                {menu.produk_khas}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="text-gray-500 text-xs sm:text-sm ml-1">{menu.total_terjual} Terpesan</span>
              </div>

              {/* Harga dan Tombol */}
              <div className="w-full mt-2 flex items-center justify-between">
                <span className="text-base sm:text-lg font-bold text-gray-900">
                  Rp {menu.harga}
                </span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full">
                  Pesan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit Produk</ModalHeader>
              <ModalBody>

                <div className="flex justify-center items-center">
                  <AddProduk produk={EditProduk} setProduk={setEditProduk} handleSubmit={handleedit} />
                </div>
              </ModalBody>
              <ModalFooter>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
