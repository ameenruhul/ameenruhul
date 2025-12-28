// app/blog/esp32-fuel-thieves/page.tsx

import type { Metadata } from "next";
import NextImage from "next/image";

const FUEL_THEFT_IMAGES = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczMytHSoMcUhky2NcgYmMPKVHj75BjU-q0ujURhGyWGutcL6osyuOeTAzU1WDwZXsc0piy4cfur1TGYLbfG2UJt3FIs__lR_Q3fLAnpXCuRDmAp8-VuGJTxdNGWHHTqUB5maiEZc6YHyb8JsBkcSuCNB5Q=w642-h857-s-no-gm?authuser=0",
  hardware:
    "https://lh3.googleusercontent.com/pw/AP1GczPSpE4WPx9Oy1lGKqRKEE4VUlq0w0HL_W_devwC38RHyJFmnpkEsl6NKPEggDWz3skBimBqwwptFwrZo-PymAmBTNubaRtuXYdCYMDVJpyVJijuiBEd3R9Vg1sfNV2DHoxwAPsBm_WYYccP37iIIwf1Ug=w642-h857-s-no-gm?authuser=0",
  install:
    "https://lh3.googleusercontent.com/pw/AP1GczOv94x0-B-xWwvs8GqnB2BAyRq1VLQABxBA_yvAK1pQ0fyopPaDxH5cvLHaYJIhudYS1L0mPnynv6C9zyEWUPxlBSCjuJCeeLjStBSsGXiG1YDw80MNj_R7DzO0oSiGYeyD8vsuyPFq0Lnvezv8712aVw=w642-h857-s-no-gm?authuser=0",
};

export const metadata: Metadata = {
  title: "ESP32 vs. Fuel Thieves: Digitizing Legacy Trucks in Bangladesh",
  description:
    "A low-cost ESP32 telemetry retrofit for analog trucks: digitizing fuel sender signals, GPS+IMU context, store-and-forward uploads, and 6-week field results.",
};

export default function ESP32FuelThievesPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Project Spotlight
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            ESP32 vs. Fuel Thieves: Digitizing Legacy Trucks in Bangladesh
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Ruhul Engineering</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Field: Fleet Telemetry / Anti-Theft</span>
          </div>

          <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 text-sm italic text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
            “Legacy vehicles shouldn’t mean legacy visibility.”
          </blockquote>

          {/* Header image */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={FUEL_THEFT_IMAGES.header}
                alt="ESP32-based fuel telemetry retrofit for legacy trucks"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Intro */}
        <section aria-labelledby="intro">
          <h2 id="intro">A Real Problem: Fuel Theft</h2>

          <p>
            At <strong>Ruhul Engineering</strong>, we love building things that
            solve real problems. And if you talk to any fleet manager or truck
            owner in Bangladesh, one problem comes up constantly:{" "}
            <strong>fuel theft</strong>.
          </p>

          <p>
            For a small business owner, fuel is the biggest operating cost. But
            in developing economies like ours, most trucks on the road are{" "}
            <strong>legacy vehicles</strong>—older models with analog dials and
            no digital brains. Drivers (or third parties) often siphon fuel, and
            owners have no reliable way to prove it.
          </p>

          <p>
            Big commercial solutions exist, but they’re built for modern western
            trucks and often cost <strong>$800+</strong> to install plus monthly
            fees—simply unrealistic for local operators.
          </p>

          <p>
            So we asked:{" "}
            <em>
              Can we build something that rivals big systems, but costs less
              than $50?
            </em>
          </p>

          <p>
            The answer is <strong>yes</strong>. Here’s how we did it.
          </p>
        </section>

        {/* Problem */}
        <section aria-labelledby="problem">
          <h2 id="problem">The Problem: Analog Trucks in a Digital World</h2>

          <p>
            The biggest challenge was obvious: we couldn’t just plug into a
            modern data port. These trucks don’t have OBD-II/CAN-bus. They rely
            on old-school, <strong>float-based resistive fuel senders</strong>{" "}
            feeding an analog gauge.
          </p>

          <p>
            We needed a true <strong>retrofit</strong> solution—something that
            non-intrusively intercepts the fuel gauge signal and translates it
            into clean digital data.
          </p>
        </section>

        {/* Solution */}
        <section aria-labelledby="solution">
          <h2 id="solution">The Solution: The Hardware Stack</h2>

          <p>
            We built a custom telemetry unit centered around the{" "}
            <strong>ESP32</strong>. It’s the brain of the operation. Under the
            hood:
          </p>

          <h3 className="mt-4 text-lg font-semibold">1) Fuel Digitizer</h3>
          <p>
            An auxiliary microcontroller reads the raw analog signal from the
            fuel sender, filters electrical noise, and delivers clean fuel-level
            data to the ESP32.
          </p>

          <h3 className="mt-4 text-lg font-semibold">
            2) Sensor Fusion (GPS + IMU)
          </h3>
          <p>
            We didn’t just want fuel level—we needed <strong>context</strong>.
            Using a <strong>NEO-6M GPS</strong> and an{" "}
            <strong>MPU6050 IMU</strong>, we can distinguish between fuel drop
            caused by sloshing on slopes vs. a suspicious drop while parked.
          </p>

          <h3 className="mt-4 text-lg font-semibold">
            3) Store-and-Forward Architecture
          </h3>
          <p>
            Internet in rural Bangladesh can be spotty. So the device buffers
            data locally. If the network drops, it keeps recording. When signal
            returns, it uploads the backlog—so <strong>no data is lost</strong>.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={FUEL_THEFT_IMAGES.hardware}
                alt="Electronics and telemetry hardware used for fuel digitization"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              The retrofit telemetry stack: fuel signal digitization + GPS/IMU
              context + edge buffering.
            </p>
          </div>
        </section>

        {/* Field Test */}
        <section aria-labelledby="fieldtest">
          <h2 id="fieldtest">Field Test: Does it work?</h2>

          <p>
            We didn’t just build this in the lab—we deployed it on commercial{" "}
            <strong>TATA LPT 1618</strong> trucks for a <strong>6-week</strong>{" "}
            field test.
          </p>

          <p>The results were eye-opening:</p>

          <ul>
            <li>
              <strong>Detection Accuracy:</strong> 91.3% recall for theft events
            </li>
            <li>
              <strong>Cost:</strong> ~ $45 total hardware cost (vs. $800+
              commercial solutions)
            </li>
            <li>
              <strong>ROI:</strong> Preventing just 25 liters/month saves about
              $30/month → payback in ~2.3 months
            </li>
          </ul>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={FUEL_THEFT_IMAGES.install}
                alt="Device installed and tested on a truck"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Real-world deployment: installation, calibration, and road testing
              on legacy trucks.
            </p>
          </div>
        </section>

        {/* Why it matters */}
        <section aria-labelledby="why">
          <h2 id="why">Why This Matters</h2>

          <p>
            This project isn’t just about saving money—it’s about{" "}
            <strong>democratization</strong>. Commercial tech often ignores the
            informal sector. But with low-cost components and careful systems
            engineering, we can bring high-tech fleet visibility to the masses.
          </p>

          <p>
            Next, we’re exploring <strong>Machine Learning (XGBoost)</strong> to
            make theft detection even smarter—filtering out false alarms caused
            by harsh roads and mechanical noise.
          </p>

          <blockquote>
            Local problems. Global tech. And a little bit of DIY spirit.
          </blockquote>
        </section>
      </article>
    </main>
  );
}
