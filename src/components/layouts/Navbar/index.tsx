import React from "react";
import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data }: any = useSession();
  console.log(data);

  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>
      <div className="flex items-center gap-3">
        <p>{data && data.user.fullname}</p>
        {data ? (
          <button
            className="bg-black p-2 rounded text-sm"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ) : (
          <button
            className="bg-black p-2 rounded text-sm"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}
