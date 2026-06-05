import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Phone, Sparkles } from "lucide-react";
import heroImg from "@/assets/pratyush-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 overflow-hidden">
      {/* Floating glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Student • Researcher • Creator
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Pratyush <br />
            <span className="text-gradient">Tripathy</span>
            <span className="block mt-3 text-2xl md:text-3xl font-medium text-muted-foreground tracking-normal">
              Student Researcher &amp; AI Enthusiast
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Student Researcher • Content Writer • AI Enthusiast • Future Entrepreneur.
            Building award-winning ideas at the intersection of research, innovation, and design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href="/Pratyush_Tripathy_Resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="tel:+919472191157"
              className="group relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-background bg-gradient-to-r from-primary to-accent hover:opacity-95 transition shadow-[0_8px_30px_-8px_var(--glow)] hover:shadow-[0_12px_40px_-8px_var(--glow)] hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Call Me
            </a>
          </motion.div>

          {/* Counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { v: "4+", l: "Science Wins" },
              { v: "6+", l: "Major Projects" },
              { v: "IIT", l: "Madras Certified" },
              { v: "4+", l: "Chess Titles" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
          <div className="relative glass-strong rounded-[2rem] p-3 glow-border">
            <img
              src={heroImg}
              alt="Pratyush Tripathy"
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="rounded-[1.5rem] w-full max-w-md object-cover aspect-square"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 text-xs"
            >
              <div className="text-muted-foreground">Based in</div>
              <div className="font-medium">Patna, India</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 text-xs"
            >
              <div className="text-muted-foreground">Currently</div>
              <div className="font-medium">Class 11 PCM</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
