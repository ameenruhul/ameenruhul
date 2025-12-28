// app/blog/ruhul-bikes-v1/page.tsx

import type { Metadata } from "next";
import NextImage from "next/image";

const BIKE_IMAGES = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczPv6BQJLl9ZQtbFD_J8B82Qsl_UYZ3n2dJ39NxaVxMOlgMQuKbnQ6quCl1oaefRGom-OERSGIrXN92XHevU1Z9xcJzEmUPJ50pGqan64iVmLcZWCxgjyF_Ys89HatdvCSRNhbY48EC-U0BzRNHYRqQqeg=w642-h857-s-no-gm?authuser=0",
  metalFrame:
    "https://lh3.googleusercontent.com/pw/AP1GczOYxb4WOiE0oReB35B2Ki1mheE_l9Flv_ctTjHy_EhUSbCF78T3zQ6yEoMOpRJOM9kEMkUI9bXr8HQaFMc5LhsKBb8frdiwJOCL3vCQZN51u-JkPmQBUEZhrS9vkrt39qGAgBqsPU2aXpH6moQG2Kb6gw=w642-h857-s-no-gm?authuser=0",
  ridingBase:
    "https://lh3.googleusercontent.com/pw/AP1GczMgaK6aVNdPgoaLTwInqCCYKX5nX-HMTAboMYMBIQOaiUAId0SN6QtLX1bYdYfImPOT94N9T5Akojyk2uwusiKZAvhzhTroub03L3kiRnSClEUnvZFWNN_5zOYjLDb_e5doeFCiQlYmz9ByFA6YWO3yDg=w1142-h857-s-no-gm?authuser=0",
  model3d:
    "https://lh3.googleusercontent.com/pw/AP1GczMmVX26lKhIJDD0BJ11hkV9zdLYkxVUuvrVWngrpWvIGiVEivB2LU3TDpAU_JEUEioMoENBhtYQbb-ah40-s4sVI-Ggf_OCs2JnEAxboLwWxFXDowByglNv2rlyF8kDQbYkZdZFJJ2vwHJtBitza9BSoQ=w438-h378-s-no-gm?authuser=0",
  finalOutput:
    "https://lh3.googleusercontent.com/pw/AP1GczMOn-z3yGX8FWjeICAvvghTTfSNA9_NNnoZGEj7VL1hJHG91pe20VUwd9DqVjEPV1u25f8c9scuZ--kB2PG23IV-Z6uF8X0fcdQEqv7UZ0_iyM-MhruU9gpcnMAuPpxqAc0waw3dumXpU2cpJP5paf8lA=w642-h857-s-no-gm?authuser=0",
};

// Simple YouTube embed (works for Shorts too)
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
  title: "Made in Rajshahi: Building an Electric Bike for the Everyday Hero",
  description:
    "Ruhul Bikes V1 — a self-funded R&D electric bike prototype built in Rajshahi to support delivery riders with high torque, delivery-ready utility, and safety-limited testing.",
};

