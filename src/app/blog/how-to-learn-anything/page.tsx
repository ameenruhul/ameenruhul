// app/blog/why-wifi-slows-down/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Let’s unlearn to learn a new way to learn.",
  description:
    "A research-driven learning walkthrough using Wi-Fi congestion (CSMA/CA, DCF, saturation throughput) as the example — and a general method to learn anything in the AI era.",
};

export default function WhyWifiSlowsDownPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* ================= Header ================= */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Learning &amp; Research
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s unlearn to learn a new way to learn.
          </h1>


          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Mohd Ruhul Ameen, 31 December 2025 </span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            
          </div>

          
        </header>

        {/* ================= How to Learn Anything ================= */}
        <section aria-labelledby="how-to-learn-anything">
          <h2 id="how-to-learn-anything">How to Learn Anything</h2>

          <p>
            From our childhood, most of us learn how to learn in a very{" "}
            <strong>linear</strong> way.
          </p>

          <ul>
            <li>We go to class.</li>
            <li>We attend lectures.</li>
            <li>We try to digest information.</li>
            <li>We ask questions.</li>
            <li>Maybe we do exercises and complete assignments.</li>
          </ul>

          <p>This has been the standard practice for a long time.</p>

          <p>
            When I was in university and couldn’t understand some of my
            teachers’ lectures, I found YouTubers very helpful. Watching someone
            explain the same topic in a different way often made things clearer.
            But not all topics had YouTube videos back in those days. And if
            there were no videos covering those topics, then we had almost
            nothing. The situation became even worse during exams.
          </p>

          <p>
            Then came ChatGPT.
          </p>

          <p>
            Today, it feels like a blessing for students. You can ask questions
            and get feedback on almost anything using AI. You can ask the same
            question multiple times, in different ways, without feeling
            embarrassed. You can ask for examples, analogies, simplifications,
            or even step-by-step explanations.
          </p>

          <p>
            But I think there is another way of learning—a <strong>deeper</strong>{" "}
            way.
          </p>

          <p>
            I never really explored this path earlier because I was not exposed
            to research that early in my life.
          </p>

          <p>
            Now, suppose you want to learn something—but there are no books, no
            internet content, no videos, no blogs, no lectures, and no teacher
            who can teach you that topic.
          </p>

          <p>
            <strong>How would you learn it?</strong>
          </p>

          <p>
            To answer that, we have to go to the very bottom of things.
          </p>

          <p>
            Everything we see today came from basic research at some point.
            Almost every concept, tool, or theory originated in a research
            paper, journal article, or technical report. If you want to learn
            something from its core, you should start there.
          </p>

          <p>
            <strong>Find the original paper.</strong>
          </p>

          <p>
            This is easier than it sounds. You can ask an AI search tool like
            Perplexity, or use Google Scholar. It will usually point you to the
            foundational paper—or the most influential work—on that topic.
          </p>

          <p>
            Now comes the important part: <strong>reading the paper</strong>.
          </p>
        </section>

        {/* ================= Example: Wi-Fi slowdown ================= */}
        <section aria-labelledby="wifi-example">
          <h2 id="wifi-example">
            Let’s Learn Something Common: Why Wi-Fi Slows Down in Crowded Places
          </h2>

          <p>Almost everyone has experienced this.</p>

          <ul>
            <li>Your Wi-Fi works fine at home.</li>
            <li>
              But in a café, airport, conference hall, or university campus—it
              suddenly becomes slow, unstable, or unusable.
            </li>
          </ul>

          <p>The common explanation we hear is:</p>

          <blockquote>“Too many people are using Wi-Fi.”</blockquote>

          <p>
            That explanation is true, but also incomplete.
          </p>

          <p>
            I realized I didn’t actually understand why this happens at a
            technical level. Blogs gave surface-level answers. Videos simplified
            it too much. So I decided to go to the source.
          </p>
        </section>

        {/* ================= Step 1 ================= */}
        <section aria-labelledby="step-1">
          <h2 id="step-1">Step 1: Finding the Research Paper</h2>

          <p>
            When I searched Google Scholar with terms like:
          </p>

          <ul>
            <li>“Wi-Fi congestion”</li>
            <li>“wireless interference”</li>
            <li>“CSMA/CA performance”</li>
          </ul>

          <p>
            …the most cited foundational work that kept showing up was:
          </p>

          <blockquote>
            Giuseppe Bianchi (2000),{" "}
            <em>
              Performance Analysis of the IEEE 802.11 Distributed Coordination
              Function
            </em>{" "}
            (IEEE JSAC).
          </blockquote>

          <p>
            This paper is famous because it provides a clean mathematical
            explanation of how throughput behaves as the number of Wi-Fi stations
            increases under the core Wi-Fi MAC mechanism (DCF).
          </p>

          
        </section>

        {/* ================= Step 2 ================= */}
        <section aria-labelledby="step-2">
          <h2 id="step-2">
            Step 2: First Contact With the Paper (Skimming + Line-Citation Method)
          </h2>

          <p>
            At first glance, the paper looked intimidating—equations, graphs,
            dense paragraphs. But I didn’t read it line by line. I skimmed it
            like this:
          </p>

          <h3>(1) Abstract — what it claims</h3>

          <p>
            Bianchi states that the core Wi-Fi MAC (DCF) is a CSMA/CA scheme with
            binary slotted exponential backoff. This is already a clue: backoff
            means waiting grows as contention grows.
          </p>

          

          <blockquote>
            Bianchi describes 802.11 DCF as “CSMA/CA … with binary slotted
            exponential backoff” (Bianchi, 2000, p.535, lines 4–8).
          </blockquote>

          <h3>(2) Introduction — how DCF behaves when many stations compete</h3>

          <p>
            In the introduction, Bianchi explains that DCF is random access
            (CSMA/CA) and retransmissions are managed with exponential backoff.
          </p>

          <p>
            This matters because in a crowded environment, random access means
            more collisions, and exponential backoff means more waiting after
            collisions.
          </p>

          <h3>(3) DCF operation — the “listen, wait, transmit” cycle</h3>

          <p>
            Bianchi explains the procedure: a station senses the channel; if the
            channel is busy, it waits; when the channel becomes idle, it
            transmits after DIFS and a random backoff.
          </p>

          <p>
            This is the mechanism that becomes expensive when everyone is doing
            it at once.
          </p>

          
        </section>

        {/* ================= Step 3 ================= */}
        <section aria-labelledby="step-3">
          <h2 id="step-3">
            Step 3: The Key Insight From Research (What Actually Causes the Slowdown)
          </h2>

          <p>Here is the non-obvious fact that research reveals:</p>

          <blockquote>
            Wi-Fi does not slow down simply because “the internet is finished.”
            It slows down because coordination overhead explodes: more
            contention → more collisions → more backoff → more wasted airtime.
          </blockquote>

          <h3>What Bianchi adds: the “saturation throughput” idea</h3>

          <p>
            Bianchi explicitly focuses on saturation throughput—the throughput
            limit the system approaches when the offered load becomes very high.
          </p>

          <p>In plain English:</p>

          <p>
            When many people are trying to transmit a lot (a crowded place),
            Wi-Fi enters a regime where it cannot keep scaling. Throughput
            stabilizes at a limit, and the experience can feel worse because
            delays, retries, and contention overhead keep rising.
          </p>

          <p>This matches the crowded Wi-Fi experience:</p>

          <ul>
            <li>Pages load slowly</li>
            <li>Video buffers</li>
            <li>Pings spike</li>
            <li>Sometimes it “connects but doesn’t work”</li>
          </ul>

          <p>
            It’s not only “too many users.” It’s the MAC protocol paying a
            bigger and bigger coordination tax.
          </p>
        </section>

        {/* ================= Step 4 ================= */}
        <section aria-labelledby="step-4">
          <h2 id="step-4">
            Step 4: A Second Paper That Makes the “Crowded Reality” Even More Obvious
          </h2>

          <p>
            To connect theory to a common real-world crowded scenario, I used
            another influential work:
          </p>

          <blockquote>
            Heusse et al. (2003), <em>Performance anomaly of 802.11b</em> (IEEE
            INFOCOM).
          </blockquote>

          <p>
            This paper argues that the basic CSMA/CA channel access method can
            become the root of serious throughput degradation in common
            situations.
          </p>

          <p>A powerful line to cite (blog-friendly):</p>

          <blockquote>
            “The basic CSMA/CA channel access method is at the root of this
            anomaly” (Heusse et al., 2003, p.1, lines 17–21).
          </blockquote>

          <p>Then it explains why:</p>

          <ul>
            <li>
              CSMA/CA tries to give everyone an equal long-term chance to access
              the channel.
            </li>
            <li>
              But that “fairness” can produce massive inefficiency when
              conditions differ or contention rises (crowded environments).
            </li>
          </ul>

          <p>
            Even if your case isn’t “mixed bit-rates,” the lesson generalizes:
            Wi-Fi performance is often dominated by contention behavior, not
            just raw bandwidth.
          </p>
        </section>

        {/* ================= Step 5 ================= */}
        <section aria-labelledby="step-5">
          <h2 id="step-5">Step 5: Using AI as a Learning Partner</h2>

          <p>
            After reading the paper, I gave it to ChatGPT and started asking
            questions—just like I would ask a teacher:
          </p>

          <ul>
            <li>“Explain CSMA/CA like I’m five.”</li>
            <li>“Why does throughput drop non-linearly?”</li>
            <li>“Can you give a real-world analogy?”</li>
          </ul>

          <p>
            AI didn’t replace thinking. It amplified understanding.
          </p>

          
        </section>

        {/* ================= Review Articles ================= */}
        <section aria-labelledby="reviews">
          <h2 id="reviews">What About Review Articles?</h2>

          <p>
            There is another powerful resource: review articles.
          </p>

          <p>
            A review article does not introduce a single new idea. Instead, it
            summarizes many research papers and shows how thinking evolved over
            time.
          </p>

          <p>For Wi-Fi, review papers help you understand:</p>

          <ul>
            <li>Why performance collapses under contention</li>
            <li>How newer standards try to reduce overhead (scheduling, OFDMA, etc.)</li>
            <li>What problems remain unsolved</li>
          </ul>

          
        </section>

        {/* ================= Closing ================= */}
        <section aria-labelledby="closing">
          <h2 id="closing">This Is How to Learn Anything in the AI Era</h2>

          <p>I believe this should be our learning process in the new AI era:</p>

          <ul>
            <li>Start from the source</li>
            <li>Accept confusion early</li>
            <li>Use AI as a guide, not a shortcut</li>
            <li>Rebuild knowledge in your own language</li>
          </ul>

          <p>
            Learning is no longer limited by classrooms, teachers, or content
            availability.
          </p>

          <p>
            What matters now is curiosity, patience, and the courage to start
            from the core.
          </p>

          <blockquote>
            The best learners are not the ones who find the easiest explanations—
            they are the ones who learn to read the source.
          </blockquote>
        </section>
      </article>
    </main>
  );
}
