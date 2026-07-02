import Nav from "@/components/Nav";
import PageFrame from "@/components/PageFrame";
import Hero from "@/components/Hero";
import ToolsBand from "@/components/ToolsBand";
import Workflow from "@/components/Workflow";
import Features from "@/components/Features";
import Compare from "@/components/Compare";
import UseCases from "@/components/UseCases";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="relative">
        <PageFrame />
        <main className="relative">
          <Hero />
          <ToolsBand />
          <Workflow />
          <Features />
          <Compare />
          <UseCases />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
}
