import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { TagCloudComponent } from "./TagCloud";
import { Socials } from "./Socials";
import { ArrowRight } from "lucide-react";
import { DropMenu } from "./DropMenu";

export const Hero = () => {
  return (
    <main className="h-full overflow-hidden">
      <div className="absolute right-10 top-6">
        <DropMenu />
      </div>

      <div className="lg:mt-56 pl-32 grid grid-cols-2">
        <div>
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <span className="rounded-full bg-yellow-300/10 px-3 py-1 text-sm font-semibold leading-6 text-yellow-300 ring-1 ring-inset ring-yellow-300/10">
              Full-Stack Developer
            </span>
            <span className="ml-2 rounded-full bg-yellow-300/10 px-3 py-1 text-sm font-semibold leading-6 text-yellow-400 ring-1 ring-inset ring-yellow-400/10">
              Junior
            </span>
          </div>

          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Mathis PICOT
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Web developer for 1 year. I am a Full-Stack developer with Next.js.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/projects"
              className={`${buttonVariants({
                size: "lg",
                variant: "ghost",
              })}  text-gray-800  bg-yellow-300 hover:bg-yellow-200`}
            >
              My projects
            </Link>
            <Button size="lg" variant="outline" className="">
              My skills <ArrowRight />
            </Button>
          </div>
        </div>
        <div>
          <div className="tagcloud-container text-yellow-300  text-lg ml-80 mt-28">
            <TagCloudComponent />
          </div>
        </div>
      </div>

      <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white  shadow-xl shadow-white/10 ring-1 ring-yellow-50 dark:ring-yellow-400/10 dark:bg-black/20"
          aria-hidden="true"
        ></div>
      </div>

      <Socials />
    </main>
  );
};
