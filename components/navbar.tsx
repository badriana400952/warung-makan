import {
  Button,
  Navbar as HeroNavbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

export const Navbar: React.FC = () => {
  const { data: session } = useSession()
  const menuItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Bast Menu",
      href: "#bast-menu",
    },
    {
      name: "Regular Menu",
      href: "#regular-menu",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  const roiter = useRouter();

  return (
    <HeroNavbar
      isBordered
      className="bg-[#ffefe6] text-orange-600 "
      maxWidth="xl"
      position="static"
    >
      <NavbarBrand>
        <p
          className="font-bold text-2xl border-b-[3px]"
          style={{ borderBottomStyle: "dashed", borderBottomColor: "#ea580c" }}
        >
          Food Dash
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className="font-medium hover:text-orange-500 transition"
              color="foreground"
              href={`${item.href}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-4 justify-center items-end">
          {!session?.user && (
            <div className="flex gap-4 justify-center items-end">
              <Button
                className="text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white transition rounded-3xl px-6"
                color="warning"
                variant="flat"
              >
                Order Now
              </Button>
            </div>
          )}
          {session?.user && (
            <div className="flex gap-4 justify-center items-end">
              <Button
                className="text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white transition rounded-3xl px-6"
                color="warning"
                variant="flat"
                onPress={() => roiter.push("/produk")}
              >
                Tambah Produk
              </Button>

              <Button
                className="text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white transition rounded-3xl px-6"
                color="warning"
                variant="flat"
                onPress={() => signOut({ callbackUrl: "/login" })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" /><path d="M9 12h12l-3-3m0 6l3-3" /></g></svg>
              </Button>
            </div>
          )

          }

        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};
