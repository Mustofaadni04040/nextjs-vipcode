import { useSession } from "next-auth/react";
import React from "react";

export default function ProfilePage() {
  const { data }: any = useSession();
  return (
    <div>
      <h1>Profile</h1>
      <h2>{data && data.user.fullname}</h2>
    </div>
  );
}
