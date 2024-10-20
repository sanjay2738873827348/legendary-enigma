"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function Navbar2() {
  const navItems = [
    {
      name: "Features",
      link: "",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Mission",
      link: "",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Support",
      link: "/support",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
        name: "",
        link: "",
        icon: <IconUser className="h-4 w-4 bg-opacity-0 dark:text-white" />,
      },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );}
