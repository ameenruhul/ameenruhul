// app/blog/bat-smart-curing/page.tsx

import type { Metadata } from "next";
import NextImage from "next/image";

const CURING_IMAGES = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczPUWJ1b5hEtfxQu2XqApI9-7bo8ZEUEs5QXA0gIj1PZCbTMD1uFGRK4v_YdatRIC9BD5tmCU_z50OPpzk86SYEvSNXSMQ6z3ad9HdN_-BLYv4pjBBRHO8AK6wgTgwA1lPfFFVZqtJo06jDm4OcrPVPR4g=w1142-h857-s-no-gm?authuser=0",
  diagram1:
    "https://lh3.googleusercontent.com/pw/AP1GczNgOA8m2rHsa9LOOD4O-INjJa2yfB1qgZrKrKOBe_YyrP-lVFJt1JKxYnegUR-L-nVWluuW5AEDPnrqFzYnfbUEs8h-CfXyYvqBoY6Ktn_C_0yaFLJBElRSupXJERQY5UFhhD6L6A-FZDg_b7FhHOF4bg=w511-h592-s-no-gm?authuser=0",
  diagram2:
    "https://lh3.googleusercontent.com/pw/AP1GczOLmCzV3xPrBqmODon5Z48_4Zcm3jq6cstDqYg9jLe9AQEUM5JFufSiijeRNrStTmfPfWF2-Zo6AbDwoqq_OKict83IR93AQkh3fXI-4AN2TLKxzro0Sza6KEvLjTCmcUmUwTYptfw_MDCTZ57_SpnPoQ=w640-h360-s-no-gm?authuser=0",
  stacking:
    "https://lh3.googleusercontent.com/pw/AP1GczN6cRVgq0GUVPzzondTDJbhXJziGBn8mNdPEwmdGd_KLGZS95hjC_zjIAbt5ORTTJfTAaJCZ_F0yH_7v7lL4cSH4SRX_u2JAnYpQh9tmF5f84lyRhpcxzUnQuuQEd8YLciSdxCVsSA3H9xxlXbYwIYQcA=w1283-h722-s-no-gm?authuser=0",
  panelField:
    "https://lh3.googleusercontent.com/pw/AP1GczMRHJ98-tZVmUx2NfSQUt7LIt2Wg7kBqOyfa6D8--tWbqwKsJ6cmnbIyfUMLv1oyX8bK_-piNNT35Um9f2Y-ootpJZzBrJHcz-SPgyX4U6C0od7Pw29MuwK1xw9-u0WHuigerBAEWNjm2B0AmtWCF8IqA=w1142-h857-s-no-gm?authuser=0",
  panelClose:
    "https://lh3.googleusercontent.com/pw/AP1GczMIYK4Xub7mUjQpNDti7lOx6ZH_CO9alWTmG0WulI10wVm6GIIa4jdKEFl7qCZgUejKZalUyx5fvTxWJSpDGKZKlDrL-l_JbhBzgvZvQDGzT3UPFNmfHOOWasCJ8bFBplBecI0l8viYpOcs0kjDHY7DMA=w642-h857-s-no-gm?authuser=0",
};

export const metadata: Metadata = {
  title: 'Project Showcase: Digitizing the "Curing" Process for BAT Bangladesh',
  description:
    "IoT-enabled barn automation for post-harvest tobacco curing: temperature/humidity monitoring, damper control, hybrid keypad+touchscreen UI, and a web dashboard for analytics.",
};

