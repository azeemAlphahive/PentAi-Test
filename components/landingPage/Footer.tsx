"use client";

import Image from "next/image";
import Link from "next/link";


export function Footer() {
  return (
    <footer className="mx-auto sm:px-6 md:px-8 lg:px-[80px] text-white">
      {/* CTA Section */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto  py-8 sm:py-[56px]">
        {/* Top Section - Brand, Copyright, Social */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="order-2 lg:order-1">
            <span className="text-xl sm:text-2xl font-bold">PentAi.</span>
          </div>
          
          {/* Copyright - Center on mobile, left on desktop */}
          <div className="order-1 lg:order-2 text-[#ECEDEE] text-sm font-[dm] text-center lg:text-left">
            © {new Date().getFullYear()} PentAi. All rights reserved.
          </div>
          
          {/* Social Icons */}
          <div className="order-3 flex items-center gap-3 sm:gap-[12px]">
            <img src="/Images/Facebook.svg" className="w-5 h-5 cursor-pointer sm:w-[24px] sm:h-[24px]" alt="Facebook" />
            <img src="/Images/Instagram.svg" className="w-5 h-5 cursor-pointer  sm:w-[24px] sm:h-[24px]" alt="Instagram" />
            <img src="/Images/x.svg" className="w-5 h-5 cursor-pointer sm:w-[24px] sm:h-[24px]" alt="X" />
            <img src="/Images/LinkedIn.svg" className="w-5 cursor-pointer h-5 sm:w-[24px] sm:h-[24px]" alt="LinkedIn" />
            <img src="/Images/Youtube.svg" className="w-5 cursor-pointer h-5 sm:w-[24px] sm:h-[24px]" alt="YouTube" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#707070] mt-6 sm:mt-[24px] pt-4 sm:pt-[20px] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#ECEDEE] font-[dm-medium] text-sm text-center md:text-left">
            Realised by{" "}
            <Link
              href="https://www.newweborder.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              ◬ ɴᴇᴡ ᴡᴇʙ ᴏʀᴅᴇʀ_
            </Link>
          </p>
          <div className="flex gap-4 sm:gap-[12px] mt-2 md:mt-0">
            <a
              href="#"
              className="text-[#ECEDEE] hover:text-white text-sm font-[dm-medium] transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#ECEDEE] hover:text-white text-sm font-[dm-medium] transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>

  );
}
