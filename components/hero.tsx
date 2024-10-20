"use client"
import '@fontsource/ibm-plex-sans/600.css';
import {IBM_Plex_Sans} from 'next/font/google'

const ibmfont = IBM_Plex_Sans({
    weight: '600',
    subsets: ['latin'],
  })

import React from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

function Hero(){
    useGSAP(() => {
        let timeline = gsap.timeline()
        timeline.to(".protecule", {
            y: 80,
            opacity: 1,
            duration: 2,
        });
        timeline.to(".proteculev2", {
            y: 80,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
        });
    },[])

    return(
        <div>
            <div className="flex flex-col items-center">
            <div className="flex justify-center my-4 d-inline-flex" >
                <main className={ibmfont.className}>
                    <p className={ibmfont.className + " protecule"}>ClubHouse</p>
                    <p className={ibmfont.className + " proteculev2"}>.</p>
                </main>
            </div>
        </div>
    </div>
    )
}

export default Hero;