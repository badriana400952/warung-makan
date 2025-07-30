import React from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

export const Navbar: React.FC = () => {
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
        <NavbarItem>
          <Button
            className="text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white transition rounded-3xl px-6"
            color="warning"
            variant="flat"
          >
            Order Now
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};
