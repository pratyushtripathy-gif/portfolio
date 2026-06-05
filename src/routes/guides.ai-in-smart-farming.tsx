import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sprout, Cpu, Droplets, ShieldCheck, Sun, LineChart } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";

const CANONICAL = "https://pratyushtripathy.lovable.app/guides/ai-in-smart-farming";
const PUBLISHED = "2026-06-05";

export const Route = createFileRoute("/guides/ai-in-smart-farming")({
  head: () => ({
    meta: [
      { title: "AI in Smart Farming: A Practical Guide with a Real Project" },
      {
        name: "description",
        content:
          "How AI can be used in smart farming — from trespasser detection to irrigation and yield prediction — illustrated with the solar-powered Smart Farm project.",
      },
      { property: "og:title", content: "AI in Smart Farming: A Practical Guide" },
      {
        property: "og:description",
        content:
          "A technical guide on how AI can be used in smart farming, with the Smart Farm project as a case study.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:author", content: "Pratyush Tripathy" },
      { name: "keywords", content: "AI in smart farming, how can ai be used in smart farming, smart farming, precision agriculture, AI agriculture" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "AI in Smart Farming: A Practical Guide with a Real Project",
          description:
            "How AI can be used in smart farming — from trespasser detection to irrigation and yield prediction — illustrated with the Smart Farm project.",
          datePublished: PUBLISHED,
          dateModified: PUBLISHED,
          author: { "@type": "Person", name: "Pratyush Tripathy" },
          mainEntityOfPage: CANONICAL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How can AI be used in smart farming?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI is used in smart farming for computer-vision trespasser and pest detection, automated irrigation based on soil-moisture data, yield and disease prediction, drone-based crop scouting, and decision-support for planting and harvesting.",
              },
            },
            {
              "@type": "Question",
              name: "What is an example of AI in smart farming?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The Smart Farm project uses a solar-powered Arduino setup with AI-driven trespasser detection, smartphone control, automated irrigation and water-level monitoring to help small rural farms.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: GuidePage,
});

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold tracking-tight">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass">
          <Icon className="h-4 w-4 text-primary" />
        </span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function GuidePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <header className="mt-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <Sprout className="h-3.5 w-3.5 text-primary" /> Technical Guide · Research Summary
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
            AI in Smart Farming:{" "}
            <span className="text-gradient">A Practical Guide</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            How AI can be used in smart farming — what it actually does in the field, where it
            breaks down, and what a working student-built prototype looks like. This guide uses my{" "}
            <strong className="text-foreground">Smart Farm</strong> project as a running case
            study.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            By Pratyush Tripathy · Published {new Date(PUBLISHED).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        <Section icon={Cpu} title="What 'AI in smart farming' actually means">
          <p>
            Smart farming combines IoT sensors, connected actuators and data analytics to make
            farm operations measurable. AI sits on top of that layer: it turns raw sensor streams,
            camera feeds and weather data into <em>decisions</em> — when to irrigate, which plant
            is diseased, whether the moving object near the fence is a stray animal or a person.
          </p>
          <p>
            For a small farm in India, this usually looks less like a self-driving tractor and
            more like a microcontroller, a few sensors, a camera, and a lightweight model that
            runs on-device or on a cheap edge board.
          </p>
        </Section>

        <Section icon={ShieldCheck} title="Case study: the Smart Farm project">
          <p>
            Smart Farm (2023 – 2025) is a solar-powered prototype I built to address real problems
            faced by small rural farmers. It combines an Arduino-based control board, sensors, and
            a smartphone interface — with AI-powered trespasser detection as the core safety
            feature.
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Smartphone-controlled pump and lighting</li>
            <li>Arduino-based automation for relays and sensors</li>
            <li>AI-powered trespasser detection using a camera + on-device model</li>
            <li>Automated irrigation driven by soil-moisture readings</li>
            <li>Water-level monitoring for the storage tank</li>
            <li>Fully solar-powered, so it runs in areas with unreliable grid power</li>
          </ul>
          <p>
            The AI piece — trespasser detection — matters because crop loss in small farms is
            often caused by stray cattle or unauthorized entry at night. A simple
            person/animal-vs-background classifier on a low-cost camera is enough to trigger a
            buzzer and a phone notification, without paying for a commercial security service.
          </p>
        </Section>

        <Section icon={Droplets} title="Where AI helps most on a small farm">
          <p>Five applications consistently deliver value:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Trespasser and pest detection.</strong>{" "}
              Computer-vision models classify camera frames and alert the farmer in real time —
              the use case the Smart Farm prototype targets.
            </li>
            <li>
              <strong className="text-foreground">Precision irrigation.</strong> Soil-moisture
              sensors feed a model (or even a simple threshold policy) that opens valves only
              when a zone actually needs water. The FAO estimates agriculture uses ~70% of global
              freshwater, so even small savings compound.
            </li>
            <li>
              <strong className="text-foreground">Disease and pest identification.</strong> Phone
              cameras plus a fine-tuned vision model can flag early leaf disease before it
              spreads.
            </li>
            <li>
              <strong className="text-foreground">Yield prediction.</strong> Time-series models on
              weather, soil and historical-yield data help plan harvest and storage.
            </li>
            <li>
              <strong className="text-foreground">Drone-based scouting.</strong> Larger operations
              use drone imagery + segmentation models to map crop health across fields.
            </li>
          </ol>
        </Section>

        <Section icon={Sun} title="A reference architecture you can actually build">
          <p>The Smart Farm setup follows a layered pattern that other student projects can copy:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li><strong className="text-foreground">Power:</strong> solar panel + battery + charge controller.</li>
            <li><strong className="text-foreground">Sensors:</strong> soil moisture, water level, temperature, plus a camera.</li>
            <li><strong className="text-foreground">Edge controller:</strong> Arduino / ESP32 handling relays, with a Raspberry Pi or phone running the vision model.</li>
            <li><strong className="text-foreground">Connectivity:</strong> Wi-Fi or low-cost mobile data; Bluetooth for offline control.</li>
            <li><strong className="text-foreground">Interface:</strong> a smartphone app for monitoring, alerts and manual override.</li>
          </ul>
        </Section>

        <Section icon={LineChart} title="Limitations and honest tradeoffs">
          <p>
            AI in smart farming is not a silver bullet — especially in the Indian context. Three
            constraints keep showing up:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              <strong className="text-foreground">Cost and affordability.</strong> Many small
              farmers cannot afford commercial smart-farming kits. Solar power and open-source
              hardware help, but the upfront cost is still real.
            </li>
            <li>
              <strong className="text-foreground">Connectivity gaps.</strong> Rural internet is
              unreliable, so models should run on-device wherever possible.
            </li>
            <li>
              <strong className="text-foreground">Skill and training.</strong> Without basic
              training, farmers can't maintain sensors or interpret alerts. Public-private
              partnerships and student-built solutions both have a role to play here.
            </li>
          </ul>
        </Section>

        <Section icon={Sprout} title="Takeaways">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>AI in smart farming is most useful for vision-based safety, irrigation control, and disease detection — not magic forecasting.</li>
            <li>A working prototype can be built today with an Arduino, a camera and a solar panel; the Smart Farm project is proof.</li>
            <li>The hardest problems are cost, connectivity and training — not the model itself.</li>
          </ul>
          <p>
            Want to see the full Smart Farm project alongside other work? Head back to the{" "}
            <Link to="/" className="text-primary hover:underline">portfolio home</Link>.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
