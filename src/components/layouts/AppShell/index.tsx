import React from "react";
import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
