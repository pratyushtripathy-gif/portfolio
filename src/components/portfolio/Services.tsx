import { Section } from "./Section";
import { PenLine, Search, Megaphone, Bot, Presentation, GraduationCap, ArrowUpRight } from "lucide-react";

const services = [
  { icon: PenLine, title: "Content Writing", desc: "Articles, blogs, research-based and educational content." },
  { icon: Search, title: "Research Assistance", desc: "Information gathering, analysis and academic support." },
  { icon: Megaphone, title: "Social Media Content", desc: "Planning, creative content and branding support." },
  { icon: Bot, title: "AI Consulting & Prompts", desc: "AI tool utilization, prompt optimization, workflows." },
  { icon: Presentation, title: "Presentation Design", desc: "Academic & professional slides with visual storytelling." },
  { icon: GraduationCap, title: "Tutoring & Teaching", desc: "Academic mentoring and personalized learning support." },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="How I can help.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, title, desc }) => (
          <a
            key={title}
            href="#contact"
            className="group glass rounded-3xl p-6 hover-lift flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div className="h-11 w-11 rounded-xl bg-primary/15 grid place-items-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
