import Hero from "@/components/Hero";
import ToolsBand from "@/components/ToolsBand";
import {
  Statement,
  Challenges,
  WorkTeaser,
  AboutTeaser,
  Difference,
  Pillars,
} from "@/components/home/Sections";
import Compare from "@/components/Compare";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsBand />
      <Statement />
      <Challenges />
      <WorkTeaser />
      <Compare />
      <AboutTeaser />
      <Difference />
      <Pillars />
      <Faq />
      <Cta />
    </>
  );
}
