// app/blog/project1/page.tsx

import type { Metadata } from "next";
import NextImage from "next/image";

// MuthoSech images – using provided Google Photos URLs
const MUTHOSECH_IMAGES = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczNGlgDZma30dkQ20dt8o-qEm4xc61EHU0aCN6OjWf4WzMSUZum2i3siRIih36v5JouW10GcqbmtDG_FT1AHXP8epHO99lNNmcqSZFol36BLqPVCzH20o-CLbGJaZKSaaDhmtLzOo7s10-jicWVudlbltQ=w1200-h801-s-no-gm?authuser=0", // pump pumping in field
  field:
    "https://lh3.googleusercontent.com/pw/AP1GczNGlgDZma30dkQ20dt8o-qEm4xc61EHU0aCN6OjWf4WzMSUZum2i3siRIih36v5JouW10GcqbmtDG_FT1AHXP8epHO99lNNmcqSZFol36BLqPVCzH20o-CLbGJaZKSaaDhmtLzOo7s10-jicWVudlbltQ=w1200-h801-s-no-gm?authuser=0", // same field photo
  hardware:
    "https://lh3.googleusercontent.com/pw/AP1GczNhsppGOW9pHic8zjU0waKrfASaG728EIUYrdahW4ISUiKvDdm2kSP7pTfKtqM1iiIhEz5qqhRiVCmRxQsFVkWNdI27sv0oW3afgnAVTNmN6bOhjtMfjqvUx1ztQx9JlkQruThJXKso5n3pYIhyDLJ4HQ=w1619-h1214-s-no-gm?authuser=0", // demo prototype on pump circuit board
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
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{title}</p>
      )}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Chapter 5: MuthoSech – Putting Technology in the Farmer’s Hand",
  description:
    "How a low-cost IoT irrigation system called MuthoSech turned midnight walks through paddy fields into a single tap from a farmer’s bed.",
};

