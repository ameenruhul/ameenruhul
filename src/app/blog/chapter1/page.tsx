// app/blog/chapter1/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

// Remote Google Photos images
const GPHOTOS = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczNqCDLXxLemOUOFgXXqIeQrvu1ImAP7OVQLj1TG42dMyrEgeBeM0mFZBrD6Ue8Fjo3EmnWvSLrz3P9hw0l7nNnwki5CdKmcVKIcCM_wunpUnX1c5Zump3gs7IQZGj9Ug14UStlMVsrXLAqNWZaHCb_OsA=w1932-h1288-s-no-gm?authuser=0",
  img1:
    "https://lh3.googleusercontent.com/pw/AP1GczOw_vlqRYwFLlx_QfNpY-I9-qRJ0kn29G5VsYpQYfSq-CjhzCN_rwO9xgW_44gMJh4_n5XQduQkh0Jm6n9Fy8Z17e_wFDUR7-gjsaw5njLjdqnHfdpVK1j6wQ1hdEmGcispa681fyiOv-Xqe40sAhiePA=w2290-h1288-s-no-gm?authuser=0",
  img2:
    "https://lh3.googleusercontent.com/pw/AP1GczO6LRmwyg8EzlTwjNhGSK890pNlRcLumTyuCzf6PMqm99VaWzUFF-9a1wylvR-kxZXh9dUhblloGKo3yaY4omPy984SIdulCLEcy5t8PGxxRPvcrqan7X7SAAvhe5hIY7ajIgaKPsJC-t9dAJ1R4UUVAg=w1932-h1288-s-no-gm?authuser=0",
  img3:
    "https://lh3.googleusercontent.com/pw/AP1GczP4D61IB7rZaD2EY1NFpviZoGa-V3k7maufU3GPklRtLSmqpU5XCppYtP7BqtGa0OPLsK0sZvdrAeQXj5dIfk1B2wJ9IyJ6PklkCyl0n_98DSaG_a_-eYUuUOgs8kNQdvac8woiQmTneidolqXc13pkNA=w1932-h1288-s-no-gm?authuser=0",
};

// Simple YouTube embed component
function YouTubeEmbed({ videoId, title }: { videoId: string; title?: string }) {
  return (
    <div className="not-prose my-10">
      <div className="aspect-video w-full overflow-hidden rounded-xl border">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title ?? "YouTube video player"}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      {title && (
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          {title}
        </p>
      )}
    </div>
  );
}

export const metadata: Metadata = {
  title:
    "Case Study 01: Arduino Community Bangladesh – From Blinking LEDs to Building an EdTech Ecosystem",
  description:
    "How a small undergraduate initiative at the University of Rajshahi grew into Arduino Community Bangladesh, two Bengali books, and the foundation for Tinkers Technologies Ltd.",
};

