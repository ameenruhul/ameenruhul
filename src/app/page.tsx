import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

import EmblaCarousel from "@/components/EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const BLUR_FADE_DELAY = 0.04;
const EMBLA_OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
    Projects Carousel (Embla) – stacked preview style
========================== */}
<section id="my-build-projects">
  <div className="space-y-12 w-full py-12">
    <BlurFade delay={BLUR_FADE_DELAY * 13}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            I Like Building Things
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Hands-On Hardware & IoT Projects
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            I’ve spent years building practical systems for agriculture, education,
            mobility and field operations.{" "}
            <br />
            Here are some of the things I built with my own hands.
          </p>
        </div>
      </div>
    </BlurFade>

    <BlurFade delay={BLUR_FADE_DELAY * 14}>
      <div className="max-w-[980px] mx-auto px-4">
        {/* This wrapper creates the stacked preview feel */}
        <div className="relative">
          {/* fake “stack” cards behind the carousel */}
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div className="relative w-full">
              <div className="absolute left-1/2 top-3 h-[520px] w-[92%] -translate-x-1/2 rounded-3xl border border-zinc-200 bg-white/60 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40" />
              <div className="absolute left-1/2 top-6 h-[520px] w-[86%] -translate-x-1/2 rounded-3xl border border-zinc-200 bg-white/40 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/25" />
            </div>
          </div>

          <EmblaCarousel
            options={{
              ...EMBLA_OPTIONS,
              // keep peeking next/prev
              align: "center",
              containScroll: "trimSnaps",
            }}
            slides={DATA.buildProjects.map((proj) => (
              // This width makes neighbors peek while keeping the active card centered
              <div
                key={proj.title}
                className="px-3 md:px-4"
                style={{ flex: "0 0 88%" }}
              >
                <Link
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
                >
                  {/* Media: fixed height to avoid broken crops */}
                  <div className="relative h-[360px] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* subtle top/bottom fades like modern cards */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/10 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {proj.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {proj.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="text-xs text-zinc-500">{proj.dates}</span>

                      <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                        Check it out
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M10 7h7v7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          />
        </div>
      </div>
    </BlurFade>
  </div>
</section>


            {/* =========================
          Chapters Grid – Google-style cards
      ========================== */}
      <section id="case-studies" className="w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Research and technology
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-600 dark:text-zinc-300">
              Chapters of my journey — projects, communities, and milestones.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="mx-auto mt-10 max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {DATA.caseStudies.map((study) => (
                <Link
                  key={study.title}
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-900">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between gap-3 px-5 py-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-medium leading-snug text-zinc-900 dark:text-zinc-50">
                        {study.title}
                      </h3>
                      {study.dates ? (
                        <p className="mt-1 truncate text-sm text-zinc-500 dark:text-zinc-400">
                          {study.dates}
                        </p>
                      ) : null}
                    </div>

                    {/* External link icon */}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition group-hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:group-hover:bg-zinc-900">
                      {/* Lucide "ArrowUpRight" icon (inline svg so no import needed) */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M10 7h7v7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>


      
      {/* Achievements Section */}
      <section id="achievements">
        <div className="flex flex-col gap-y-4 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <h2 className="text-xl font-bold text-center">Achievements</h2>
          </BlurFade>
          <ul className="max-w-2xl mx-auto space-y-3 list-disc list-inside text-sm text-zinc-700">
            {DATA.achievements?.map((ach, idx) => (
              <BlurFade
                key={ach.title + idx}
                delay={BLUR_FADE_DELAY * (20 + idx * 0.04)}
              >
                <li>
                  <strong>{ach.title}</strong> – {ach.year}{" "}
                  {ach.issuer && `| ${ach.issuer}`}
                  {ach.description && ` | ${ach.description}`}
                </li>
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>

              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                You can reach me anytime through email or WhatsApp.  
                I’m usually quick to respond unless I’m deep into a research
                sprint.
              </p>

              <div className="space-y-2 mt-6 text-muted-foreground text-lg">
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:ameen@marshall.edu"
                    className="text-blue-500 hover:underline"
                  >
                    ameen@marshall.edu
                  </a>
                </p>

                <p>
                  💬 WhatsApp (USA):{" "}
                  <a
                    href="https://wa.me/13048406562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    +1 (304) 840-6562
                  </a>
                </p>

                <p>
                  📞 Call (Bangladesh):{" "}
                  <a
                    href="tel:+8801312300804"
                    className="text-blue-500 hover:underline"
                  >
                    +880 1312-300804
                  </a>
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
