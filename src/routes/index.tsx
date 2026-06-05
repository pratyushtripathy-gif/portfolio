import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Achievements } from "@/components/portfolio/Achievements";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { WorkSamples } from "@/components/portfolio/WorkSamples";
import { Leadership } from "@/components/portfolio/Leadership";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pratyush Tripathy — Student Researcher & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Pratyush Tripathy — Class 11 student, researcher, writer and AI enthusiast from Patna, India building award-winning projects.",
      },
      { property: "og:title", content: "Pratyush Tripathy — Student Researcher & AI Enthusiast" },
      {
        property: "og:description",
        content:
          "Award-winning science projects, AI explorations, content writing and student leadership by Pratyush Tripathy.",
      },
      { property: "og:url", content: "https://pratyushtripathy.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://pratyushtripathy.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pratyush Tripathy",
          jobTitle: "Student Researcher",
          description:
            "Student researcher, content writer and AI enthusiast based in Patna, India.",
          url: "https://pratyushtripathy.lovable.app/",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Patna",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Skills />
        <Services />
        <Projects />
        <WorkSamples />
        <Leadership />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
