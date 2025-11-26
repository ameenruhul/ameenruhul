import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Study 04: Tinkers Technologies Ltd – EdTech & Playful Learning",
  description:
    "How three engineering students from Rajshahi turned a question about education into Tinkers Technologies Ltd, an EdTech company building playful, culturally rooted learning for children worldwide.",
};

const IMAGES = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczO6g2HKZFncFqP1x-_i6qWY5tDDoKueU6_3jwd9_KB4R3GBgpuTpIAaYaANeb-T-FHx774VY-NOXlrL07CtqbatP6QD4wqLJF3_yp4ttD5HBmmjYfd5dXjG41Ib5skTu_mBp1ze8D17hlD8mLh-luw05w=w1844-h1288-s-no-gm?authuser=0",
  founders:
    "https://lh3.googleusercontent.com/pw/AP1GczMGirq7O0XgKQXYiux3eadtjf407jUxmITVWPQl-YxpOs15UI21jy74dQaZ-2FvqZw_YDRkuA5ART0FXRXNbQ1kXOEta6yTX_zoEWL65TuamaHblSHnwZ0vG5a1ELoEnACUamSWdilWvroCW-j4y3Ne0w=w2290-h1288-s-no-gm?authuser=0",
  team:
    "https://lh3.googleusercontent.com/pw/AP1GczPAxjqtD34CXRfiBO4wuLJQCYa6SEk47vgSheh2PQai9TzgbuhahvNednyZuUJyuNutSnMfWGhVwDVtQ7wD2uCQczWsINozntanyz_EYHiwlLFE15yoNrEPFZVrzCGzH5P1r4i9bUKHEHX0zU4_LL1LWg=w960-h720-s-no-gm?authuser=0",
  classSession:
    "https://lh3.googleusercontent.com/pw/AP1GczNsIyqloZNEHSbLerjS8At22wHpBaEF4W9s5Nj3DpFvsp1XLgVBM7pfJA5ezClHWx6Et1qCFXCB7ySGwGt9ZsKUNzyryCA7kqTheTafoexAv-fTsIcdaxxPXcBYnPqOVEdww01dF_eincgZrUn6om02uA=w966-h1288-s-no-gm?authuser=0",
};

