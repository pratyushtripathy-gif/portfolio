import { Section } from "./Section";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, Check, AlertCircle, Copy } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const contacts = [
  { icon: Mail, label: "Email", value: "pratyushtripathy56@gmail.com", href: "mailto:pratyushtripathy56@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9472191157", href: "tel:+919472191157" },
  { icon: Linkedin, label: "LinkedIn", value: "pratyush-tripathy", href: "https://www.linkedin.com/in/pratyush-tripathy-251111408" },
  { icon: Instagram, label: "Instagram", value: "@_pratyushtripathy_", href: "https://instagram.com/_pratyushtripathy_" },
  
  { icon: MapPin, label: "Location", value: "Patna, Bihar, India" },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgvyban";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [lastPayload, setLastPayload] = useState<z.infer<typeof schema> | null>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText("pratyushtripathy56@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const mailtoFallback = (p: z.infer<typeof schema>) => {
    const subject = encodeURIComponent(p.subject);
    const body = encodeURIComponent(`From: ${p.name} <${p.email}>\n\n${p.message}`);
    return `mailto:pratyushtripathy56@gmail.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setStatus("error");
      setErrorMsg(parsed.error.issues[0]?.message ?? "Please check your inputs.");
      return;
    }
    setLastPayload(parsed.data);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      subtitle="Let's collaborate on exciting projects, research, content creation, or innovative ideas."
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
        <div className="space-y-6">
          <a
            href="tel:+919472191157"
            className="group flex items-center justify-between gap-4 rounded-3xl p-6 bg-gradient-to-r from-primary to-accent text-background shadow-[0_10px_40px_-10px_var(--glow)] hover:shadow-[0_18px_50px_-10px_var(--glow)] hover:-translate-y-0.5 transition"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-background/20 grid place-items-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Tap to call</div>
                <div className="text-lg font-semibold">+91 9472191157</div>
                <div className="text-xs opacity-80 mt-0.5">Available for collaborations & opportunities.</div>
              </div>
            </div>
            <Send className="h-4 w-4 group-hover:translate-x-1 transition" />
          </a>

          <div className="glass-strong rounded-3xl p-8 space-y-4">
          {contacts.map(({ icon: Icon, label, value, href }, i) => {
            const inner = (
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center shrink-0">
                  <Icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                  <div className="text-sm font-medium break-words group-hover:text-primary transition">{value}</div>
                </div>
                {label === "Email" && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email"
                    className="opacity-0 group-hover:opacity-100 transition rounded-lg p-2 hover:bg-white/10"
                  >
                    {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                  </button>
                )}
              </div>
            );
            const key = `${label}-${i}`;
            return href ? (
              <a
                key={key}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={key}>{inner}</div>
            );
          })}
          </div>
        </div>



        <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" maxLength={100} />
            <Field name="email" label="Email" type="email" maxLength={255} />
          </div>
          <Field name="subject" label="Subject" maxLength={150} />
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              className="mt-1.5 w-full rounded-2xl bg-input/40 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : status === "success" ? "Sent" : "Send message"}
              {status === "success" ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            </button>

            {status === "success" && (
              <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                <Check className="h-4 w-4" /> Thanks — I'll get back to you soon.
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {errorMsg}
                {lastPayload && (
                  <a href={mailtoFallback(lastPayload)} className="underline hover:text-foreground">
                    Try email instead
                  </a>
                )}
              </span>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  maxLength,
}: {
  name: string;
  label: string;
  type?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={maxLength}
        className="mt-1.5 w-full rounded-2xl bg-input/40 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      />
    </div>
  );
}
