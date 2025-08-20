import { pool } from "@/lib/connectionDB";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const result = await pool.query("SELECT * FROM users WHERE email = $1 LIMIT 1", [credentials?.email]);
          console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", result.rows);
          if (result.rows.length === 0) {
            throw new Error("User Not Found");
          }
          const user = result.rows[0];
          console.log("userrrrrrrrrrrrrrrrrrrrrrrrrrrr", user);
          //         const is_Valid = await compare(credentials?.password, user.password_hash);
          // if (!is_Valid) {
          //   throw new Error("Password Salah");
          // }

          return user;
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
