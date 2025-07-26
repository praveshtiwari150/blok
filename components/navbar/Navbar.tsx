"use client";

import { useSession } from "next-auth/react";
import { ModeToggle } from "./ModeToggle";
import SignOut from "./SignOut";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { stat } from "fs";

const Navbar = () => {
  const { status } = useSession();
  const { open } = useSidebar();
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center gap-2 items-center">
        {status === "authenticated" && (
          <SidebarTrigger className="cursor-pointer hover:text-violet-500" />
        )}
        <div className="text-3xl font-bold font-sans text-blue dark:text-violet">
          Blok
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <ModeToggle />
        {status === "authenticated" && <SignOut />}
      </div>
    </div>
  );
};

export default Navbar;
