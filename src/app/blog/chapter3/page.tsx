import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Study 03: Children are Flowers – How 7 Days in Japan Inspired My Entrepreneurial Journey",
  description:
    "How a 7-day Sakura Science Exchange trip to Fukuoka, Japan reshaped my view of education, design thinking, and inspired the birth of Tinkers Technologies Ltd. and AmarVasha.",
};

const IMAGES = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczMdM3quCXfLGfpS-kY7HiQHUMlls96zXMe9pbKS3lSGZ9YcB25BOuvhXi8Lmpc9zY-4hvdjvLECGtTPnkTz1SU7g36_K1DXDnACv82OQv4wTxGhG49hoNfWSQTp52T7rEKp3kA1Og6RryA3bzlKeIu9sg=w1604-h1204-s-no-gm?authuser=0",
  group1:
    "https://lh3.googleusercontent.com/pw/AP1GczOMGIaxOoGZwiFR9i2fVddIrRaYPm1vgIXI0Zo-jh8LKq0lqM3P3pdEUFhdtRXp-c1AXa5ZRu5LI6Uc2iWcw1YSgiTRMYiZoGLbvRT5W5um9xd-9hp1ewgMS61m2QkPgjJEyKiaAGP8NfDmiVkARhJzwA=w2140-h1204-s-no-gm?authuser=0",
  group2:
    "https://lh3.googleusercontent.com/pw/AP1GczPHFFPX18y-axJnN-iqB6XBez5QTzrFZkib-6Uv3P_pemWjYV4Zz9hexry73rPy6MTT9Vj2x2ZVobBGftcNaOd1r8yNO5zfJFEUzMEHEJp9DU7-ssfs-KQJYWXvvyR1E1jHMZTJBKZLwI73tYdvmH4-hQ=w2140-h1204-s-no-gm?authuser=0",
  group3:
    "https://lh3.googleusercontent.com/pw/AP1GczPqYdLvtbzOqY8f6C7pqcr8H6nGYGLMw5iwJWeZwP-S-IXoTt26BsRm6mBohV-fyK23LZjNFYp3i0SFPDi_oACEGmbtTn2vvQ7XnXKRnF73QrmFPrwbbBW4dQxVBDb2nUvITKc4yI5VXWM2s7-gOPgItg=w1604-h1204-s-no-gm?authuser=0",
  englishClass:
    "https://lh3.googleusercontent.com/pw/AP1GczMrCMNYCI9Q1bBbAhKQwrpB86WBXI6c41uY-rkzsOAwTvlM424PQK2NPg7zTP9bBgWyFb32ZLcyVnvsHUsNDkv6kvaMxDhlj3lJadAP9bLTfsKP_HZ5f4nz6JdthOCEELvgXltce9COQOg6lV-U4eXH2g=w902-h1204-s-no-gm?authuser=0",
  hospital:
    "https://lh3.googleusercontent.com/pw/AP1GczP718wrluf8W2Dtf1bnOYwrKL7yaoC5_cMCELYtE8JrzWCZi1LSrWJdTPDqDMd3oE7sWQWoGurRTRwfm-nA8sWp7_A7qBo8nFdJgCCdN3l8YyTYlrYiJ-3khdiCqiDRbDaNAUC4f3ZzYmknplLn6uNUzQ=w1604-h1204-s-no-gm?authuser=0",
  poster:
    "https://lh3.googleusercontent.com/pw/AP1GczPk_r-ef3Vim4nC2ahNqsneZOQjzEUlzctU3LFsZNAMKXGFg4hER3qDp5keV1gQge-k_vQ6mehh1ekAcoaFfjmduLuGGqp_x9boLQSoWiubs7bWixv3jGaKo0O8UNqV3CJ94VtYKJ_PZY_aKiZl_ole-g=w2140-h1204-s-no-gm?authuser=0",
  tea:
    "https://lh3.googleusercontent.com/pw/AP1GczOz6w0FZKg41kEZGcBYab6zNGFsDSFRNuWgGGpGpTwrJmZfm6bAeSPdPlY7X7dFCB-GVxf1VuOt7HNpoB4usEd1y2FZtqHya4s97SPW92ZcfZPkg6bnL1b0wba_IXb6L76ViJLSOQpWP0TudYxUfuZVgQ=w902-h1204-s-no-gm?authuser=0",
  certificate:
    "https://lh3.googleusercontent.com/pw/AP1GczOyg6eCpi-SSdPH28HopqOxN0jkdQasroggIzS0gB0hWeuvqRXXu6SzrTSEx7F0woF3dGieL9B5SD9uxapOw5H6RDcDH22IRoW881SYG9fAFm47nxmCV8hapz5xE4GhLi-nLAnYpzs_DVSwDDd046IDPg=w2140-h1204-s-no-gm?authuser=0",
  // conference album (non-direct image) – we’ll link, not use in <Image />
  conferenceAlbum: "https://photos.app.goo.gl/tJTK5pjJR7Kh3Dok6",
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
            Children are Flowers: How 7 Days in Japan Inspired My Entrepreneurial Journey
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Author: Mohd. Ruhul Ameen</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Year of experience: 2019 · Written: 2025</span>
          </div>

          {/* Header Image */}
          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.header}
                alt="Sakura Science Exchange group in Japan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Intro */}
        <section>
          <p>
            They say, "Children are like flowers. You don’t compare a rose to a hasnahena
            (night-blooming jasmine). Every flower has its own color, its own fragrance,
            and its own time to bloom."
          </p>

          <p>
            I first truly understood the depth of these words in 2019, in a classroom in
            Fukuoka, Japan. That realization didn't just change my perspective on
            education; it laid the foundation for my company, Tinkers Technologies Ltd.
          </p>

          <p>
            Here is the story of my Sakura Science Exchange experience—a seven-day chapter
            that continues to write the story of my life.
          </p>
        </section>

        {/* Selection Section */}
        <section>
          <h2>The Selection: A Moment of Pride</h2>

          <p>
            It was 2019, and I was in my fourth year at the University of Rajshahi. The
            Sakura Science Exchange Program announced a competitive exam to select students
            for a fully funded research and cultural trip to Japan.
          </p>

          <p>
            When the results came out, I was overwhelmed. I was the only student selected
            from the entire Computer Science and Engineering (CSE) department at Rajshahi
            University. I joined a diverse delegation of students and teachers from various
            other departments, and together, we flew to the Land of the Rising Sun.
          </p>

          {/* Group photos */}
          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.group1}
                alt="Group photo during Sakura Science Exchange trip"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.group2}
                alt="Delegation from University of Rajshahi in Japan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Innovation in Fukuoka */}
        <section>
          <h2>Innovation in Fukuoka: Labs and Design Thinking</h2>

          <p>
            Our destination was Fukuoka, a city that perfectly balances hyper-modernity
            with deep-rooted tradition.
          </p>

          <p>
            For a CSE student, the academic visits were like stepping into the future. We
            spent days at the Kyushu Institute of Technology (Kyutech) and Kyushu
            University. We didn't just tour the facilities; we immersed ourselves in them.
            We visited advanced robotics and engineering labs, witnessing the incredible
            discipline Japanese researchers apply to their work.
          </p>

          <p>
            But the highlight of the academic schedule was the Design Thinking Workshops.
            These weren't just about coding or hardware; they were about problem-solving.
            I learned that before you design a solution, you must deeply understand the
            human need behind it. This philosophy of "Human-Centered Design" became a
            cornerstone of my own professional thinking.
          </p>

          {/* Another atmosphere / campus image */}
          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.group3}
                alt="City and campus atmosphere in Fukuoka"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* School Visit */}
        <section>
          <h2>The School Visit: The Heart of the Trip</h2>

          <p>
            While the university labs were impressive, the day that shook me to my core
            was our visit to a Japanese elementary school. This was where I saw the
            "Flower Philosophy" in action.
          </p>

          <p>
            In Japan, every child is treated as a unique entity. The teachers don't force
            a "one-size-fits-all" method. Instead, they personalize the care so each
            flower can bloom in its own way.
          </p>

          <p>
            <strong>Learning with Joy:</strong> We watched a math class where children
            weren't just reciting numbers; they were singing them. They memorized
            multiplication tables through rhythm and melody, turning a boring task into a
            joyful game.
          </p>
        </section>

        {/* Remote Revelation */}
        <section>
          <h2>The "Remote" Revelation</h2>

          {/* English class image */}
          <div className="not-prose my-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.englishClass}
                alt="Computer-based English class with remote teacher on screen"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p>
            Then, we observed an English class for the senior students. This was the
            moment that sparked my future business idea.
          </p>

          <p>
            Japanese educators knew that, generally speaking, their local teachers might
            struggle to teach conversational English with perfect native nuances. Instead
            of forcing it, they innovated. They hired a foreign agency to broadcast native
            English speakers onto a large screen in the classroom.
          </p>

          <p>
            The students were interacting with a remote teacher in real-time. Inside the
            room, there was only one local instructor acting as a technical facilitator.
            It was a brilliant display of self-awareness and efficiency: If we can't do it
            perfectly, we will use technology to bring in someone who can.
          </p>
        </section>

        {/* Connecting the Dots */}
        <section>
          <h2>Connecting the Dots: From Fukuoka to AmarVasha</h2>

          <p>
            I returned to Bangladesh with my head full of ideas. I couldn't stop thinking
            about that English class. I asked myself: If Japan can use technology to bring
            English teachers to their kids, why can't I use technology to take Bengali
            teachers to children who need them?
          </p>

          <p>
            This inspiration led to the birth of my company, Tinkers Technologies Ltd.
          </p>

          <p>
            We launched AmarVasha, a platform where we teach the Bengali language to
            children of Bangladeshi origin living in the USA.
          </p>

          <p>
            <strong>The Curriculum:</strong> Inspired by the Japanese math class, we made
            our curriculum fun, engaging, and "gamified."
          </p>

          <p>
            <strong>The Model:</strong> Inspired by the remote English class, we connect
            expert teachers from Bangladesh with students in the US, bridging the distance
            with technology.
          </p>

          <p>
            Every aspect of AmarVasha's content and user experience (UX) traces its DNA
            back to that school in Fukuoka.
          </p>
        </section>

        {/* Culture & Care */}
        <section>
          <h2>More Than Just Tech: Culture and Care</h2>

          {/* Tea + hospital visuals */}
          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.tea}
                alt="Japanese tea and biscuits during Sakura Science Exchange hospitality"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.hospital}
                alt="Japanese hospital visit to observe systems and care"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p>
            The trip wasn't all work. We experienced the legendary Japanese hospitality.
            We attended a technical conference, explored the city, and ate authentic
            Japanese food—including real Sushi, which was a culinary adventure in itself!
          </p>

          <p>
            We even visited a Japanese Hospital. You might wonder, why a hospital? It was
            to see their systems. The way they manage patient care, hygiene, and workflow
            is a masterclass in management and empathy. It reinforced the idea that
            technology is useless without a system that cares for people.
          </p>

                </section>

                {/* Conference Presentation & Dr. Yunus Section */}
        <section>
        <h2>The Conference: A Moment of Inspiration</h2>

        <p>
            One of the most memorable parts of the Sakura Science Exchange trip was the 
            international technical conference we attended in Fukuoka. Students and researchers 
            from several countries presented posters, prototypes, and early-stage ideas. 
            I was selected to present a poster showcasing my work and future research directions — 
            standing alongside innovations from Japan, China, Thailand, and Malaysia.
        </p>

        <p>
            The conference became even more special because Nobel Laureate{" "}
            <strong>Dr. Muhammad Yunus</strong> delivered a keynote session during the event. 
            Listening to him speak in Japan — about social business, human-centered progress, 
            and designing solutions that uplift communities — was surreal. It was the first time 
            I saw how deeply social philosophy and engineering innovation could merge.
        </p>

        {/* Photo with Dr. Yunus */}
        <div className="not-prose my-6 space-y-3">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border">
            <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczPJiOwH67wz9w9nitFtDpLrgpe35Fd31lt47PZD8QpPga6E7hMjSp69x22s10ISvbKIcnMH_inZjCUSWzpW9WeRBGnVXWysRjOv_H4_MYB7AXOZ5DgMFFFuC2Sn6SOJFGP4qaRFUcJ4eD9JVPq-QZd8Mw=w902-h1202-s-no-gm?authuser=0"
                alt="Ruhul Ameen with Dr. Muhammad Yunus at the Japan technical conference"
                fill
                className="object-cover"
            />
            </div>
            <p className="text-xs text-zinc-500">
            A memorable moment with Dr. Muhammad Yunus during the conference in Fukuoka.
            </p>
        </div>

        {/* Poster Presentation */}
        <div className="not-prose my-6 space-y-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
            <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczPk_r-ef3Vim4nC2ahNqsneZOQjzEUlzctU3LFsZNAMKXGFg4hER3qDp5keV1gQge-k_vQ6mehh1ekAcoaFfjmduLuGGqp_x9boLQSoWiubs7bWixv3jGaKo0O8UNqV3CJ94VtYKJ_PZY_aKiZl_ole-g=w2140-h1204-s-no-gm?authuser=0"
                alt="Poster presentation during the technical conference in Japan"
                fill
                className="object-cover"
            />
            </div>
            <p className="text-xs text-zinc-500">
            Presenting my poster at the international technical conference — an unforgettable milestone in my academic journey.
            </p>
        </div>

        <p>
            That day changed something in me. Watching global researchers present their ideas, 
            listening to Dr. Yunus speak about building AI systems and thinking about people, and standing there as 
            a Bangladeshi student presenting my own work — it all came together as a powerful 
            reminder that we are capable of shaping meaningful change far beyond our borders.
        </p>
        </section>



        {/* Legacy */}
        <section>
          <h2>A Lasting Legacy</h2>

          {/* Certificate image at the end */}
          <div className="not-prose my-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <Image
                src={IMAGES.certificate}
                alt="Receiving certificate at the end of Sakura Science Exchange program"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p>
            As I continue my journey now as a PhD student and a Lecturer, the lessons from
            2019 remain my guiding star.
          </p>

          <p>
            The Sakura Science Exchange didn't just show me advanced computers; it showed
            me advanced thinking. It taught me that Design Thinking isn't just a
            buzzword—it's a way of life. Whether I am designing a lecture for my students
            at Teesta University or a new feature for Tinkers, I look back at that trip.
          </p>

          <p>
            I learned that a rose is not a hasnahena, and that if you build the right
            environment, every flower will bloom beautifully.
          </p>
        </section>
      </article>
    </main>
  );
}