export default function Chapter5MuthoSechPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Chapter 5
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            MuthoSech – Putting Technology in the Farmer’s Hand
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Author: Mohd. Ruhul Ameen</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Date: November 21, 2025</span>
          </div>

          <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 text-sm italic text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
            “Technology should not be a luxury for the city; it should be a tool
            that reduces hardship in the village.”
          </blockquote>

          {/* Header image */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={MUTHOSECH_IMAGES.header}
                alt="A pump irrigating a paddy field in rural Bangladesh"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section aria-labelledby="intro">
          <h2 id="intro">A Question in the Dark</h2>

          <p>
            In the vast, green paddy fields of Rajshahi and Chapai Nawabganj, a
            farmer’s life is dictated by the rhythm of the water pump. I grew up
            seeing the struggle: a farmer waking up at 2:00 AM, walking
            kilometers through pitch-black fields—braving snakes, mud, and
            exhaustion—just to turn a switch on or off.
          </p>

          <p>
            If they arrived late, crops died. If they forgot to turn it off,
            precious groundwater was wasted, and electricity bills skyrocketed.
          </p>

          <p>
            I asked myself: <em>
              If I can control a lightbulb from my phone in Dhaka, why can’t a
              farmer control his pump from his bed?
            </em>
          </p>

          <p>
            This question gave birth to <strong>MuthoSech</strong> (Handheld
            Irrigation)—a low-cost IoT system designed to automate irrigation
            and save resources.
          </p>
        </section>

        {/* The Problem */}
        <section aria-labelledby="problem">
          <h2 id="problem">The Problem: The Midnight Walk</h2>

          <p>
            Commercial automated irrigation systems exist, but they cost
            thousands of dollars—impossible for a marginal farmer in Bangladesh
            to afford. The reality for our farmers was harsh:
          </p>

          <ul>
            <li>
              <strong>Wasted Water:</strong> Pumps ran for hours longer than
              necessary because the farmer couldn&apos;t get back to the field
              in time to stop them.
            </li>
            <li>
              <strong>Wasted Energy:</strong> In a country fighting for energy
              efficiency, uncontrolled motors were a massive drain.
            </li>
            <li>
              <strong>Physical Risk:</strong> Nighttime trips to the pump house
              were dangerous and physically draining.
            </li>
          </ul>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={MUTHOSECH_IMAGES.field}
                alt="Irrigation pump running in a paddy field at dusk"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              For decades, irrigation control meant a long walk through dark
              fields to a manual switch.
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section aria-labelledby="solution">
          <h2 id="solution">The Solution: Smart, Solar, and Simple</h2>

          <p>
            Developed during the early days of Tinkers Technologies and my
            involvement with Arduino Community Bangladesh, MuthoSech was an
            engineering challenge with a social heart.
          </p>

          <p>We didn&apos;t just want a remote control; we wanted an intelligent assistant.</p>

          <h3 className="mt-4 text-lg font-semibold">Automated Sensing</h3>
          <p>
            We used <strong>capacitive soil moisture sensors</strong>. The
            device &quot;felt&quot; the soil. If the ground was dry, the pump
            turned on. If it was wet enough, it turned off.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Solar Independence</h3>
          <p>
            Since electricity in fields is unreliable, the system ran on a small{" "}
            <strong>3.7V Lithium battery</strong> charged by a{" "}
            <strong>20W solar panel</strong>.
          </p>

          <h3 className="mt-4 text-lg font-semibold">The Brain: ESP32</h3>
          <p>
            We used the <strong>ESP32 microcontroller</strong>. Why? Because it
            supports Deep Sleep modes, waking up only to check the soil or
            receive a command, ensuring the battery lasted for days even without
            sun.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={MUTHOSECH_IMAGES.hardware}
                alt="MuthoSech prototype mounted inside an electric pump control board"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Early MuthoSech demo prototype integrated with an electric pump
              control board.
            </p>
          </div>
        </section>

        {/* Under the Hood */}
        <section aria-labelledby="engineering">
          <h2 id="engineering">Under the Hood: Engineering for the Village</h2>

          <p>
            Designing for a lab is easy; designing for a mud-filled field is
            hard.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Power Optimization</h3>
          <p>
            We utilized <strong>MOSFETs</strong> to cut power to the sensors
            when they weren&apos;t reading data, ensuring zero wasted energy.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Connectivity</h3>
          <p>
            The system created its own local WiFi network or connected to GSM
            modules, allowing farmers to set schedules or check water levels via
            a simple mobile interface.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Safety</h3>
          <p>
            We isolated the high-voltage pump controls from the low-voltage
            logic to ensure no farmer ever faced an electrical hazard.
          </p>
        </section>

        {/* Impact */}
        <section aria-labelledby="impact">
          <h2 id="impact">The Impact: More Than Just Water</h2>

          <p>
            MuthoSech was more than a gadget; it was a statement. It proved that
            Agri-Tech doesn&apos;t have to be imported. It can be built by local
            engineers who understand the local soil.
          </p>

          <p>By automating the process, we aimed to:</p>

          <ul>
            <li>
              <strong>Save Water:</strong> Preventing over-irrigation preserves
              the water table.
            </li>
            <li>
              <strong>Save Money:</strong> Reducing electricity usage lowers
              production costs for farmers.
            </li>
            <li>
              <strong>Save Time:</strong> The farmer gets to sleep. The machine
              does the work.
            </li>
          </ul>
        </section>

        {/* Maker's Philosophy */}
        <section aria-labelledby="philosophy">
          <h2 id="philosophy">A Maker’s Philosophy</h2>

          <p>
            This project solidified my belief that the best engineering doesn&apos;t
            happen in air-conditioned offices; it happens where the problems
            are.
          </p>

          <p>
            MuthoSech was open-source, affordable, and rugged. It was our way of
            saying to the farmers of Bangladesh:
          </p>

          <blockquote>We are engineers, and we are here to help you grow.</blockquote>
        </section>

        {/* Field Demo & Media */}
        <section aria-labelledby="media">
          <h2 id="media">Field Demo &amp; Media</h2>

          <YouTubeEmbed
            videoId="V3u-EIJzXoo"
            title="MuthoSech – Product Demonstration in the Field"
          />
          <YouTubeEmbed
            videoId="TvQHfsBn4Vs"
            title="MuthoSech – IoT App & Remote Pump Control Demo"
          />
        </section>
      </article>
    </main>
  );
}
