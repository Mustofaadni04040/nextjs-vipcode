import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar"));

type AppShellProps = {
  children: ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const disabledNavbar = ["/auth/login", "/auth/register", "/404"];

export default function AppShell({ children }: AppShellProps) {
  const router = useRouter();
  // console.log(router.pathname);
  return (
    <main className={roboto.className}>
      {!disabledNavbar.includes(router.pathname) && <Navbar />}
      {children}
    </main>
  );
}
