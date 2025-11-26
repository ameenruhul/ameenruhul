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
          Projects Carousel (Embla)
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
                  I’ve spent years building practical systems for agriculture,
                  education, mobility and field operations.{" "}
                  <br />
                  Here are some of the things I built with my own hands.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="max-w-[900px] mx-auto">
              <EmblaCarousel
                options={EMBLA_OPTIONS}
                slides={DATA.buildProjects.map((proj) => (
                  <div key={proj.title} className="px-2">
                    <Link
                      href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl overflow-hidden border group hover:shadow-xl transition bg-background block"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold">{proj.title}</h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                          {proj.description}
                        </p>
                        <p className="mt-2 text-xs text-zinc-500">
                          {proj.dates}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* =========================
          Case Studies Carousel (Embla) – flatter cards
      ========================== */}
      <section id="case-studies" className="w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <h2 className="text-xl font-bold text-center mb-6">Case Studies</h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="max-w-[900px] mx-auto">
            <EmblaCarousel
              options={EMBLA_OPTIONS}
              slides={DATA.caseStudies.map((study) => (
                <div key={study.title} className="px-2">
                  <div className="group relative h-full">
                    {/* Glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/15 via-emerald-400/10 to-rose-500/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                    <Link
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex h-full flex-col sm:flex-row items-start gap-4 rounded-3xl border border-zinc-200/70 bg-white/80 p-4 sm:p-5 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800/70 dark:bg-zinc-900/80"

                    >
                      {/* Thumbnail – shorter & fixed height */}
                      <div className="flex-shrink-0 overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-100 shadow-sm dark:border-zinc-700/70 dark:bg-zinc-800/80 w-full sm:w-40 md:w-48">
                        <div className="h-28 sm:h-32 md:h-36">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Text content – more room */}
                      <div className="flex flex-1 flex-col justify-center min-h-[110px]">
                        <h3 className="text-base md:text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                          {study.title}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                          {study.brief}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            />
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
