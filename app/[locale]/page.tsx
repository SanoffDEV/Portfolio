import { Hero } from "../[locale]/_landing/Hero"; // ✅ Vérifie bien le chemin !

export default function Home({ params }: { params: { locale: string } }) {
  return <Hero />;
}
