// app/blog/chapter-gbs/page.tsx

import type { Metadata } from "next";
import NextImage from "next/image";

const GBS_IMAGES = {
  header:
    "https://lh3.googleusercontent.com/pw/AP1GczPrYYAu3JC-UtGQ38M1dMmtcBlEZ3EYF65bpTPCiUFhSRZRvwl54WxP6GGlkcK3zw6EHB1IcCnWy-FEckoVFZzPuRcD8EYnTbD1Z7UonGNggMtnKFqugmahaAnPOAmSTu8tUfrwKTpGNDn1aM6WIJcNTA=w1142-h857-s-no-gm?authuser=0",
  day14Wheelchair:
    "https://lh3.googleusercontent.com/pw/AP1GczNZ04a0MSzVHSh3IRfd-gIgPC-x12GIfaek_40mRqafXWey1wD8fETb7ULhY1QcAJHGJCcDo8mWi8Ci2J0jPSN3M9kr8Aihzx3wrS2gkbclq4Maehx-HAEhYTaCQiNDX8lNlhNpAr7PZDbak3NjPK85lw=w630-h857-s-no-gm?authuser=0",
  fluVaccine:
    "https://lh3.googleusercontent.com/pw/AP1GczMKWMhR3D6W5wX-Ycw5XIHaNNONHePEcHNylJoSEc8usRYc2V5Fwhs2K1HQh0KwMNSRB3tgFMev7ELrlbYQFHR1YZSTUuSmfWjLTswaZ3mdBeGYED4DQ0oIcf4zX7QgXYfjoWQ0S2P8wZvLikadPZkaYg=w1238-h929-s-no-gm?authuser=0",
  feb7Selfie:
    "https://lh3.googleusercontent.com/pw/AP1GczPeG_yP_IH3JvBal7_eMP5XR0rjA0PFFjWLlU_62AUYbVt2LzHsrYI3_YZxzIkNGiVkFBrJXkRnFzrChMikNshaUjYhGsq81GmecGhAzPKknkjKC-cAypHThmr2hUWeL3EH9XpaIb-AG2od31Ob5dyjOQ=w642-h857-s-no-gm?authuser=0",
  handwritingFeb23:
    "https://lh3.googleusercontent.com/pw/AP1GczMcyMeduPmNwaqpmj5Xe6CitfHjRAwIf-dwXStSjAuzSn5Cfj7kAZxFDrgxu8UjgsXj5yPCAMEM0T-s-BjO7u9eAzQIOOlCSFShWRkQOzs2bZzla89rceaDLVVGGqxo-0BpU7F84y6Ov1GeHWwxqZLNjw=w642-h857-s-no-gm?authuser=0",
  walker:
    "https://lh3.googleusercontent.com/pw/AP1GczMa4H7f5NMnxlaayYoNtgMN1LxJ5UdGaYssNw4AaoZDIriOmVRrL3y-M-KloanoJPe94NkMWxs7gDkU86ccwVVMqlZ8NXxT__P611S8to-DcJasp0w7DlU22aHXHL006dNwik7BlCOPk8QtbDSN7Psf3g=w593-h701-s-no-gm?authuser=0",
  badminton1:
    "https://lh3.googleusercontent.com/pw/AP1GczMDbRN16S7KtrMFdvBXsS9pFDeT-w3UJm6EBRpqh3Lk38J0SdAGwJR3Y4MXyQI2sJJ_cyENI0403sRjqof8Dp5_ujba-uM5PF6yMwEyLKUFxNCxsWuT50WC7Sr4MVTbhYzgnPP9igdyn5pPq2mjq_Brog=w696-h929-s-no-gm?authuser=0",
  badminton2:
    "https://lh3.googleusercontent.com/pw/AP1GczMvUQlCxxFk95LWp0y1MsG5D59_LD0i6Pbp74fWJEmi7xpIOYRJ5ULpOPSYdEBEpuUqrg3xLUOBQw1U7d6F5Lx-m5CF7noFEALbamTvoPXPIT75zfXpyaTPWg7WfcH352ZYUfRTGaBWvjH9QnuhgnDlLQ=w1238-h929-s-no-gm?authuser=0",
};

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
  title: "From a Wheelchair to a Badminton Court: My One-Year GBS Logbook",
  description:
    "A one-year logbook of my Guillain-Barré Syndrome journey—wheelchair, walker, handwriting recovery, faith, and a return to badminton.",
};

