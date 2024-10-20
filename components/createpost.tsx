"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CreatePost() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const imageref = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      title: titleRef.current?.value,
      content: contentRef.current?.value,
      image: imageref.current?.value,
    };
    if(titleRef.current?.value != "") {
        if(contentRef.current?.value != "") {
            if(imageref.current?.value != "") {
                router.push("/home")
            }
            else{
                setErrorMessage("Please provide the necessary post details!")
            }
        }
        else{
            setErrorMessage("Please provide the necessary post details!")
        }
    }
    else{
        setErrorMessage("Please provide the necessary post details!")
    }
}

  useGSAP(() => {
    gsap.to("#LoginForm", {
      opacity: 1,
      y: 50,
      duration: 2,
    });
  });

  return (
    <div id="LoginForm" className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Create a post on Clubhouse
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Enter Username/Password
      </p>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Post Title</Label>
            <Input id="firstname" placeholder="I love cats :3" type="text" ref={titleRef} />
          </LabelInputContainer>
        </div>
        <Textarea placeholder="Type your message here." ref={contentRef} />
        <br></br>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="image">Add Image Media</Label>
          <Input id="image" type="file" ref={imageref} />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Post &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
