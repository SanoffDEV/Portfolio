import { Hero } from "../[locale]/_landing/Hero";

export default async function Home({ params }: { params: { locale: string } }) {
  await params; // 🔍 Vérifie dans la console

  return <Hero />;
}
