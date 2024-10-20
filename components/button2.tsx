"use client"
import Link from 'next/link';
import React from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

import '@fontsource/ibm-plex-sans/600.css';

import {IBM_Plex_Sans, Inter} from 'next/font/google'


const ibmfont = IBM_Plex_Sans({
    weight: '600',
    subsets: ['latin'],
  })

const interfont = Inter({
    subsets: ["greek"],
    weight:"400",
})
function Button2(){
  return (
    <main className={interfont.className}>
        <Link href="/signup">
        <button className={interfont.className+"inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-[linear-gradient(110deg,#000000,45%,#ffffff,55%,#000)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"}>
          Create an Account Today!
        </button>
        </Link>
    </main>

  );
};



export default Button2;