export default function RuhulBikesV1Page() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Project Spotlight
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Made in Rajshahi: Building an Electric Bike for the Everyday Hero
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Ruhul Engineering</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Prototype: Ruhul Bikes V1</span>
          </div>

          <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 text-sm italic text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
            “If we can build it here, we can scale it here.”
          </blockquote>

          {/* Hero image */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BIKE_IMAGES.header}
                alt="Ruhul Bikes V1 — Made in Rajshahi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Intro */}
        <section aria-labelledby="intro">
          <h2 id="intro">A Dream Project (and a Little Bit Crazy)</h2>

          <p>
            This is officially one of the craziest dream projects I’ve ever
            executed for <strong>Ruhul Engineering</strong>.
          </p>

          <p>
            It started with a simple, slightly wild ambition: to build and ride
            my own bike. But beyond the personal thrill, there was a mission. I
            wanted to prove that we could build low-cost electric bikes right
            here in Bangladesh—specifically designed to support delivery riders
            (like the hard-working folks at Foodpanda).
          </p>

          <p>
            Today, I’m proud to introduce: <strong>Ruhul Bikes V1</strong>.
          </p>
        </section>

        {/* Mission */}
        <section aria-labelledby="mission">
          <h2 id="mission">The Mission: Efficiency for the Everyday Rider</h2>

          <p>
            The goal was to create something practical that could make lives
            easier. The V1 isn’t just a toy—it’s a utility vehicle.
          </p>

          <ul>
            <li>
              <strong>High Torque:</strong> Enough power to comfortably carry
              two people.
            </li>
            <li>
              <strong>Delivery Ready:</strong> Built with the daily grind of
              delivery riders in mind.
            </li>
            <li>
              <strong>Safety First:</strong> For the testing phase, I’ve limited
              the speed to <strong>30 km/h</strong>.
            </li>
          </ul>
        </section>

        {/* Design Journey */}
        <section aria-labelledby="journey">
          <h2 id="journey">Expectation vs. Reality: The Design Journey</h2>

          <p>
            This project has been in the works for over a year. Initially,
            Safaiat Hossain and I started with a vision that was admittedly
            ambitious: a 3D design inspired by the sharp, futuristic lines of
            the Tesla Cybertruck. It looked incredible on screen.
          </p>

          <p>
            But turning a digital design into a physical build in a real workshop
            is a different beast. When you’re building a first version with
            limited workshop capabilities, you have to adapt—and the final
            output evolved significantly from the original concept.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BIKE_IMAGES.model3d}
                alt="Early 3D concept model screenshot"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Early 3D concept (screenshot): ambitious, sharp, Cybertruck-inspired lines.
            </p>
          </div>

          <p>
            We faced real engineering hurdles—especially around{" "}
            <strong>center of mass</strong> and stability, which required repairs
            and rethinking. I went back to the drawing board and worked on fixes
            last December in a different workshop.
          </p>

          <p>
            Sourcing the right materials was another constant struggle. And
            since this is a self-funded passion project with genuine R&amp;D,
            we sometimes had to pause progress to manage finances.
          </p>
        </section>

        {/* Made in Rajshahi */}
        <section aria-labelledby="rajshahi">
          <h2 id="rajshahi">Made in Rajshahi</h2>

          <p>
            Despite the challenges, everything for this prototype was made right
            here in <strong>Rajshahi</strong>. It stands as a testament to what
            we can build locally with persistence—and a bit of “crazy”
            innovation.
          </p>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BIKE_IMAGES.metalFrame}
                alt="Metal frame base design for the electric bike"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BIKE_IMAGES.ridingBase}
                alt="Riding the bike on the metal frame base during testing"
                fill
                className="object-cover"
              />
            </div>

            <p className="sm:col-span-2 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Prototype reality: the metal frame base and early ride testing before finishing.
            </p>
          </div>

          <p>
            Since I don’t currently live in Rajshahi, I want this prototype to
            be used rather than sit in a garage. I’m planning to offer this unit
            to someone who can make a real impact with it—possibly on a{" "}
            <strong>subscription basis</strong>—while we continue R&amp;D for
            future versions.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={BIKE_IMAGES.finalOutput}
                alt="Final output of Ruhul Bikes V1"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Ruhul Bikes V1 — the current prototype output from our recent shoot.
            </p>
          </div>
        </section>

        {/* Acknowledgments */}
        <section aria-labelledby="thanks">
          <h2 id="thanks">Acknowledgments</h2>

          <p>This journey wasn’t a solo ride. Massive thanks to:</p>

          <ul>
            <li>
              <strong>Md Santo Vai:</strong> Significant help and expertise
              during the build process.
            </li>
            <li>
              <strong>Safaiat Hossain:</strong> Incredible work on the initial
              3D design and vision.
            </li>
            <li>
              <strong>Munem:</strong> My brother—helping film the reveal video
              and supporting my crazy experiments.
            </li>
            <li>
              <strong>And all well-wishers:</strong> Thank you for cheering us
              on.
            </li>
          </ul>
        </section>

        {/* What's next */}
        <section aria-labelledby="next">
          <h2 id="next">What’s Next?</h2>

          <p>
            The official video reveal is dropping very soon! The photos in this
            post were taken during our recent shoot. Stay tuned to see{" "}
            <strong>Ruhul Bikes V1</strong> in action on the streets.
          </p>
        </section>

        {/* Media */}
        <section aria-labelledby="media">
          <h2 id="media">Video Demo</h2>

          <YouTubeEmbed
            videoId="rtQl_YuCKSU"
            title="Ruhul Bikes V1 — Short Demo (Behind-the-scenes reveal)"
          />
        </section>
      </article>
    </main>
  );
}
