import NavbarBack from "@/components/sections/navbarBack";
import HeroSection from "@/components/sections/heroSection";

export default function Figma() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 dark:bg-zinc-800">
      <NavbarBack />
      <HeroSection />
    </main>
  );
}
