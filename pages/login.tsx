import { SuccessAlert } from "@/lib/successAlert";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
export default function App() {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      signIn("credentials", {
        email: users.email,
        password: users.password,
        redirect: true,
        callbackUrl: "/"
      })
           SuccessAlert({
        title: "Success",
        message: "Berhasil Login",
      })
    } catch (error: any) {

      SuccessAlert({
        title: "Error",
        message: error.message,
      })
      console.log(error)
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex gap-5 px-10 justify-center items-center  w-1/2 h-full">
        <div className="w-full max-w-md ">
          <div className="bg-[#fbd9c5] w-[300px] h-[300px] flex flex-col items-center justify-center rounded-2xl">
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                label="Email"
                placeholder="Enter your Email"
                value={users.email}
                onValueChange={(e) => setUsers({ ...users, email: e })}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                startContent={
                  <Icon icon="lucide:user" className="text-default-400" />
                }
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                value={users.password}
                onValueChange={(e) => setUsers({ ...users, password: e })}
                startContent={
                  <Icon icon="lucide:key" className="text-default-400" />
                }
              />
              <Button
                type="submit"
                color="primary"
                className="w-full bg-orange-600 hover:bg-orange-500"
              >
                Log In
              </Button>
            </form>
          </div>
        </div>
        <div>
          <Image
            alt="food image"
            src="/satu.png"
            width={900}
            height={900}
            className="h-auto object-contain animate-spin-slow"
            style={{ animation: "spin 9s linear infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
