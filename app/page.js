import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonial";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}

      {/* HERO START */}
      <Hero />
      {/* HERO END */}

      <main className="bg-gradient-to-br dark:form-dark dark:to-secondary">
        {/* ABOUT START */}
        <About />
        {/* ABOUT END */}

        {/* SKILLS START */}
        <Skills />
        {/* SKILLS END */}

        {/* SERVICES START */}
        <Services />
        {/* SERVICES END */}

        {/* PORTOFLIO START */}
        <Portfolio />
        {/* PORTOFLIO END */}

        {/* PRICING START */}
        {/* <Pricing /> */}
        {/* PRICING END */}

        {/* TESTIMOAL START */}
        {/* <Testimonials /> */}
        {/* TESTIMOAL END */}

        {/* CONTACT START */}
        <Contact />
        {/* CONTACT END */}

        {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}
      </main>
    </>
  );
}
