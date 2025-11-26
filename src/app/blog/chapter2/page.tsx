import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Study 02: The Toolkit – Where MY Journey Begins",
  description:
    "Why the books Arduino te Hatekhori and Hoye Otho Ekjon Problem Solver became the gateway for thousands of young innovators in Bangladesh.",
};

const GPHOTOS = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczPPnYmTTUzYipYAGmTyV9WzvUGnrU1ko0g1MKp8hg-ZEjphY52Y_8X0XjbT9cdE54qYedpPZrArV_-dCbDAad_xBjDTANlDx4road_TW_k_Y9gTCTtxgvY4Bpi7pO3rl_hthcGECnCTZQH7FdDJHWgl-w=w1932-h1288-s-no-gm?authuser=0",

  img1:
    "https://lh3.googleusercontent.com/pw/AP1GczPH-agskpBdGk8CBVM8HdZ_iK1PRwaNmf4KhG23eUKtVfyBtcVKdmJsEfKkPL0PYEvi7QcKUnDRci4XvoFjqE_AqGjI3A7vGTFRxSGmDHgbTORHO8WQoic3uNzNQaxan9-eCvLs3mT1zJNAGzr3kBsG7w=w1288-h1288-s-no-gm?authuser=0",

  img2:
    "https://lh3.googleusercontent.com/pw/AP1GczMMkcTMf8n3eJ0o8u7l4GhuMJRFQmeLtKKh_FdUmrlbagWv1Khlah61FLUzVxTKVK1NvGdql_QUwkfUl8OvNd9R23ilMM36VR_R0fmkj1mJlndGngS-61oK0DpJUph7UnwuzVi0Hq1dAKkHhWUOe5Dw3Q=w1932-h1288-s-no-gm?authuser=0",
};

export default function CaseStudy03Page() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Case Study 03
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            The Toolkit – Where Your Journey Begins
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Author: Mohd. Ruhul Ameen</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Date: November 21, 2025</span>
          </div>

          {/* Header Image */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <Image
                src={GPHOTOS.header}
                alt="Toolkit books – Arduino te Hatekhori & Hoye Otho Ekjon Problem Solver"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Section: Inspiration to Action */}
        <section>
          <h2>From Inspiration to Action</h2>

          <p>
            In the previous posts, I shared the story of how Arduino Community
            Bangladesh started and how a lack of resources drove us to write.
            But inspiration alone cannot build a robot. You need the right
            tools.
          </p>

          <p>
            Over the years, I have met countless students who ask,{" "}
            <em>&quot;Bhaiya, where do I start?&quot;</em> or{" "}
            <em>&quot;How do I prepare for the Robot Olympiad?&quot;</em>
          </p>

          <p>
            The answer lies in these two books. They are not just textbooks;
            they are the documentation of our entire journey—designed to take
            you from zero knowledge to building innovation.
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <h2>1. The Gateway: Arduinote Hatekhori (আরডুইনোতে হাতেখড়ি)</h2>

          {/* Image */}
          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <Image
                src={GPHOTOS.img1}
                alt="Arduino te Hatekhori book"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p>
            This is where it all begins. We wrote this book for the absolute
            beginner—whether you are a school student, a university fresher, or
            a hobbyist. If you have never written a line of code or held a
            microcontroller, this book is your starting point.
          </p>

          <p>
            <strong>What you will learn:</strong> Basics of electronics,
            understanding the Arduino environment, and your first &quot;Hello
            World&quot; in hardware.
          </p>

          <p>
            <strong>Why it matters:</strong> It removes the fear of technology.
            It proves that hardware is easy.
          </p>

          <p>
            <a
              href="https://www.rokomari.com/book/123456/arduino-te-hatekhori"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get it here → Arduinote Hatekhori on Rokomari
            </a>
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2>
            2. The Deep Dive: Hoye Otho Ekjon Problem Solver (হয়ে ওঠো একজন প্রবলেম
            সলভার)
          </h2>

          {/* Image */}
          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <Image
                src={GPHOTOS.img2}
                alt="Hoye Otho Ekjon Problem Solver book"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p>
            Once you know how to blink a light, what&apos;s next? This book is
            the bridge between a hobbyist and an engineer. This is the text that
            many World Robot Olympiad (WRO) and International Robot Olympiad
            (IRO) medalists have used to refine their logic.
          </p>

          <p>
            <strong>What you will learn:</strong> The Hacking Mindset, Product
            Design, Advanced Sensors, IoT, and most importantly—how to solve
            real-world problems using technology.
          </p>

          <p>
            <strong>Why it matters:</strong> It doesn&apos;t just teach you how
            to build; it teaches you what to build and why. It prepares you for
            competitive robotics and the 4th Industrial Revolution.
          </p>

          <p>
            <a
              href="https://www.rokomari.com/book/123456/hoye-otho-ekjon-problem-solver"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get it here → Hoye Otho Ekjon Problem Solver on Rokomari
            </a>
          </p>
        </section>

        {/* Final Thoughts */}
        <section>
          <h2>Final Thoughts</h2>
          <p>
            These books represent years of research, late nights in the lab, and
            the collective dream of Munem Shahriar, myself, and our team. We
            didn&apos;t just write them to sell copies; we wrote them to spark a
            revolution.
          </p>

          <p>
            If you are dreaming of winning a Gold Medal for Bangladesh, or
            simply want to automate your home, grab these copies. Let the
            building begin.
          </p>
        </section>
      </article>
    </main>
  );
}
