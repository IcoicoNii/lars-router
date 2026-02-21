import admin_bg from "@/app/(admin)/assets/admin-bg.png"; // <--- Import your admin background image (optional)
import logo from "@/app/assets/logo.png"; // <--- Import your logo image (optional)
import { Inter, Antic, Google_Sans } from "next/font/google";
import Link from "next/link";

export default function AdminPage() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-[90dvh] relative"
      style={{
        backgroundImage: `url(${admin_bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-2 text-white">WELCOME, ADMIN</h1>
        <p className="text-lg text-slate-200">Department Name</p>
      </div>
    </main>
  );
}
