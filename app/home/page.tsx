"use client";

import { Navbar2 } from "@/components/navbar2";
import React, { useEffect, useState, useRef } from "react";
import Maincard from "@/components/maincard";
import { FooterDeck } from "@/components/hangdoc";

export default function Home() {
  const [footers, setFooters] = useState<JSX.Element[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchFooters = async (pageNum: number) => {
    setLoading(true);
    // API call should go here
    const newFooters = await new Promise<JSX.Element[]>((resolve) => {
      setTimeout(() => {
        const newFooterDecks = Array.from({ length: 4 }, (_, index) => (
          <Maincard key={pageNum * 4 + index} />
        ));
        resolve(newFooterDecks);
      }, 1000); //netwrk delay sim
    });
    setFooters((prev) => [...prev, ...newFooters]);
    setLoading(false);
  };

  useEffect(() => {
    fetchFooters(page);
  }, [page]);

  useEffect(() => {
    const lastFooterRef = document.getElementById("last-footer");

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    if (lastFooterRef) {
      observer.current = new IntersectionObserver(observerCallback);
      observer.current.observe(lastFooterRef);
    }

    return () => {
      if (lastFooterRef && observer.current) {
        observer.current.unobserve(lastFooterRef);
      }
    };
  }, [loading]);

  return (
    <main className="">
      <Navbar2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-[5000]">
        <FooterDeck></FooterDeck>
      </div>
      <div className="flex flex-col items-center">
        <Maincard />
      </div>
      <div id="footdeck" className="flex flex-col items-center">
        {footers}
        {loading && <p>Loading....</p>}
        <div id="last-footer" style={{ height: "1px" }} />
      </div>
    </main>
  );
}
