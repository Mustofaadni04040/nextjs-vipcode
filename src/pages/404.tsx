import React from "react";

export default function Custom404() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-2xl text-slate-700 flex flex-col gap-6 items-center">
        <img src="/404.svg" alt="404" className="w-1/2" />
        404 | Halaman Tidak Ditemukan
      </div>
    </div>
  );
}
