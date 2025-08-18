"use client"; // penting kalau kamu taruh di app router Next.js

import { Alert } from "@heroui/react";
import React from "react";
import ReactDOM from "react-dom/client";

export function SuccessAlert({message, title}: {message: string, title: "Success" | "Error"}) {
  if (typeof window === "undefined") return; // jangan jalan di server

  // Buat container baru di body
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);

  const AlertBox = () => {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          root.unmount();
          container.remove();
        }, 300);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    return (
      isVisible && (
        <div className="fixed w-[40%] top-4 left-1/2 -translate-x-1/2 z-50">
          <Alert
            color={title.toLowerCase() === "success" ? "success" : "danger"}
            title={title}
            description={message}
            isVisible={isVisible}
            variant="faded"
            onClose={() => {
              setIsVisible(false);
              setTimeout(() => {
                root.unmount();
                container.remove();
              }, 300);
            }}
          />
        </div>
      )
    );
  };

  root.render(<AlertBox />);
}
