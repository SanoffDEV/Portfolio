import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "prisma",
  "postgresql",
  "vercel",
  "git",
  "github",
  "zod",
  "tailwindcss",
  "lucide",
  "Node.js",
  "shadcnui",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className=" max-w-lg  overflow-hidden rounded-lg mt-10  ">
      <IconCloud images={images} />
    </div>
  );
}
