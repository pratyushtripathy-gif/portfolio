import { useState } from "react";
import { motion } from "framer-motion";
import { Film, Palette, FileText, Play, ArrowUpRight, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import greenPulseLogo from "@/assets/logos/logo-split-0.png";
import finNestLogo from "@/assets/logos/logo-split-1.png";
import poster1 from "@/assets/videos/poster-1.jpg";
import poster2 from "@/assets/videos/poster-2.jpg";
import edit1 from "@/assets/videos/edit-1.mp4";
import edit2 from "@/assets/videos/edit-2.mp4";

type Video = {
  title: string;
  caption: string;
  poster: string;
  src?: string; // local mp4 or external link
};

const videos: Video[] = [
  {
    title: "Edit 01",
    caption: "Short-form cinematic edit — pacing & color grade",
    poster: poster1,
    src: edit1,
  },
  {
    title: "Edit 02",
    caption: "Motion-driven story edit — sound design & cuts",
    poster: poster2,
    src: edit2,
  },
];

type Logo = {
  name: string;
  caption: string;
  image: string;
};

const logos: Logo[] = [
  {
    name: "GreenPulse",
    caption: "Sustainability brand identity — leaf + pulse mark",
    image: greenPulseLogo,
  },
  {
    name: "FinNest",
    caption: "Fintech brand mark — nest + coin in navy & gold",
    image: finNestLogo,
  },
];

type Source = { label: string; url?: string };
type Writing = {
  id: string;
  title: string;
  tag: string;
  excerpt: string;
  question: string;
  sections: { heading: string; body: string[] }[];
  method: string[];
  sources: Source[];
};

const writings: Writing[] = [
  {
    id: "smart-farming",
    title: "Smart Farming: The Future of Sustainable Agriculture in India",
    tag: "Research Essay",
    excerpt:
      "How IoT, AI and drones can address water scarcity, soil decline and rising costs in Indian agriculture.",
    question:
      "How can modern technology improve agricultural productivity and sustainability in India?",
    sections: [
      {
        heading: "Introduction",
        body: [
          "Agriculture contributes significantly to India's economy and supports the livelihoods of millions of people. However, farmers face numerous challenges, including water scarcity, unpredictable weather conditions, declining soil quality, and rising production costs. As technology advances, smart farming has emerged as a promising solution to address these challenges and improve agricultural productivity.",
          "Smart farming refers to the use of modern technologies such as sensors, Internet of Things (IoT) devices, drones, artificial intelligence, and data analytics to optimize farming operations. By providing real-time information and automated systems, smart farming helps farmers make informed decisions and use resources more efficiently.",
        ],
      },
      {
        heading: "Main Findings",
        body: [
          "One of the most important applications of smart farming is precision irrigation. Traditional irrigation methods often result in excessive water usage. Soil moisture sensors can monitor water levels in real time and supply water only when necessary. According to the FAO, agriculture accounts for approximately 70% of global freshwater withdrawals, making efficient water management a critical priority.",
          "Another important technology is weather monitoring. Farmers can access forecasts regarding rainfall, temperature, humidity, and wind conditions, helping them plan planting and harvesting activities more effectively.",
          "Drones are also becoming increasingly popular in agriculture. They can survey large fields quickly, identify pest infestations, monitor crop health, and assist in fertilizer application.",
          "Artificial intelligence further enhances farming efficiency by analyzing large amounts of agricultural data — identifying crop diseases, predicting yield outcomes, and recommending practices based on local conditions.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Despite its advantages, smart farming faces obstacles in India. Many small-scale farmers cannot afford advanced technologies. Limited internet access and insufficient technical training also slow adoption rates in rural areas.",
          "Government initiatives and public-private partnerships can play a vital role in addressing these barriers by providing subsidies, infrastructure, and educational programs.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Smart farming has the potential to transform Indian agriculture by increasing productivity while reducing environmental impact. As technology becomes more affordable and accessible, farmers can benefit from data-driven decision-making and sustainable resource management practices.",
        ],
      },
    ],
    method: [
      "Reviewed international agricultural reports",
      "Compared traditional and smart farming techniques",
      "Studied IoT, AI and drone applications in agriculture",
      "Analyzed challenges faced by Indian farmers",
    ],
    sources: [
      { label: "Food and Agriculture Organization (FAO)", url: "https://www.fao.org" },
      { label: "World Bank Agriculture Reports", url: "https://www.worldbank.org" },
      { label: "Ministry of Agriculture & Farmers Welfare (India)", url: "https://agricoop.nic.in" },
      { label: "International Journal of Agricultural Sciences" },
      { label: "NITI Aayog Reports on Digital Agriculture" },
    ],
  },
  {
    id: "ai-education",
    title: "How Artificial Intelligence Is Reshaping Education",
    tag: "Research Essay",
    excerpt:
      "AI-powered tutors, adaptive learning and automation are making education more personalized and accessible.",
    question:
      "How is Artificial Intelligence improving learning outcomes and educational accessibility?",
    sections: [
      {
        heading: "Introduction",
        body: [
          "Artificial Intelligence (AI) is transforming education by making learning more personalized, efficient, and accessible. Educational institutions worldwide are increasingly integrating AI-powered tools into classrooms and online learning platforms.",
        ],
      },
      {
        heading: "Main Findings",
        body: [
          "AI systems can analyze student performance and identify learning gaps. Personalized learning platforms adjust lesson difficulty according to individual progress, allowing students to learn at their own pace.",
          "Virtual tutors powered by AI provide instant explanations and feedback. Unlike traditional tutoring, these systems are available at any time, making educational support more accessible.",
          "AI also assists teachers by automating administrative tasks such as grading objective assessments and tracking student performance. This allows educators to spend more time teaching and mentoring.",
          "Research from UNESCO suggests AI can improve educational accessibility, especially in remote and underserved communities. Language translation tools and adaptive learning systems help reduce barriers to education.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "AI adoption raises concerns regarding data privacy, misinformation, and excessive dependence on technology. Educational institutions must ensure ethical implementation and maintain human oversight.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "AI is not replacing teachers; instead, it serves as a powerful tool that supports both students and educators. The future of education will likely involve collaboration between human expertise and intelligent technology.",
        ],
      },
    ],
    method: [
      "Review of AI education studies",
      "Analysis of UNESCO reports",
      "Examination of adaptive learning platforms",
    ],
    sources: [
      { label: "UNESCO AI and Education Reports" },
      { label: "OECD Education Technology Reports" },
      { label: "World Economic Forum" },
      { label: "Google AI Education Research" },
      { label: "Microsoft Education Insights" },
    ],
  },
  {
    id: "financial-literacy",
    title: "Why Financial Literacy Should Be a Core School Subject",
    tag: "Opinion / Research",
    excerpt:
      "Why budgeting, saving and investing belong in the school curriculum — and what's holding it back.",
    question: "Why is financial literacy important for young people?",
    sections: [
      {
        heading: "Introduction",
        body: [
          "Financial literacy refers to the ability to understand and effectively manage personal finances. Despite its importance, financial education is often overlooked in the school curriculum.",
        ],
      },
      {
        heading: "Main Findings",
        body: [
          "Students who understand budgeting, saving, and investing are better prepared for adulthood. Financial literacy reduces the likelihood of poor financial decisions and debt-related problems.",
          "Research by the OECD indicates that financially literate individuals are more likely to save regularly and make informed investment decisions.",
          "Digital banking and online payment systems have made financial knowledge even more important. Young people are increasingly exposed to financial products and services at an earlier age.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Many schools lack qualified instructors and dedicated financial education programs. Curriculum constraints also limit implementation.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Teaching financial literacy in schools can equip students with practical life skills that contribute to long-term financial stability and independence.",
        ],
      },
    ],
    method: [
      "Analysis of personal finance education studies",
      "Review of OECD reports",
      "Examination of financial behavior trends among youth",
    ],
    sources: [
      { label: "OECD Financial Literacy Reports" },
      { label: "Reserve Bank of India (RBI)" },
      { label: "SEBI Investor Education Resources" },
      { label: "National Centre for Financial Education (NCFE)" },
      { label: "Investopedia Educational Resources" },
    ],
  },
  {
    id: "consistency",
    title: "The Role of Consistency in Achieving Long-Term Success",
    tag: "Behavioural Research",
    excerpt:
      "Why disciplined habits and small daily gains outperform bursts of motivation in the long run.",
    question: "Does consistency contribute more to success than motivation?",
    sections: [
      {
        heading: "Introduction",
        body: [
          "Success is often associated with talent and motivation. However, research suggests that consistency and disciplined habits play a more significant role in long-term achievement.",
        ],
      },
      {
        heading: "Main Findings",
        body: [
          "Psychological studies indicate that habits reduce reliance on motivation. Individuals who consistently perform small actions over time are more likely to achieve their goals.",
          "James Clear's research on habit formation highlights the concept of incremental improvement, where small daily gains compound into substantial long-term progress.",
          "Athletes, entrepreneurs, and high-performing students often succeed because of sustained effort rather than occasional bursts of motivation.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Maintaining consistency requires patience, discipline, and effective goal-setting. Many people abandon goals when immediate results are not visible.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Long-term success is rarely achieved through motivation alone. Consistent action, even in small amounts, creates momentum and produces meaningful results over time.",
        ],
      },
    ],
    method: [
      "Review of behavioral psychology research",
      "Analysis of habit formation studies",
      "Examination of performance improvement literature",
    ],
    sources: [
      { label: "American Psychological Association (APA)" },
      { label: "James Clear — Atomic Habits" },
      { label: "Harvard Business Review" },
      { label: "Stanford Behavioral Research" },
      { label: "Psychology Today" },
    ],
  },
  {
    id: "tesla",
    title: "Tesla: How Innovation Transformed the Electric Vehicle Industry",
    tag: "Business Case Study",
    excerpt:
      "Tesla's premium-to-mass strategy, vertical integration and software-first vehicles — and what entrepreneurs can learn.",
    question: "How did Tesla become a leader in the electric vehicle industry?",
    sections: [
      {
        heading: "Executive Summary",
        body: [
          "Tesla has become one of the most influential companies in the automotive industry by accelerating the global transition toward sustainable transportation. Founded in 2003, Tesla challenged the traditional automobile market by proving that electric vehicles (EVs) could be high-performing, technologically advanced, and commercially successful.",
        ],
      },
      {
        heading: "Background",
        body: [
          "For decades, electric vehicles were viewed as impractical due to limited range, high costs, and weak performance. Tesla entered the market with a different vision: to create electric vehicles that could outperform conventional cars while reducing environmental impact.",
          "The company launched its first vehicle, the Tesla Roadster, in 2008. Unlike previous EVs, it offered impressive acceleration and driving range, attracting significant public attention.",
        ],
      },
      {
        heading: "Business Strategy",
        body: [
          "Premium-to-mass market: Tesla began with high-end vehicles (Roadster → Model S → Model X → Model 3 → Model Y), generating higher margins to fund R&D and build a premium brand.",
          "Vertical integration: Tesla controls battery manufacturing, software development and charging infrastructure — providing greater control over quality and innovation.",
          "Software-centered vehicles: Tesla vehicles receive software updates similar to smartphones, adding features, improving performance and enhancing safety without buying a new car.",
        ],
      },
      {
        heading: "Challenges Faced",
        body: [
          "Production delays during Model 3 manufacturing, prolonged financial losses while investing in expansion, and growing competition from Ford, Volkswagen, BMW and BYD.",
        ],
      },
      {
        heading: "Key Lessons",
        body: [
          "Innovation creates competitive advantage. Long-term vision matters — many Tesla investments took years to pay off. Software and data can become major differentiators in manufacturing.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Tesla's success illustrates how innovation, persistence, and strategic execution can disrupt established industries. While challenges remain, Tesla's influence on transportation and clean energy is undeniable.",
        ],
      },
    ],
    method: [
      "Reviewed Tesla annual reports",
      "Analyzed automotive industry trends",
      "Examined EV adoption statistics",
      "Studied Tesla's product and business strategies",
    ],
    sources: [
      { label: "Tesla Investor Relations", url: "https://ir.tesla.com" },
      { label: "International Energy Agency (IEA)", url: "https://www.iea.org" },
      { label: "Harvard Business Review" },
      { label: "CNBC Business Reports" },
      { label: "Forbes Business Analysis" },
    ],
  },
  {
    id: "zerodha",
    title: "Zerodha: Disrupting India's Brokerage Industry",
    tag: "Startup Case Study",
    excerpt:
      "How a bootstrapped, technology-first brokerage with flat fees and free education reshaped retail investing in India.",
    question: "How did Zerodha become India's leading discount brokerage platform?",
    sections: [
      {
        heading: "Executive Summary",
        body: [
          "Zerodha transformed the Indian stock brokerage industry through a technology-first approach and low-cost pricing model. Founded in 2010 by Nithin and Nikhil Kamath, Zerodha became one of India's largest brokerage firms without relying on external venture capital funding.",
        ],
      },
      {
        heading: "Background & Problem",
        body: [
          "Before Zerodha, stock trading in India was expensive and complicated — high brokerage fees, complex platforms and limited accessibility discouraged retail investors.",
          "Traditional brokers typically charged percentage-based commissions, so frequent traders paid substantial fees and small investors found investing unattractive.",
        ],
      },
      {
        heading: "Zerodha's Solution",
        body: [
          "Flat-fee brokerage: transparent pricing, lower costs and greater accessibility.",
          "Kite — a modern trading platform with a clean UI, fast execution, mobile access and advanced charting.",
          "Varsity — a free learning platform covering stock markets, mutual funds, technical analysis and personal finance, building trust and attracting new investors.",
        ],
      },
      {
        heading: "Competitive Advantages",
        body: [
          "Cost leadership, intuitive user experience, brand trust through education, and bootstrapped growth without venture capital.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Trading activity fluctuates with market conditions, new fintech startups continue entering the market, and the financial sector remains heavily regulated.",
        ],
      },
      {
        heading: "Key Lessons",
        body: [
          "Simplicity wins. Education builds trust and becomes a competitive moat. Profitability can be achieved without excessive funding.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Zerodha's success shows how innovation, affordability, and customer education can transform a traditional industry — a powerful example of entrepreneurship and strategic execution in India's fintech sector.",
        ],
      },
    ],
    method: [
      "Studied Zerodha's business model",
      "Compared brokerage pricing structures",
      "Reviewed fintech industry trends",
      "Examined investor adoption patterns",
    ],
    sources: [
      { label: "Zerodha Varsity", url: "https://zerodha.com/varsity" },
      { label: "NSE India Reports", url: "https://www.nseindia.com" },
      { label: "Moneycontrol" },
      { label: "Economic Times" },
      { label: "SEBI Publications" },
    ],
  },
];

export function WorkSamples() {
  const [openVideo, setOpenVideo] = useState<Video | null>(null);
  const [openLogo, setOpenLogo] = useState<Logo | null>(null);
  const [openWriting, setOpenWriting] = useState<Writing | null>(null);

  return (
    <Section
      id="work-samples"
      eyebrow="Work Samples"
      title="Edits, identities and essays."
      subtitle="A cross-section of recent creative and research work — video edits, brand marks and long-form writing."
    >
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="glass-strong h-auto p-1.5 rounded-full mb-8 bg-transparent">
          <TabsTrigger
            value="videos"
            className="rounded-full gap-2 px-4 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
          >
            <Film className="h-4 w-4" />
            <span>Video Edits</span>
          </TabsTrigger>
          <TabsTrigger
            value="logos"
            className="rounded-full gap-2 px-4 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
          >
            <Palette className="h-4 w-4" />
            <span>Logo Designs</span>
          </TabsTrigger>
          <TabsTrigger
            value="writing"
            className="rounded-full gap-2 px-4 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
          >
            <FileText className="h-4 w-4" />
            <span>Writing &amp; Research</span>
          </TabsTrigger>
        </TabsList>

        {/* Videos */}
        <TabsContent value="videos" className="mt-0">
          <div className="grid sm:grid-cols-2 gap-5">
            {videos.map((v, i) => (
              <motion.button
                key={v.title}
                type="button"
                onClick={() => setOpenVideo(v)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass rounded-3xl overflow-hidden text-left hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={v.poster}
                    alt={`Poster for ${v.title}`}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-16 w-16 rounded-full bg-foreground/90 grid place-items-center backdrop-blur transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 text-background fill-background ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{v.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </TabsContent>

        {/* Logos */}
        <TabsContent value="logos" className="mt-0">
          <div className="grid sm:grid-cols-2 gap-5">
            {logos.map((l, i) => (
              <motion.button
                key={l.name}
                type="button"
                onClick={() => setOpenLogo(l)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass rounded-3xl overflow-hidden text-left hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="aspect-square overflow-hidden bg-white/95">
                  <img
                    src={l.image}
                    alt={`${l.name} logo design`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{l.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{l.caption}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground mt-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.button>
            ))}
          </div>
        </TabsContent>

        {/* Writing */}
        <TabsContent value="writing" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {writings.map((w, i) => (
              <motion.article
                key={w.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group glass rounded-3xl p-6 hover-lift flex flex-col"
              >
                <span className="inline-flex w-fit rounded-full bg-accent/15 text-accent px-2.5 py-1 text-[11px] font-medium">
                  {w.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{w.excerpt}</p>
                <button
                  type="button"
                  onClick={() => setOpenWriting(w)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Read sample <ArrowUpRight className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Video dialog */}
      <Dialog open={!!openVideo} onOpenChange={(o) => !o && setOpenVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
          <DialogTitle className="sr-only">{openVideo?.title}</DialogTitle>
          <DialogDescription className="sr-only">{openVideo?.caption}</DialogDescription>
          {openVideo && (
            <div className="aspect-video bg-black">
              {openVideo.src ? (
                <video
                  src={openVideo.src}
                  poster={openVideo.poster}
                  controls
                  autoPlay
                  className="h-full w-full"
                />
              ) : (
                <div className="relative h-full w-full">
                  <img
                    src={openVideo.poster}
                    alt={openVideo.title}
                    className="h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 grid place-items-center text-center p-6">
                    <div>
                      <p className="text-foreground font-medium">{openVideo.title}</p>
                      <p className="text-sm text-muted-foreground mt-2 max-w-md">
                        Video file not yet uploaded — drop the .mp4 into{" "}
                        <code>src/assets/videos/</code> and it will play here.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Logo dialog */}
      <Dialog open={!!openLogo} onOpenChange={(o) => !o && setOpenLogo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border-border">
          <DialogTitle className="sr-only">{openLogo?.name}</DialogTitle>
          <DialogDescription className="sr-only">{openLogo?.caption}</DialogDescription>
          {openLogo && (
            <div className="flex flex-col">
              <div className="bg-white/95 aspect-square sm:aspect-[4/3]">
                <img
                  src={openLogo.image}
                  alt={`${openLogo.name} logo design`}
                  className="h-full w-full object-contain p-8"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{openLogo.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{openLogo.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Writing dialog */}
      <Dialog open={!!openWriting} onOpenChange={(o) => !o && setOpenWriting(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background border-border">
          {openWriting && (
            <article className="pr-2">
              <span className="inline-flex w-fit rounded-full bg-accent/15 text-accent px-2.5 py-1 text-[11px] font-medium">
                {openWriting.tag}
              </span>
              <DialogTitle className="mt-3 text-2xl md:text-3xl font-semibold leading-tight">
                {openWriting.title}
              </DialogTitle>
              <DialogDescription className="sr-only">{openWriting.excerpt}</DialogDescription>

              <div className="mt-6 space-y-6">
                {openWriting.sections.map((s) => (
                  <section key={s.heading}>
                    <h4 className="text-xs uppercase tracking-[0.18em] text-primary mb-3">
                      {s.heading}
                    </h4>
                    <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {s.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </section>
                ))}

                <section className="glass rounded-2xl p-5">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-primary mb-3">
                    Research Question
                  </h4>
                  <p className="italic text-foreground">{openWriting.question}</p>

                  <h4 className="text-xs uppercase tracking-[0.18em] text-primary mt-5 mb-3">
                    Method
                  </h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {openWriting.method.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs uppercase tracking-[0.18em] text-primary mt-5 mb-3">
                    Sources Consulted
                  </h4>
                  <ul className="space-y-1.5 text-sm">
                    {openWriting.sources.map((src) => (
                      <li key={src.label}>
                        {src.url ? (
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-primary hover:underline"
                          >
                            {src.label} <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{src.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
