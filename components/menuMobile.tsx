import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";

const MenuMobile = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Pesan">
          <div className="w-64 rounded-md  z-10  flex justify-evenly items-center">
            <HoveredLink
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-orange-700"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.12.56 4.13 1.6 5.92L0 24l6.24-1.6a12.13 12.13 0 0 0 5.76 1.44c6.6 0 12-5.4 12-12 0-3.2-1.24-6.2-3.48-8.52zm-8.4 17.36c-1.84 0-3.6-.48-5.2-1.36l-.36-.2-3.68.96.96-3.6-.24-.36A9.44 9.44 0 0 1 2.4 12c0-5.28 4.32-9.6 9.6-9.6s9.6 4.32 9.6 9.6-4.32 9.6-9.6 9.6zm5.28-7.12c-.28-.12-1.68-.8-1.92-.88-.24-.08-.4-.12-.56.12s-.64.88-.8 1.04c-.16.16-.28.2-.52.08a7.75 7.75 0 0 1-2.28-1.4 8.8 8.8 0 0 1-1.64-2c-.16-.28 0-.44.12-.6.12-.12.28-.32.4-.48.12-.16.16-.28.24-.44.08-.16.04-.32 0-.44-.08-.12-.56-1.36-.76-1.84-.2-.48-.4-.4-.56-.4h-.48c-.16 0-.44.04-.68.32s-.88.84-.88 2.04c0 1.2.88 2.36 1 2.52.12.16 1.76 2.76 4.28 3.88.6.26 1.08.4 1.44.52.6.2 1.16.16 1.6.08.48-.08 1.68-.68 1.92-1.36.24-.68.24-1.24.16-1.36-.08-.12-.24-.16-.52-.28z" />
              </svg>
            </HoveredLink>

            <HoveredLink
              href="https://instagram.com/namakamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-orange-700"
              >
                <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zM4 7.5C4 5.57 5.57 4 7.5 4h9C18.43 4 20 5.57 20 7.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9zM17 6.25a.75.75 0 0 0 0 1.5h.01a.75.75 0 1 0 0-1.5H17zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
              </svg>
            </HoveredLink>

            <HoveredLink
              href="https://facebook.com/namakamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-orange-700"
              >
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.5 1.5-3.89 3.79-3.89 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.26 0-1.66.78-1.66 1.57v1.88h2.83l-.45 2.91h-2.38V22c4.78-.75 8.44-4.91 8.44-9.93z" />
              </svg>
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuMobile;
