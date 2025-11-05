import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="bg-gradient-to-br dark:form-dark dark:to-secondary">
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
