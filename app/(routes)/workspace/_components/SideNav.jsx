"use client";
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

function SideNav({ params }) {
  return (
    <div className="h-screen md:w-72 hidden md:block fixed bg-blue-50 p-5 shadow-md">
      <div className="flex items-center justify-between">
        <Logo />
        <Bell className="h-5 w-5 text-gray-500" />
      </div>
      <hr className="my-5" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-medium">Workspace Name</h2>
          <Button size="sm">+</Button>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
