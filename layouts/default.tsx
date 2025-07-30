import Link from "next/link";
import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col ">
      <Head />
      <Navbar />
      <main className="flex-grow ">{children}</main>
      <footer className="bg-[#ffefe6] text-orange-900 py-10 px-4 md:px-20">
        <section id="contact">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-orange-600 mb-4">
                Food Dash
              </h2>
              <p className="text-sm">
                Menu special terbaik dengan cita rasa khas. Temukan pilihan
                terbaik untuk Anda setiap hari.
              </p>
            </div>

            <div>
              <h3 className="text-orange-600 font-semibold mb-3">Produk</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Paket
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Promo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-orange-600 font-semibold mb-3">Perusahaan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-orange-600 font-semibold mb-3">Bantuan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Bantuan Pelanggan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privasi & Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer bawah */}
          <div className="mt-10 border-t border-orange-900 pt-6 text-sm text-center text-gray-400">
            © {new Date().getFullYear()} Food Dash. All rights reserved.
          </div>
        </section>
      </footer>
    </div>
  );
}
