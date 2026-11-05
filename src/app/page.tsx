import { person, site } from "@/content/profile";
import { SiteHeader } from "@/components/site-header";
import { About, Contact, Expertise, Experience, Hero, SiteFooter, Skills, Solutions } from "@/components/sections";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  url: site.url,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressCountry: "CA" },
  worksFor: { "@type": "Organization", name: "Sanofi" },
  sameAs: Object.values(person.links),
  knowsAbout: ["Generative AI", "Agentic AI", "LangGraph", "Retrieval-augmented generation", "Snowflake", "Apache Airflow", "Data architecture"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Solutions />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
