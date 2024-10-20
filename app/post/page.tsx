"use client"

import { Navbar2 } from "@/components/navbar2";
import React from "react";
import { CreatePost } from "@/components/createpost";



export default function Home() {

  return (
    <main className="">
      <Navbar2 />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="form">
      <CreatePost />
      </div>

    </main>
  );
}