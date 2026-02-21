"use client";
import { useState } from 'react';
import Image from 'next/image';

import hero_bg from "@/app/assets/hero-bg.png";
import hero_logo from "@/app/assets/hero-logo.png";
export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<null | { department: string; confidence: number }>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/api/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to backend");
    }
    setLoading(false);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image src={hero_bg} alt="Background" fill className="object-cover opacity-80" />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 pointer-events-none" />

      {/* Main content goes here */}
      <div className="flex items-center w-2xl justify-center z-10 mb-34 ">
        <Image src={hero_logo} alt="LARS Logo" className="" />
      </div>

    </main>
  );
}