export default function CaseStudy04Page() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Case Study 04
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Chapter 4: Tinkers Technologies Ltd – EdTech & Playful Learning
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Author: Mohd. Ruhul Ameen</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Date: (To be updated)</span>
          </div>

          {/* Header Image */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.header}
                alt="Tinkers Technologies classroom and playful learning environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Intro */}
        <section>
          <p>
            “Is it possible to change a generation by tinkering with the education system?”
          </p>

          <p>
            This was the question that kept three engineering students from the
            University of Rajshahi awake at night. We saw a country full of
            complaints—complaints about the system, the traffic, and the lack of
            opportunity. But instead of planning our escape abroad like many others, we
            decided to stay. We decided to build.
          </p>

          <p>
            Armed with our CSE degrees and a dream to ensure every child possesses a
            beautiful mind, Tinkers Technologies Ltd. was born.
          </p>

          {/* Founders Photo */}
          <div className="not-prose my-6 space-y-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.founders}
                alt="Founders of Tinkers Technologies Ltd."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-zinc-500">
              The early days of Tinkers Technologies Ltd — three engineering students
              from Rajshahi deciding to build instead of leave.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section>
          <h2>The Problem: A Generation Losing Its Roots</h2>

          <p>
            We identified a silent crisis. While the world raced toward the Fourth
            Industrial Revolution, our children were falling behind—not just in skills,
            but in identity.
          </p>

          <p>
            Meet Mrinmoyee (Dhaka): She studies in a top English-medium school. She
            aces Science and Math but is terrified of Bangla. She refuses to speak her
            mother tongue because the textbooks are dull and the pedagogy is outdated.
          </p>

          <p>
            Meet Aymaan (Austin, USA): Thousands of miles away, Aymaan is brilliant and
            curious. His parents want him to know his roots, but he has no friends to
            speak Bangla with and no interactive resources to learn from.
          </p>

          <p>
            We realized that nearly 2 million Bangladeshi children living abroad and
            hundreds of thousands of English-medium students at home are disconnected
            from their language. They are afraid of the very language for which our
            ancestors shed blood.
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2>The Solution: AmarVasha &amp; The Power of Play</h2>

          <p>
            On January 14th, 2020, Tinkers began its journey by winning the BYLC
            Ventures Youth Entrepreneurship Competition. With seed funding and a vision
            to make education "fun," we launched our flagship product: AmarVasha.
          </p>

          <p>
            We didn't just want to be a tutoring service; we wanted to be a cultural
            bridge.
          </p>

          <p>
            Drawing inspiration from the remote classrooms I observed in Japan (Chapter
            3), we built a platform that connects diaspora children with expert teachers
            in Bangladesh. But we knew that to teach a child, you cannot bore them.
          </p>

          {/* Class / Session Photo */}
          <div className="not-prose my-6 space-y-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.classSession}
                alt="AmarVasha online Bangla class with children learning playfully"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-zinc-500">
              A glimpse into an AmarVasha class — playful, connected, and rooted in
              Bangla.
            </p>
          </div>

          <p>
            Gamified Curriculum: We replaced rote memorization with interactive games,
            stories, and songs.
          </p>

          <p>
            Personalization: Every child is unique. Our curriculum team constantly
            reshapes lessons to fit the learner, not the other way around.
          </p>

          <p>
            STEM &amp; Beyond: While we started with language, our vision expanded to
            RoboKids and QuizHero, integrating STEM tools to create a holistic,
            play-based learning environment.
          </p>

          <p>
            You can learn more about AmarVasha here:{" "}
            <a
              href="https://amarvasha.tinkers.ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://amarvasha.tinkers.ltd/
            </a>
            .
          </p>
        </section>

        {/* Culture */}
        <section>
          <h2>The Culture: "Live Anywhere, Work at Tinkers"</h2>

          <p>
            Tinkers isn't just an EdTech product; it is a social experiment in modern
            work culture. We built a company that is 100% remote.
          </p>

          <p>
            Empowerment: We have a team of ~55 employees working from different corners
            of Bangladesh.
          </p>

          <p>
            Inclusivity: Approximately 90% of our workforce is female. We proved that
            talented women don't need to move to Dhaka or leave their families to build
            a world-class tech startup.
          </p>

          {/* Team Photo */}
          <div className="not-prose my-6 space-y-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.team}
                alt="Remote-first Tinkers Technologies Ltd team"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-zinc-500">
              The Tinkers team — a remote-first, women-led, impact-focused workforce.
            </p>
          </div>

          <p>
            We established a rigorous Quality Assurance team that analyzes every single
            class to ensure that the magic of teaching is never lost.
          </p>
        </section>

        {/* Impact */}
        <section>
          <h2>The Impact: More Than Just Language</h2>

          <p>
            In just a few years, the impact has been profound. We have served hundreds
            of students across the USA, UK, Canada, Singapore, and beyond.
          </p>

          <p>
            Our work was featured in Prothom Alo, highlighting how we are saving the
            Bengali language for the next generation. As Raya Rahman, a parent from
            Oakland, California, beautifully put it:
          </p>

          <p>
            “Tinkers hasn’t just taught my girls Bangla; Tinkers has introduced them to
            their roots, taught them to be Bangalees.”
          </p>

          <p>
            Read the Prothom Alo feature here:{" "}
            <a
              href="https://www.prothomalo.com/lifestyle/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%80-%E0%A6%B6%E0%A6%BF%E0%A6%B6%E0%A7%81%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-%E0%A6%B6%E0%A7%87%E0%A6%96%E0%A6%BE%E0%A7%9F-%E0%A6%9F%E0%A6%BF%E0%A6%82%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prothom Alo – প্রবাসী শিশুদের বাংলা শেখায় টিংকার্স ↗
            </a>
          </p>
        </section>

        {/* Future */}
        <section>
          <h2>The Future: A Universe of Learning</h2>

          <p>
            What started as a university project is now a registered company backed by
            mPower Social Enterprise and the Bangabandhu Innovation Grant. But we are
            just getting started.
          </p>

          <p>
            Our dream is to create a universe of products—AR/VR storytelling, mobile
            apps, and robotic kits—so that any child, anywhere, can learn with joy. We
            believe that today’s child is tomorrow’s citizen. By ensuring a beautiful,
            fun, and rooted childhood, we are paving the way for a beautiful future for
            Bangladesh.
          </p>
        </section>
      </article>
    </main>
  );
}