export default function BATSmartCuringPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Project Showcase
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Digitizing the “Curing” Process for BAT Bangladesh
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>By: Ruhul Engineering</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Client: British American Tobacco (BAT) Bangladesh</span>
          </div>

          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Focus: IoT-Enabled Barn Automation &amp; Post-Harvest Quality Control
          </p>

          <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 text-sm italic text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
            “Precision after harvest matters as much as precision in the field.”
          </blockquote>

          {/* Hero image */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={CURING_IMAGES.header}
                alt="Smart curing control panel prototype for BAT Bangladesh"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Context */}
        <section aria-labelledby="context">
          <h2 id="context">The Context</h2>

          <p>
            While our field irrigation systems handle the growing phase, the{" "}
            <strong>post-harvest</strong> phase is just as critical. In the
            tobacco industry, there is a delicate process called{" "}
            <strong>curing</strong>, where farmers dry harvested leaves in barns.
            This process determines the final quality, texture, and color of the
            product.
          </p>

          <p>
            Traditionally, curing is manual, labor-intensive, and prone to
            error. Small deviations in airflow, temperature, or humidity can
            shift outcomes—so we focused on bringing consistency and control
            into the barn.
          </p>
        </section>

        {/* Solution */}
        <section aria-labelledby="solution">
          <h2 id="solution">The Solution: Smart Curing Automation</h2>

          <p>
            My team and I at <strong>Ruhul Engineering</strong> developed this
            custom control panel to modernize an age-old process. In the field,
            the controller becomes a practical tool—built where the work happens,
            not just where it’s designed.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={CURING_IMAGES.panelField}
                alt="Finished smart curing control panel prototype in the field"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Field-ready prototype: the smart curing control panel at the barn site.
            </p>
          </div>
        </section>

        {/* Hardware Features */}
        <section aria-labelledby="hardware">
          <h2 id="hardware">Key Hardware Features</h2>

          <h3 className="mt-4 text-lg font-semibold">Hybrid Interface</h3>
          <p>
            We designed the unit with both a ruggedized{" "}
            <strong>4x4 keypad</strong> and a modern{" "}
            <strong>touchscreen</strong>. This keeps usability inclusive—combining
            durability for rural barns with the familiarity of smartphone-style
            interaction.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Environmental Control</h3>
          <p>
            The panel actively monitors <strong>temperature</strong> and{" "}
            <strong>humidity</strong> inside curing barns. But it doesn’t just
            watch—it acts. It provides control signals for the{" "}
            <strong>dampers</strong>, regulating airflow to maintain the right
            drying curve.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Robust Build</h3>
          <p>
            We housed the electronics in a durable <strong>metal enclosure</strong>{" "}
            to protect sensitive IoT components from the harsh, humid environment
            of a curing barn.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={CURING_IMAGES.panelClose}
                alt="Close-up of the smart curing panel in a metal enclosure"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Hybrid UI + rugged metal housing designed for humid barn environments.
            </p>
          </div>
        </section>

        {/* Barn Process Visuals */}
        <section aria-labelledby="barn">
          <h2 id="barn">Inside the Barn</h2>

          <p>
            To design for reliability, we mapped how the barn is built, how air
            flows, and how leaves are stacked—because the curing outcome depends
            heavily on real physical arrangement and ventilation.
          </p>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={CURING_IMAGES.diagram1}
                alt="Loose leaf barn architecture diagram"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={CURING_IMAGES.diagram2}
                alt="Barn airflow / architecture diagram"
                fill
                className="object-cover"
              />
            </div>
            <p className="sm:col-span-2 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Barn architecture diagrams used to reason about airflow and control points.
            </p>
          </div>

          <div className="not-prose my-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={CURING_IMAGES.stacking}
                alt="How leaves are stacked inside the barn"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Leaf stacking pattern inside the barn — physical layout matters for consistent curing.
            </p>
          </div>
        </section>

        {/* Software */}
        <section aria-labelledby="software">
          <h2 id="software">The Software: IoT &amp; Analytics</h2>

          <p>
            We didn’t just build a controller—we built a connected ecosystem. The
            device is fully <strong>IoT-enabled</strong>.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Remote Connectivity</h3>
          <p>
            Field officers and farmers don’t need to stay inside the barn to know
            what’s happening. They can check status and key readings remotely.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Web Dashboard</h3>
          <p>
            We developed a centralized web platform where stakeholders can view
            real-time analytics, track drying cycles, and ensure consistency
            across barns.
          </p>
        </section>

        {/* Philosophy */}
        <section aria-labelledby="philosophy">
          <h2 id="philosophy">The Ruhul Engineering Philosophy</h2>

          <p>
            This project is close to my heart because it represents our core
            mission: we research and design custom hardware and IoT solutions{" "}
            <strong>right here in Bangladesh</strong>.
          </p>

          <p>
            We didn’t import a generic solution from abroad that might fail in
            local conditions. We used local resources to build technology
            tailored for our people and our farmers.
          </p>

          <blockquote>
            This is proof that world-class industrial automation can be “Made in Bangladesh.”
          </blockquote>
        </section>
      </article>
    </main>
  );
}
