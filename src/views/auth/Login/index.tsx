import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Login.module.scss";

export default function LoginViews() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-5xl font-bold text-slate-800">Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p
        style={{
          padding: "10px",
          color: "red",
          border: "1px solid red",
          borderRadius: "10px",
        }}
      >
        Belum punya akun?<Link href={"/auth/register"}>Registrasi</Link>
      </p>
    </div>
  );
}
