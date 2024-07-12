import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: ReactNode;
};

const disabledNavbar = ["/auth/login", "/auth/register"];

export default function AppShell({ children }: AppShellProps) {
  const router = useRouter();
  return (
    <main>
      {!disabledNavbar.includes(router.pathname) && <Navbar />}
      {children}
    </main>
  );
}
