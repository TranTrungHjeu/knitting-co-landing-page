import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingZalo from "@/components/layout/FloatingZalo";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Video from "@/components/sections/Video";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <Products />
        <Process />
        <Gallery />
        <Video />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingZalo />
    </>
  );
}
