import { FAGs } from "@/components/home/fags";
import Features1 from "@/components/home/features-1";
import Features2 from "@/components/home/features-2";
import HomeHero from "@/components/home/hero";
import HomeStats from "@/components/home/stats";

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeStats />
      <Features1 />
      <Features2 />
      <FAGs/>
    </div>
  );
}