export default function GBSLogbookPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
        {/* Header */}
        <header className="mb-10 border-b pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Life Milestone
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            From a Wheelchair to a Badminton Court: My One-Year GBS Logbook
          </h1>

          <div className="not-prose mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={GBS_IMAGES.header}
                alt="From a wheelchair to a badminton court — one-year GBS logbook"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Day 14 */}
        <section aria-labelledby="day14">
          <h2 id="day14">Day 14: “Life in a Wheelchair”</h2>
          <p>I still remember writing this when everything felt uncertain.</p>

          <blockquote className="border-l-4 border-zinc-300 pl-4 italic dark:border-zinc-600">
            <p>
              “Today marked the 14th day of my fight against GBS. Doctors said those first 14 days were
              crucial—because after that, recovery begins. I had been doing physiotherapy, and
              Alhamdulillah, I was slightly improving. I still couldn’t stand or walk. Typing was hard,
              but I kept fighting, trying to re-educate my muscles.
            </p>
            <p>
              Maybe life was giving me lessons for a new future.
            </p>
            <p>
              It was a strange world: MRIs, NCV tests, neuropathic pain in my legs that wouldn’t let me
              sleep. Some corrupt doctors even told me I was going to die. But I fought back.
              Alhamdulillah, I was feeling better those days.
            </p>
            <p>
              I rescheduled my flight to the US for August. I planned to take a medical release from
              SEVIS and do one online course that semester. I thought I’d need 2–3 more months to fully
              recover. I thanked everyone who took care of me and asked people to keep me in their
              prayers.
            </p>
            <p>
              And I wrote something I truly believed, even in that darkness: every story has a positive
              side. I would be in Bangladesh for the next six months. “You got me here,” I told my
              people. “We’ll have fun, in sha Allah.”
            </p>
            <p>
              Doctors predicted it might have been a reaction to a flu shot in the US—rare, one in a
              million. Guess what? I was that guy.
            </p>
            <p>
              The most terrifying part wasn’t pain. It was the speed at which everything changed: last
              night you’re strong and healthy, and the next day you can’t even move without a
              wheelchair—worse than a 90-year-old man. That experience humbled me. It made me think I
              might build solutions someday from what I was living through.
            </p>
            <p>
              Because we are nothing to boast about. A minute later, we can be nothing.”
            </p>
          </blockquote>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={GBS_IMAGES.day14Wheelchair}
                alt="Photo from Day 14 — life in a wheelchair"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Photo from that time.
            </p>
          </div>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={GBS_IMAGES.fluVaccine}
                alt="Because of my flu vaccine in the USA (picture)"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Because of my flu vaccine in the USA (picture).
            </p>
          </div>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={GBS_IMAGES.feb7Selfie}
                alt="Feb 7, 2025 — I walked alone 100 meters and took a selfie"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Feb 7, 2025: I walked alone without anyone’s help in front of my house road (100 meters) and took a selfie.
            </p>
          </div>
        </section>

        {/* Pen Test */}
        <section aria-labelledby="pentest">
          <h2 id="pentest">The Pen Test</h2>
          <p>
            Then there was handwriting. I couldn’t hold a pen properly. I couldn’t sign like I used to.
            Even now, in December, I still can’t write like before—but I would say it’s about 70% stable now.
          </p>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={GBS_IMAGES.handwritingFeb23}
                alt="My handwriting (Feb 23, 2025)"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              My handwriting (Feb 23, 2025).
            </p>
          </div>

          <div className="not-prose my-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={GBS_IMAGES.walker}
                alt="Walker (photo)"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Walker (photo).
            </p>
          </div>
        </section>

        {/* Eid */}
        <section aria-labelledby="eid">
          <h2 id="eid">Eid-ul-Fitr, Slowed Down</h2>
          <p>
            Eid came, but I didn’t feel like me. GBS had a significant negative impact on my life.
            I felt like a YouTube video playing at 10× slower speed. I walked 10× slower. My productivity,
            my thoughts, everything felt slower. Life itself felt 10× slower.
          </p>
          <p>
            I thought I could offer Eid prayer without a chair, but I was still using one. I asked people to
            pray for my full recovery.
          </p>
        </section>

        {/* Dec 29 story */}
        <section aria-labelledby="dec29">
          <h2 id="dec29">Dec 29: One Year Ago, Everything Changed</h2>
          <p>
            Today is December 29. Today marks one year of my GBS experience.
            Last year, I came to Bangladesh just to enjoy winter vacation with family. I ate biriyani,
            winter pithas, and enjoyed time with them after coming from the USA. But before that—around
            40 days earlier—I had taken COVID shots and flu shots in November.
          </p>
          <p>
            On the night of December 28, I was shopping and meeting friends. Suddenly, I felt exhausted,
            like my legs were too tired to keep me standing. I came home and slept.
          </p>
          <p>
            The next morning, December 29, I felt imbalanced. I thought it was just weakness. While having
            morning tea, the cup fell from my hands because my hand was shaking. I thought maybe it was
            some sickness.
          </p>
          <p>
            Then I went to the bank. While signing, I noticed I couldn’t hold a pen properly. I couldn’t sign
            my documents the way I used to. I became cautious. I started thinking: is this a stroke?
          </p>
          <p>
            I started doing MRIs and tests. And while I was doing those tests, my health kept degrading.
            I fell in the washroom and fractured my leg ligaments. My balance kept collapsing.
          </p>
          <p>
            Over time, it got worse. I couldn’t walk properly, couldn’t climb stairs, couldn’t even feel my legs.
            I felt like a plush doll whose legs had broken—every time I tried to stand, I fell on the floor.
          </p>
          <p>
            The emotional toll was crushing. My flight back to the USA was booked for January 14, 2025.
            I couldn’t think of anything else. Doctors were confused. Then I was forwarded to a neuroscience expert.
          </p>
          <p>
            He examined me. He did electric shocks over my muscles (they call it the NCS test) and then told me:
            I had GBS.
          </p>
          <p>
            They told me to book ICU care. If it went to my lungs and bronchi, I could die if I didn’t get proper
            ICU treatment in time. I was fully bedridden. My fingers rotated backward automatically. I was confused—no
            matter how much I tried, I couldn’t move them.
          </p>
          <p>
            Doctors told me: 80% recover fully. 12–16% recover with some disabilities.
          </p>
          <p>
            Then they talked about immunotherapy or another vaccine treatment. It would cost around USD 8,000 to
            12,000–16,000. I didn’t have that money. I said it clearly: I don’t have it. They told me to keep faith in Allah.
          </p>
          <p>And then the real struggle began.</p>
        </section>

        {/* Physiotherapist */}
        <section aria-labelledby="physio">
          <h2 id="physio">The Physiotherapist Who Changed Everything</h2>
          <p>
            I was devastated. Everyone around me had conspiracies—everyone had their own theories, thoughts, and opinions.
            Then my physiotherapist arrived.
          </p>
          <p>
            His role was groundbreaking. He motivated me, talked to me, and made me believe recovery was possible.
            Because I have an engineer and researcher mindset, I asked him a lot of questions. We discussed everything—his
            patients, other patients, how disability shapes life, how stroke patients live.
          </p>
          <p>
            I learned about hemophilia, hyperkalemia, and many genetic diseases. I learned how people with disability live their lives.
          </p>
          <p>
            And I couldn’t stop fighting. At first, the exercises were small: playing with balls, throwing them, pushing them.
            After around 21 days, I could stand again. After 28 days, I climbed stairs with the help of people.
          </p>
          <p>
            I moved from a wheelchair to a walker. And then my real fight began. Those days were full of painkillers and daily
            physiotherapy sessions—almost two hours a day. So much pain, but I didn’t stop.
          </p>
          <p>
            One day my therapist suggested I start typing again. I typed with the only two fingers I could move. In 10 days,
            my fingers recovered. I could type again.
          </p>
          <p>
            I still remember January 28. Almost one month later, I took a rickshaw ride with my mother to a bank for paperwork.
            It was my first time outside after a month—sitting in a rickshaw, feeling the wind, feeling life again.
          </p>
        </section>

        {/* Probability & Faith */}
        <section aria-labelledby="faith">
          <h2 id="faith">Probability, Faith, and a New Mindset</h2>
          <p>
            We value life and health so little that we take them for granted. But that is not true. Life is precious.
            In 2024, I had an advanced statistics course at Marshall University for my PhD. While learning, I understood how
            probability works—how dependencies work.
          </p>
          <p>
            The flu vaccine said there is a 0.01% test of significance of being GBS in 20 million people… and I was that one person.
          </p>
          <p>
            I missed my flight back to the USA and stayed on early authorized withdrawal for the whole year. I planned only 25 days
            of winter vacation. I have been here for a year.
          </p>
          <p>
            I used to believe if you focus and do your work, you will achieve things. Straightforward. But as days passed, I realized
            it’s not always true. Luck exists. Probability exists. There are dependable events around us that can happen or may happen—we
            just don’t calculate them.
          </p>
          <p>
            This made me a stronger believer. As a Muslim, I believe in Allah, and I believe Allah controls everything. It reduced my
            load. I accepted my fate. It was mentally liberating.
          </p>
          <p>
            I was near death, near the deathbed. I saw how helpless an 80-year-old bedridden person can be. I felt that. I felt how
            cursed disability can be.
          </p>
          <p>
            I think GBS happened to me for a reason—maybe to give something to this world. Maybe I don’t know now. But after 10 years,
            maybe I will look back and connect the dots—like Steve Jobs said.
          </p>
          <p>
            My parents wanted me to become a doctor when I was a child. I tried, but I never could get admitted into medical college
            because of how competitive Bangladesh is. Now I truly understand how important researchers are. There are many diseases around
            us. Without researchers, no one invents cures. Without entrepreneurs, those cures never become affordable or accessible. Doctors
            are on the front line—we only see them. We don’t see the ecosystem enablers.
          </p>
          <p>
            This GBS refined my mindset. I am almost 28 now. Another 28 years, if I am fortunate, will belong to science. Having
            experienced mortality and paralysis, I know the fragility of what we take for granted—the ability to move, to contribute, to be
            heard. I want to conduct research that leaves the world more just, more accessible, more thoughtful.
          </p>
        </section>

        {/* Where I Am Now */}
        <section aria-labelledby="now">
          <h2 id="now">Where I Am Now</h2>
          <p>
            In almost six months, I recovered about 60–70%. Now I still have muscle issues. Some muscles are weaker. Sometimes my hands or
            some muscles shake due to imbalance. I still do physiotherapy sometimes. There was a two-day event where I didn’t eat on time and
            my full body started shaking and I couldn’t stop—maybe some pre-diabetic situation—because GBS made my muscles weaker.
          </p>
          <p>
            I would say I am about 80% recovered now. I don’t know whether I will be fully recovered or not. Or whether I am within that 16%
            who remain disabled.
          </p>
          <p>
            I still pray sitting on a chair. I hope I can do tashahud in prayer again (in this position, the worshiper kneels on the floor,
            usually on a prayer mat. Legs: typically sitting on the left foot laid flat on the ground, while the right foot is upright with
            toes facing forward toward Mecca—called Iftirash. Hands on the thighs or knees). My legs are still weak.
          </p>
          <p>
            I gained a lot of weight during this time. I started dieting to reduce weight.
          </p>
        </section>

        {/* Badminton */}
        <section aria-labelledby="badminton">
          <h2 id="badminton">The Badminton Chapter</h2>
          <p>
            And here is the part that feels like a miracle to me: I started playing badminton about a month ago. Now I play every day for at
            least 30–45 minutes. I can feel the goodness. I can feel improvement.
          </p>
          <p>
            A few weeks ago, I met someone who worked in pharma supply chain. He was amazed and motivated to see me. He said: “I have seen a
            lot of people die in GBS. You gave me different motivation. My belief has changed. You are a good case study.”
          </p>
          <p>
            That sentence stayed with me. So I decided to share a year logbook of GBS through this blog—if it helps someone, if it provokes
            thought in someone, then it’s worth it.
          </p>
          <p>Happy New Year, and keep me in your prayers.</p>
         

          <YouTubeEmbed videoId="XK4rW8QSrsI" title="Me playing badminton (Dec 2024)" />

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={GBS_IMAGES.badminton1}
                alt="Badminton photo 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
              <NextImage
                src={GBS_IMAGES.badminton2}
                alt="Badminton photo 2"
                fill
                className="object-cover"
              />
            </div>
            <p className="sm:col-span-2 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Photos from badminton days.
            </p>
          </div>

          <p>
            A year ago, I couldn’t stand. Today, I can play again.
          </p>
        </section>
      </article>
    </main>
  );
}
