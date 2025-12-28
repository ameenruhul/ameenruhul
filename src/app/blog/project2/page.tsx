// app/blog/project-bat-irrigation/page.tsx

import type { Metadata } from "next";
import NextImage from "next/image";

// BAT project images (Google Photos URLs)
const BAT_IMAGES = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczNISibPWWNnQAMKLMdMPGoDivRwqf9dHzwAfHBeQ9Tfw-pdoSfKdYGvHTnd-kO_poBxszAE-xEpLHMDIw1gVQ6ybkyihVXdGZoyaNy_MI6GrC6trfsoNRpA4fQdezlmL9ID0Bi7Aq2pQFlNM8b3NTcaVw=w642-h857-s-no-gm?authuser=0",
  pcb:
    "https://lh3.googleusercontent.com/pw/AP1GczMHZL4tQgrUCFSM4Gwd0zAJFst7ZYYF-EJQqD78anUY9JhX7FLDBvxak06oqJ0YKnsVcGItQEZrodXncdhGXhMMzV8AMAPEHZNnX4nxM03VCSsK58XnFz1A5VZpFjh1mxxqBy_f0LDTWgl-A1El6YWAXg=w642-h857-s-no-gm?authuser=0",
  enclosure:
    "https://lh3.googleusercontent.com/pw/AP1GczPfapYuhDY8ymzlAoz_ZPFYBWlfJqg7D4z9NofY2bGiKYAq93fdbJ66PvRAFiMPNSXduq77bDH8InflfyeJvBXZKDb2DEmmDvmFkRDFasdMF5oHGwPSAM3_xxEOaaW2szt6wGI2HVV3PCc6emZejr_5RA=w642-h857-s-no-gm?authuser=0",
  field1:
    "https://lh3.googleusercontent.com/pw/AP1GczMsptcaND2NnoiYpsICYTvXnGUa35QkyGcC3B9oJ2mZTIx48rx7BYnYsD1A4F5Dxx3JMODq1Jp_xYSE2vCtPMDwF3_0G085v8NwwguKEodv99GRlBrZXstXHihxhmu-Bn9WmznmWvApN8P-kSsFzO8IWA=w642-h857-s-no-gm?authuser=0",
  field2:
    "https://lh3.googleusercontent.com/pw/AP1GczMjxS_Xx4pbYBn1uYTCRIGKlYNpejET70bqmb1oCtkGfaFPL-gjKY1ZwO7eBKA5eEyE2Mbj2WQkEbhyet_NwfZF5rQRsgit2ukYXKYLd158yHcP3YMN1Q7p_sfud-9mMr7bmeEecMCoZqxb5qZFB_0WVg=w642-h857-s-no-gm?authuser=0",
};

// YouTube embed component (works for Shorts too)
function YouTubeEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title?: string;
}) {
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
  title: "Project Spotlight: Automated Irrigation System for BAT Bangladesh",
  description:
    "A custom Smart-Agri pump controller built with ESP32-S3, dual-sensor logic (soil moisture + air humidity), rugged enclosure, and solar autonomy for off-grid field deployment.",
};

export default function ProjectBATBangladeshIrrigationPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Project Spotlight
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Designing an Automated Irrigation System for BAT Bangladesh
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>By: Mohd. Ruhul Ameen, Ruhul Engineering</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Client: British American Tobacco (BAT) Bangladesh</span>
          </div>

          <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 text-sm italic text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
            “When irrigation decisions are driven by real-time conditions—not guesswork—every drop and every watt counts.”
          </blockquote>

          {/* Hero image */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BAT_IMAGES.header}
                alt="Automated irrigation controller deployed for BAT Bangladesh"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Overview */}
        <section aria-labelledby="overview">
          <h2 id="overview">Overview</h2>

          <p>
            I recently had the opportunity to design and deploy a custom{" "}
            <strong>Smart-Agri</strong> solution for{" "}
            <strong>British American Tobacco (BAT) Bangladesh</strong>. The goal
            was to modernize their field operations by creating an automated pump
            controller that reacts to real-time environmental data.
          </p>

          <p>
            Instead of relying on manual guesswork, I built a system that measures{" "}
            <strong>soil moisture</strong> and <strong>air humidity</strong> to
            trigger irrigation exactly when the crop needs it.
          </p>
        </section>

        {/* Technical Design */}
        <section aria-labelledby="design">
          <h2 id="design">My Technical Design</h2>

          <p>
            To meet the rigorous demands of real field deployment, I couldn’t
            rely on off-the-shelf hobbyist parts. I engineered a robust solution
            from the ground up.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Custom PCB Design</h3>
          <p>
            I designed a custom printed circuit board (PCB) powered by the{" "}
            <strong>ESP32-S3-WROOM</strong> microcontroller. I chose this
            architecture for its reliability and processing power. The board
            integrates a heavy-duty relay to switch the pumps and visual
            indicators (LEDs) for immediate status feedback.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BAT_IMAGES.pcb}
                alt="Custom PCB using ESP32-S3-WROOM with relay and status LEDs"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Custom ESP32-S3 PCB with relay switching and on-board indicators.
            </p>
          </div>

          <h3 className="mt-4 text-lg font-semibold">Dual-Sensor Logic</h3>
          <p>The system monitors two key variables:</p>
          <ul>
            <li>
              <strong>Soil Moisture:</strong> External probes connected via
              terminal blocks to check root-zone saturation.
            </li>
            <li>
              <strong>Air Humidity:</strong> An embedded sensor (visible through
              the enclosure vents) to measure ambient humidity. This prevents the
              pump from running if the air is already saturated, saving water.
            </li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold">Professional Enclosure</h3>
          <p>
            I designed ruggedized <strong>3D-printed enclosures</strong> featuring
            embossed <strong>“BAT BANGLADESH”</strong> branding to deliver a
            professional, finished product that can withstand field conditions.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BAT_IMAGES.enclosure}
                alt="Rugged 3D-printed enclosure with BAT Bangladesh branding"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Rugged enclosure design with embossed client branding for field readiness.
            </p>
          </div>
        </section>

        {/* Field Implementation */}
        <section aria-labelledby="field">
          <h2 id="field">Field Implementation</h2>

          <p>
            One of the biggest challenges in agricultural IoT is power. Since
            these fields are often far from the grid, I designed the
            infrastructure to be completely off-grid capable.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Solar Autonomy</h3>
          <p>
            I set up solar pole stations to power the units, ensuring they can
            run 24/7 without constant maintenance or battery swaps.
          </p>

          <h3 className="mt-4 text-lg font-semibold">On-Site Testing</h3>
          <p>
            I personally visited the fields to install and calibrate the units.
            It was crucial to verify wiring integrity and validate sensor data
            in real soil conditions.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Scalability</h3>
          <p>
            I built multiple units to demonstrate how this solution can be
            scaled across multiple plots with consistent performance.
          </p>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BAT_IMAGES.field1}
                alt="Field deployment view of the Smart-Agri controller"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BAT_IMAGES.field2}
                alt="On-site installation and calibration for BAT Bangladesh fields"
                fill
                className="object-cover"
              />
            </div>
            <p className="sm:col-span-2 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Installation, calibration, and real-world validation in the field.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section aria-labelledby="conclusion">
          <h2 id="conclusion">Conclusion</h2>

          <p>
            This project represents what <strong>Ruhul Engineering</strong> is all
            about: solving real-world problems with precise engineering. By
            combining custom hardware with practical solar infrastructure, I
            delivered BAT Bangladesh a tool to improve efficiency, reduce waste,
            and support better crop outcomes.
          </p>

          <blockquote>
            If you’re building field-ready IoT systems and need reliable,
            engineered hardware—not prototypes—I’d love to collaborate.
          </blockquote>
        </section>

        {/* Media */}
        <section aria-labelledby="media">
          <h2 id="media">Product Demo</h2>
          <YouTubeEmbed
            videoId="CNwzjiqKNXA"
            title="BAT Bangladesh – Automated Irrigation Controller (Short Demo)"
          />
        </section>
      </article>
    </main>
  );
}
