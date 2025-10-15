"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(0,0,0,0.35)] backdrop-blur-md">
      <div className="h-px w-full bg-white/5" />
      <Container className="flex h-16 items-center justify-between">
 <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="PentAI Logo"
            width={120}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[14px]">
          <Link href="#" className="font-[dm-semibold] text-white">Home</Link>
          <Link href="#" className="text-[#4C5155] font-[dm-semibold] hover:text-white transition">SecrtChat</Link>
          <Link href="#" className="text-[#4C5155] font-[dm-semibold] hover:text-white transition">GenPen</Link>
          <Link href="#" className="text-[#4C5155] font-[dm-semibold] hover:text-white transition">Contact</Link>
        </nav>

        <Link
          href="#"
          className="rounded-full font-[dm-semibold] bg-gradient-to-b bg-[#42225a] hover:bg-[#5a2d7a] px-4 py-1.5 text-[15px]  text-zinc-100 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_6px_16px_rgba(168,85,247,0.25)] ring-1 ring-white/10 hover:brightness-110 transition"
        >
          Dashboard
        </Link>
      </Container>
      <div className="h-px w-full bg-white/5" />
    </header>
  );
}
