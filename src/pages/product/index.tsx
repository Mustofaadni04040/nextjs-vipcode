import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function ProductPage() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin, router]);

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}
