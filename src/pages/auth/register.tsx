import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        Sudah punya akun?<Link href={"/auth/login"}>Login</Link>
      </p>
    </div>
  );
}
