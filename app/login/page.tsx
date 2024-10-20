"use client"

import Hero from "@/components/hero";
import { Navbar2 } from "@/components/navbar2";
import React from "react";
import { LoginForm } from "@/components/loginform";



export default function Home() {

  return (
    <main className="">
      <Navbar2 />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="form">
        <LoginForm />
      </div>

    </main>
  );
}