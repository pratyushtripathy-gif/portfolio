import { Section } from "./Section";
import { GraduationCap, Award, Maximize2, FileText, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import iitmCertificate from "@/assets/iitm-certificate.jpg";
import resumeThumb from "@/assets/resume-thumb.jpg";

const RESUME_URL = "/Pratyush_Tripathy_Resume.pdf";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Certifications"
      title="Foundations in science, sharpened with AI."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-strong rounded-3xl p-8 hover-lift">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="text-sm text-muted-foreground">School</div>
          </div>
          <h3 className="text-2xl font-semibold">St. Karen's High School</h3>
          <p className="text-muted-foreground mt-1">CBSE Board</p>

          <ol className="mt-6 space-y-4 relative border-l border-border pl-5">
            <li>
              <div className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_var(--glow)]" />
              <div className="text-sm text-muted-foreground">2026</div>
              <div className="font-medium">Completed Class 10</div>
            </li>
            <li>
              <div className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent" />
              <div className="text-sm text-muted-foreground">Currently</div>
              <div className="font-medium">Class 11 — Physics, Chemistry, Mathematics</div>
            </li>
          </ol>
        </div>

        <div className="glass-strong rounded-3xl p-8 hover-lift relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <div className="text-sm text-muted-foreground">Certification</div>
            </div>
            <h3 className="text-2xl font-semibold">IIT Madras</h3>
            <p className="text-muted-foreground mt-1">
              Introduction to Data Science and AI
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl glass px-4 py-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-background font-bold text-sm">
                IITM
              </div>
              <div>
                <div className="font-medium">8-Week Program</div>
                <div className="text-xs text-muted-foreground">Verified Certification · Aug 2025</div>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="mt-5 group block w-full text-left"
                  aria-label="View IIT Madras certificate"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border glass hover-lift">
                    <img
                      src={iitmCertificate}
                      alt="IIT Madras certificate of participation for Pratyush Tripathy"
                      className="w-full h-[140px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>View certificate</span>
                      <Maximize2 className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-xl border-border p-2 sm:p-3">
                <img
                  src={iitmCertificate}
                  alt="IIT Madras certificate of participation for Pratyush Tripathy — Introduction to Data Science and AI, 8-week program, August 2025"
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-8 hover-lift relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Resume</div>
            </div>
            <h3 className="text-2xl font-semibold">Full CV</h3>
            <p className="text-muted-foreground mt-1">
              Pratyush Tripathy — complete profile (PDF)
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="mt-6 group block w-full text-left"
                  aria-label="Preview resume PDF"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border glass hover-lift">
                    <img
                      src={resumeThumb}
                      alt="Preview of Pratyush Tripathy resume PDF"
                      className="w-full h-[140px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Open resume</span>
                      <Maximize2 className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-xl border-border p-2 sm:p-3">
                <iframe
                  src={RESUME_URL}
                  title="Pratyush Tripathy Resume"
                  className="w-full h-[80vh] rounded-lg bg-background"
                />
              </DialogContent>
            </Dialog>

            <a
              href={RESUME_URL}
              download
              className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-sm font-medium hover-lift"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