export default function CaseStudy01Page() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Case Study 01
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Arduino Community Bangladesh – From Blinking LEDs to Building an
            EdTech Ecosystem
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Author: Mohd. Ruhul Ameen</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Date: November 21, 2025</span>
          </div>

          {/* Header image from Google Photos */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <Image
                src={GPHOTOS.header}
                alt="Arduino Community Bangladesh founders and early activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section aria-labelledby="executive-summary">
          <h2 id="executive-summary">Executive Summary</h2>
          <p>
            What starts as a small student curiosity often ends up shaping an
            entire career. This is the story of Arduino Community Bangladesh
            (ACB)—a grassroots initiative started in 2016 by two undergraduates
            at the University of Rajshahi that evolved into a published legacy
            and laid the foundation for Tinkers Technologies Ltd.
          </p>
          <p>
            From the first blinking LED in a campus robotics lab to organizing
            Arduino Day for the entire country, writing Bengali-language books,
            and eventually building an EdTech startup, ACB became a sandbox for
            learning by doing. This case study traces that journey across five
            phases: genesis, challenge, execution, scale, and evolution.
          </p>
        </section>

        {/* Section 1 */}
        <section aria-labelledby="genesis">
          <h2 id="genesis">
            1. The Genesis:{" "}
            <span className="italic">“Arduino! The word felt like magic.”</span>
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Timeline: 2015–2016 • Location: Department of CSE, University of
            Rajshahi
          </p>

          {/* Section 1 image */}
          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border">
              <Image
                src={GPHOTOS.img1}
                alt="Early days experimenting with Arduino at the RU CSE Robotics Lab"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Early experiments inside the Robotics Lab that ignited the
              journey.
            </p>
          </div>

          <p>
            Back in 2015, the word <strong>“Arduino”</strong> felt a bit clumsy
            on our tongues, yet it carried a strange magnetic pull. Munem
            Shahriar and I were fresh undergraduates in Computer Science &
            Engineering at the University of Rajshahi, experiencing a familiar
            pattern in Bangladesh: students enter CSE under social or parental
            pressure, only to be hit by a wave of frustration and impostor
            syndrome when the abstractions of programming don’t “click.”
          </p>

          <p>
            We were no different. We weren’t prodigy coders. We were just two
            confused students trying to find joy in syntax and logic that felt
            disconnected from our everyday reality.
          </p>

          <p>
            The turning point came when we met our seniors from the 2012–13
            session—Sohel bhai and his team—inside the Robotics Lab. They handed
            us an Arduino board.
          </p>

          <p>
            For the first time, code wasn’t just text on a black terminal. It
            was action.
          </p>

          <ul>
            <li>We wrote a few lines of C++.</li>
            <li>A light blinked.</li>
            <li>A motor spun.</li>
          </ul>

          <p>
            That tiny LED blink did something our entire first year of
            coursework hadn’t: it connected <strong>logic</strong> to{" "}
            <strong>reality</strong>. We realized that while C programming feels
            abstract on its own, Arduino makes it <em>tangible</em>. If we had
            been exposed to this in school, our learning curve—and perhaps our
            confidence—would have looked very different.
          </p>
        </section>

        {/* Section 2 */}
        <section aria-labelledby="challenge">
          <h2 id="challenge">2. The Challenge: Breaking the Silos</h2>

          <p>
            As we spent more time in the Robotics Lab, a pattern emerged. There
            were brilliant hobbyists and tinkerers everywhere—at Rajshahi
            University, RUET, Varendra University, BAUET, and beyond. But
            everyone was working in isolation. Each campus had its own pockets
            of enthusiasm, but no shared platform, no cross-pollination, no
            community of practice.
          </p>

          <p>
            We asked ourselves a simple question that changed everything:
            <br />
            <span className="italic">
              What if we brought everyone under one umbrella?
            </span>
          </p>

          <p>
            That question became the seed of{" "}
            <strong>Arduino Community Bangladesh (ACB)</strong>—not as a
            formal, registered entity at first, but as a shared identity for
            people who believed in learning electronics and programming through
            hands-on making.
          </p>
        </section>

        {/* Section 3 */}
        <section aria-labelledby="arduino-day">
          <h2 id="arduino-day">3. The Execution: Arduino Day 2017</h2>

          <h3 className="mt-4 text-lg font-semibold">The Risk</h3>
          <p>
            In 2017, we were just second-year undergraduates—no formal event
            management experience, no sponsorship network, and no “brand” behind
            us. On the official Arduino website, we noticed something
            interesting:{" "}
            <strong>“Arduino Day” was being celebrated at 500+ venues</strong>{" "}
            worldwide, but Bangladesh had <strong>zero</strong>.
          </p>

          <p>
            That empty map felt like a challenge and an opportunity at the same
            time.
          </p>

          <h3 className="mt-4 text-lg font-semibold">The Action</h3>
          <p>
            With the audacity that only undergraduates seem to have, we applied
            to Arduino Headquarters to host an official Arduino Day event in
            Bangladesh. We expected to be ignored.
          </p>
          <p>They approved it.</p>

          <p>
            What followed was a crash course in entrepreneurship and community
            organizing. With almost no budget, our “office” became the corridors
            of the CSE Department at Rajshahi University. We designed posters,
            begged for permission, rearranged class schedules, borrowed
            equipment, and sent invitations across campuses.
          </p>

          <h3 className="mt-4 text-lg font-semibold">The Outcome</h3>
          <p>
            Arduino Day 2017 turned the department corridors into a makerspace
            festival. Students from RUET, Varendra University, BAUET, and other
            institutions showed up with their own projects, curiosity, and
            stories.
          </p>

          {/* Arduino Day image */}
          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border">
              <Image
                src={GPHOTOS.img2}
                alt="Arduino Day 2017 corridor setup and participants"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* YouTube videos */}
          <YouTubeEmbed
            videoId="woI_iMMIra4"
            title="Arduino Community Bangladesh – Event Video"
          />
          <YouTubeEmbed
            videoId="3qISlo5xTOQ"
            title="Arduino Day 2017 Bangladesh – Highlights"
          />

          <p>
            For us, it was a powerful lesson: when you take a{" "}
            <strong>genuine initiative</strong>, your community—and sometimes
            the universe—conspires to help you. What started as “two little
            kids” from 2nd year trying to host a global event became a national
            signal: Bangladesh had joined the Arduino map.
          </p>
        </section>

        {/* Section 4 */}
        <section aria-labelledby="books">
          <h2 id="books">4. Scaling Impact: Writing in Our Own Language</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Timeline: 2017–2018
          </p>

          {/* Books / workshop image */}
          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border">
              <Image
                src={GPHOTOS.img3}
                alt="Books, workshops, and outreach from Arduino Community Bangladesh"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p>
            Organizing events exposed another gap in the ecosystem:{" "}
            <strong>the lack of high-quality Bengali learning materials</strong>
            . Students were excited during workshops but often got stuck when
            they tried to continue at home. Most documentation, tutorials, and
            example projects were in English, creating yet another barrier on
            top of technical difficulty.
          </p>

          <p>
            Sitting in the lab one day, we asked:{" "}
            <span className="italic">
              What if we wrote the book we wish we had?
            </span>
          </p>

          <h3 className="mt-4 text-lg font-semibold">
            Book 1: “Arduino te Hatekhori”
          </h3>
          <p>
            During the Ramadan vacation of 2017, Munem and I locked ourselves
            into a writing routine. The goal was simple: create a{" "}
            <strong>beginner-friendly Arduino book in Bengali</strong> that
            doesn’t just dump code, but tells a story and builds confidence.
            That manuscript became{" "}
            <strong>“Arduino te Hatekhori” (Introduction to Arduino)</strong>.
          </p>

          <p>
            We were unknown undergraduates, so getting it published felt like a
            fantasy. This is where mentorship changed everything. We connected
            with <strong>Munir Hasan sir</strong> from BdOSN. He read the
            manuscript, believed in it, and championed it.
          </p>

          <p>
            Thanks to his support,{" "}
            <strong>
              “Arduino te Hatekhori” was published by Adarsha at the Ekushey
              Boi Mela 2018
            </strong>
            . Seeing students, school kids, and teachers pick up a book we wrote
            was surreal.
          </p>

          <h3 className="mt-4 text-lg font-semibold">
            Book 2: “Hoye Otho Ekjon Problem Solver”
          </h3>
          <p>
            The response to the first book made one thing clear: the community
            was hungry, not just for tools, but for{" "}
            <strong>problem-solving mindsets</strong>. Over the next eight
            months, we worked on a second book:
            <strong>
              {" "}
              “Hoye Otho Ekjon Problem Solver” (Become a Problem Solver)
            </strong>
            .
          </p>

          <p>
            This book went beyond simple circuits. It focused on{" "}
            <strong>IoT, systems thinking, and advanced problem-solving</strong>
            —helping readers move from “following tutorials” to{" "}
            <em>designing their own solutions</em>. In many ways, this was our
            first attempt at scalable pedagogy: taking what we learned from
            workshops and turning it into a reusable, self-paced learning
            experience.
          </p>
        </section>

        {/* Section 5 */}
        <section aria-labelledby="evolution">
          <h2 id="evolution">
            5. The Evolution: From Community to Industry (2019 – Present)
          </h2>

          <p>
            Communities often fade when their founders graduate. Arduino
            Community Bangladesh didn’t disappear—it <em>evolved</em>.
          </p>

          <h3 className="mt-4 text-lg font-semibold">
            From ACB to Tinkers Technologies Ltd.
          </h3>
          <p>
            The spirit of ACB—the belief that{" "}
            <strong>hands-on making can change how people learn</strong>—slowly
            matured into a more formal structure. That structure became{" "}
            <strong>Tinkers Technologies Ltd.</strong>
          </p>

          <p>
            As a co-founder of Tinkers Technologies, I now work with a team
            building products like <strong>AmarVasha</strong>, aiming to make
            education accessible, localized, and playful. The DNA is the same as
            our early Arduino days: use technology as a{" "}
            <em>human-centered tool</em>, not an end in itself.
          </p>

          <h3 className="mt-4 text-lg font-semibold">
            Academic Growth: From LED to HCI
          </h3>
          <p>
            That first blinking LED did more than spark a hobby; it quietly
            redirected my academic trajectory. The questions that began with
            “How do we teach Arduino better?” expanded into:
          </p>

          <ul>
            <li>How do people learn complex technical concepts?</li>
            <li>
              How can interfaces support curiosity instead of punishing
              mistakes?
            </li>
            <li>
              How can local language and culture be embedded in learning tools?
            </li>
          </ul>

          <p>
            Today, I am pursuing my PhD in Engineering at Marshall University,
            USA, focusing on <strong>Human–Computer Interaction (HCI)</strong>.
            The same themes from ACB—access, agency, and learning through
            making—now show up in my research on human-centered AI, tools for
            thought, and educational interfaces.
          </p>
        </section>

        {/* Conclusion */}
        <section aria-labelledby="conclusion">
          <h2 id="conclusion">Conclusion</h2>

          <p>
            Looking back from 2025,{" "}
            <strong>Arduino Community Bangladesh</strong> was far more than a
            student club. It was our sandbox—a place where we were allowed to be
            beginners, to break things, to burn components, to run bad events
            before we ran good ones, and to slowly discover who we were as
            engineers and educators.
          </p>

          <p>
            The most important lesson wasn’t about hardware or code. It was
            this:
          </p>

          <blockquote>
            You don’t need to be an expert to start. You just need to be
            genuinely curious—and willing to do the work in public.
          </blockquote>

          <p>
            To the students reading this today: <strong>start small</strong>.
          </p>

          <ul>
            <li>Write that first “Hello, World!” for a microcontroller.</li>
            <li>Burn a few components while experimenting.</li>
            <li>Organize that tiny meetup in your department corridor.</li>
          </ul>

          <p>
            You have no idea how these tiny actions will compound. One day, you
            might look back and realize that a simple blinking LED was the first
            domino in a chain that led to books, startups, research, and a
            lifetime of impact.
          </p>
        </section>

        {/* References */}
        <section aria-labelledby="references">
          <h2 id="references">References &amp; Media</h2>
          <ul>
            <li>
              <strong>Prothom Alo Feature:</strong>{" "}
              <a
                href="https://www.prothomalo.com/lifestyle/%E0%A6%86%E0%A6%B0%E0%A6%A1%E0%A7%81%E0%A6%87%E0%A6%A8%E0%A7%8B-%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%86%E0%A7%9F%E0%A7%8B%E0%A6%9C%E0%A6%A8"
                target="_blank"
                rel="noopener noreferrer"
              >
                আয়োজনে নিয়ে Arduino – Prothom Alo
              </a>
            </li>
            <li>
              <strong>Books:</strong> “Arduino te Hatekhori” &amp; “Hoye Otho
              Ekjon Problem Solver” (Adarsha).
            </li>
            <li>
              <strong>Website (Archived):</strong>{" "}
              <span className="font-mono">www.arduinocommunity.org.bd</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
