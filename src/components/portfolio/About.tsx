import { Section } from "./Section";
import {
  PenLine, Search, Palette, Megaphone, Bot, Crown,
  Guitar, BookOpen, Rocket, Scissors, Cpu,
} from "lucide-react";

const interests = [
  { i: PenLine, l: "Content Writing" },
  { i: Search, l: "Research" },
  { i: Palette, l: "UI/UX Design" },
  { i: Megaphone, l: "Social Media" },
  { i: Bot, l: "AI Tools" },
  { i: Crown, l: "Chess" },
  { i: Guitar, l: "Guitar" },
  { i: BookOpen, l: "Reading" },
  { i: Rocket, l: "Entrepreneurship" },
  { i: Scissors, l: "Editing" },
  { i: Cpu, l: "Technology" },
];

const highlights = [
  "Class 11 PCM Student",
  "CBSE Background",
  "AI & Data Science Learner",
  "Student Innovator",
  "Startup Enthusiast",
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Curiosity is my default mode.">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            I'm a Class 11 PCM student from Patna with a deep curiosity for how things
            work and how they can work better. My journey blends academics, independent
            research, and an obsession with building — from solar-powered farms to AI-driven
            workflows.
          </p>
          <p>
            I write, design, lead events, and study emerging tech because they all sharpen
            the same skill: turning ideas into outcomes. Right now I'm exploring AI, leading
            student initiatives, and co-founding a startup with a fellow student.
          </p>
          <div className="flex flex-wrap gap-2 pt-3">
            {highlights.map((h) => (
              <span
                key={h}
                className="rounded-full glass px-3 py-1.5 text-xs text-foreground"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {interests.map(({ i: Icon, l }) => (
            <div
              key={l}
              className="glass rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-center aspect-square hover-lift"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-[11px] text-muted-foreground leading-tight">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
