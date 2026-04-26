import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Games from "@/components/Games";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Games />
      </main>
      <Footer />
    </>
  );
}
