import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { LucideGithub, TwitterIcon } from "lucide-react";
import Link from "next/link";
import CopierTexte from "./CopyToClip";

export const Socials = () => {
  return (
    <div className="absolute flex  flex-col items-center bottom-8 left-1/2 -translate-x-24">
      <h2 className="mb-2">Contact Me </h2>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="mr-8">
            <Link href="https://github.com/SanoffDEV" target="blank">
              <LucideGithub />
            </Link>
          </MenubarTrigger>
          <MenubarTrigger className="mr-8">
            <CopierTexte />
          </MenubarTrigger>

          <MenubarTrigger>
            <Link href="https://x.com/Mathx__dev" target="blank">
              <TwitterIcon />
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};