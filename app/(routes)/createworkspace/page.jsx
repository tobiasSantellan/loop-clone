"use client";
import { Button } from "@/components/ui/button";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  return (
    <div className="p-10 md:px-36 lg:px-52 xl:px-80 py-20">
      <div>
        {/* Cover Image */}
        <div className="relative group cursor-pointer">
          <h2 className=" hidden group-hover:flex absolute p-4 w-full h-full items-center justify-center flex">
            Change Cover
          </h2>
          <div className="group-hover:opacity-65">
            <Image
              src={coverImage}
              width={400}
              height={400}
              alt="cover-img"
              className="w-full h-[150px] object-cover rounded-t-xl"
            />
          </div>
        </div>

        {/* Input section */}
        <div className="p-12">
          <h2 className="font-bold text-xl">Create a new workspace</h2>
          <h2 className="text-sm mt-2">
            This is a shared space where you can collaborate with your team. You
            can always rename it later
          </h2>
          <div className="mt-8">
            <Button variant="outline">
              <SmilePlus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkspace;
