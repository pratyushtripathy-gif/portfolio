import { Section } from "./Section";
import { Star, Quote } from "lucide-react";

const items = [
  { name: "Your Name Here", role: "Future client", quote: "Be the first to share your experience working with Pratyush." },
  { name: "Reserved", role: "Collaborator", quote: "Reserved for collaborators and mentors who'd like to share a few words." },
  { name: "Reserved", role: "Educator", quote: "Reserved for teachers and educators on academic & research initiatives." },
];

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Kind words, coming soon.">
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((t) => (
          <div key={t.name} className="glass rounded-3xl p-6 hover-lift relative overflow-hidden">
            <Quote className="absolute -top-2 -right-2 h-20 w-20 text-primary/5" />
            <div className="flex gap-0.5 text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
