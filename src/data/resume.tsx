import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ruhul Ameen",
  initials: "RA",
  url: "https://ameenruhul.site",              // or your custom domain
  location: "Rajshahi, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Rajshahi,+Bangladesh",
  description:
    "Innovator - Researcher- Entrepreneur",
    summary:
  `I’m Mohd. Ruhul Ameen—a researcher, engineer, and builder working at the intersection of Human–Computer Interaction, AI/ML, and IoT systems. My work centers on designing technology that meaningfully improves lives, especially in education, agriculture, and digital well-being. I’ve always been drawn to hands-on creation—whether it’s writing ideas, building devices, or exploring new concepts—and I unwind by diving into research, tinkering, or playing CS2.

  My journey is shaped by community, curiosity, and a deep commitment to impact. As a co-founder of Arduino Community Bangladesh, I’ve spent years training students in electronics, robotics, and programming—working toward a mission of empowering 200,000 young makers by 2029. I write accessible engineering books in Bengali, including Arduino Te Hatekhori and Hoye Utho Ekjon Problem Solver, which have helped thousands of beginners enter the world of STEM. A formative experience was my participation in the Sakura Science Exchange Program in Japan, where exposure to precision-driven and human-centered design reshaped how I think about technology.

  I continued expanding this mission through Tinkers Technologies Limited, an EdTech startup I co-founded to make learning more playful and inclusive. Our products—Tinkers AmarVasha (AR Bengali alphabet learning), Tinkers RoboKids, and Tinkers QuizHero—focus on culturally grounded, engaging learning experiences for children. Alongside this, my volunteer work with the U.S. Embassy Dhaka and Ministry of ICT Bangladesh allowed me to train teachers and students nationwide in Scratch, Arduino, and digital literacy—reinforcing my belief that technology becomes transformative when it is accessible.

  I am 28 now, and if I am fortunate to live another 28 years, I want to spend them contributing to research that matters. For me, research is no longer just a career path; it is an act of agency. After losing, then slowly regaining, the ability to walk, type, and move, I began to treat every paper as a proof of life—each experiment a brushstroke, each accepted work a small signature of survival. That experience rewired how I see science: not as a race for publications, but as a way to transform constraint into contribution, and to leave behind tools, systems, and ideas that help others move more freely through the world. I want my work to make technology more just, more accessible, and more thoughtful—so that the next person facing limits finds, in some small way, that the world has already bent a little in their favor.

`,

avatarUrl: "me.jpg",

 
  skills: [
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Hugging Face",
  "XGBoost",
  "LangChain",
  "LangGraph",
  "CrewAI",
  "AutoGen",
  "LlamaIndex",
  "Vector Databases (Pinecone, Chroma, Weaviate)",
  "Computer Vision",
  "Natural Language Processing (NLP)",
  "Generative AI",
  "Prompt Engineering",
  "Model Fine-tuning & Quantization",

  // Web, Data & Cloud Infrastructure
  "React.js",
  "Node.js",
  "FastAPI",
  "Flask",
  "RESTful & GraphQL APIs",
  "Pandas",
  "NumPy",
  "SQL/NoSQL (PostgreSQL, MongoDB, Redis)",
  "AWS (Cloud Services)",
  "Docker",
  "CI/CD (GitHub Actions)",
  "Tailwind CSS",

  // IoT & Embedded Systems Engineering
  "Arduino",
  "ESP32",
  "STM32",
  "Raspberry Pi",
  "MQTT",
  "LoRa",
  "AWS IoT Core",

  // Design, Fabrication & Prototyping
  "Figma",
  "Adobe Illustrator",
  "EasyEDA",
  "Fusion 360",
  "3D Printing"
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ,
  ],

  contact: {
    email: "ameen@marshall.edu",
    tel: "+1 (304) 840-6562",
    social: {
      
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ameenruhul", // change if needed
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/ameenruhul221b/", // change if needed
        // use globe for now unless you add a Facebook icon in icons.ts
        icon: Icons.facebook,
        navbar: true,
      },
      GoogleScholar: {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=XjUTFvgAAAAJ&hl=en", // paste your profile URL here
        icon: Icons.scholar,
        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:ameen@marshall.edu",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  // … previous fields …

work: [

  {
  company: "Marshall University",
  href: "https://www.marshall.edu",
  badges: [],
  location: "Huntington, WV, USA",
  title: "Graduate Research Assistant",
  logoUrl: "/marshall-logo.png",
  start: "2024",
  end: "2025",
  description:
    "Worked as a Graduate Research Assistant in the College of Engineering & Computer Science (CECS), focusing on urban heat-island detection in cities and digital-twin modelling for engineering/ construction systems.",
},

  {
    company: "Tinkers Technologies Limited",
    href: "", // optionally add company URL
    badges: [],
    location: "Dhaka, Bangladesh",
    title: "Managing Director & CEO",
    logoUrl: "/tinkers-logo.png", // adjust path if you have logo
    start: "Sept 2020",
    end: "Oct 2023",
    description:
      "Led an ed-tech company dedicated to enhancing childhood STEM experiences with flagship product Tinkers Amar Vasha. Charted strategic vision for the platform, conducted market & user research, led UI/UX design, managed product roadmap, secured stakeholder buy-in, devised monetization and promotion strategies, optimized platform through testing & feedback, managed resources, and fostered strategic partnerships.",
  },
  {
    company: "Arduino Community Bangladesh",
    href: "", // optionally add URL
    badges: [],
    location: "Rajshahi, Bangladesh",
    title: "Co-Founder & Community Manager",
    logoUrl: "/arduino-cb-logo.png", // adjust path if needed
    start: "April 2017",
    end: "Present",
    description:
      "Co-founded a vibrant network committed to expanding technology education in electronics, robotics, programming and IoT. Mission to empower 200,000 young makers by 2029 through stimulating Arduino experiences. Organized workshops & events, recruited and trained teams, developed project ideas, collaborated with sponsors, designed event materials, led community meet-ups and institutional workshops.",
  },
  {
    company: "American Center, U.S. Embassy Dhaka",
    href: "", 
    badges: [],
    location: "Dhaka, Bangladesh",
    title: "Facilitator",
    logoUrl: "", 
    start: "2020",
    end: "2021",
    description:
      "Facilitated ‘Learn Arduino with TinkerCad’ (March 2020), ‘Scratch Programming Language for Beginners’ (July 2020), ‘Hour of Code’ (December 2020), ‘Learn Arduino with TinkerCad, Advanced’ (January 2021).",
  },
  {
    company: "Ministry of Posts, Telecommunications & Information Technology, Govt. of Bangladesh",
    href: "",
    badges: [],
    location: "Rajshahi & Rangpur Zones, Bangladesh",
    title: "Trainer – ICT Training for Primary School Teachers",
    logoUrl: "",
    start: "2022",
    end: "",
    description:
      "Trained primary school teachers in ICT and digital literacy across Rajshahi and Rangpur zones.",
  },
  // You can add your ongoing Graduate Research Assistant role similarly
],
education: [
  {
    school: "Marshall University",
    href: "https://www.marshall.edu",
    degree: "PhD in Engineering – Currently on Authorized Leave of Absence",
    logoUrl: "/marshall-logo.png",
    start: "Fall 2024",
    end: "Present",
    description:
      "College of Engineering and Computer Science, Arthur Weisberg Family Applied Engineering Complex, USA. Entered the PhD programme in Fall 2024; currently on authorised medical withdrawal (Guillain–Barré Syndrome) – fully recovered and preparing to resume doctoral studies in Fall 2026 at a new institution.",
  },
  {
    school: "University of Rajshahi",
    href: "https://www.ru.ac.bd",
    degree: "MSc in Computer Science & Engineering",
    logoUrl: "/ru-logo.png",
    start: "2021",
    end: "2023",
    description:
      "Relevant coursework: Research Methodology, Bioinformatics, Biometrics, Data Mining, Human–Computer Interaction, Advanced Computer Networks, Cloud Computing. CGPA: 3.82/4.00.",
  },
  {
    school: "University of Rajshahi",
    href: "https://www.ru.ac.bd",
    degree: "BSc in Computer Science & Engineering",
    logoUrl: "/ru-logo.png",
    start: "2016",
    end: "2019",
    description:
      "CGPA: 3.42/4.00; Undergraduate research included AR children’s-book & toy for interactive learning (Bornomala AR) and other VR text-entry studies.",
  },
],
achievements: [
  {
    title: "Dean’s Award",
    year: 2020,
    issuer: "University of Rajshahi",
    description: ""
  },
  {
    title: "Winner – Bangabandhu Innovation Grant (BIG)",
    year: 2021,
    issuer: "Ministry of ICT Bangladesh",
    description: ""
  },
  {
    title: "Champion – BYLC Youth Entrepreneurship Challenge",
    year: 2020,
    issuer: "Bangladesh Youth Leadership Center",
    description: ""
  },
  {
    title: "2nd Runner-Up – Databird Launchpad",
    year: 2021,
    issuer: "Data Bird Ltd.",
    description: ""
  },
  {
    title: "1st Runner-Up – MediaTech Hackathon (Bootcamp)",
    year: 2019,
    issuer: "Deutsche Welle",
    description: ""
  },
  {
    title: "Champion – Hackathon, SUST CSE Carnival",
    year: 2017,
    issuer: "Shahjalal University of Science and Technology",
    description: ""
  },
  {
    title: "Champion – RUSC Science Fiesta",
    year: 2017,
    issuer: "Rajshahi University Science Club",
    description: ""
  },
  {
    title: "1st Runner-Up – RUSC Science Fiesta",
    year: 2016,
    issuer: "Rajshahi University Science Club",
    description: ""
  },
],
// … then close with } as const;

  
  buildProjects: [
  {
    title: "Smart Water Pump Controller for Farmers",
    dates: "2021 – 2023",
    description:
      "Designed a low-cost smart pump controller using IoT sensors to automate irrigation cycles and reduce electricity/water waste for rural farmers.",
    image: "pump.jpg",
    href: "/blog/project1"
  },


  {
    title: "Automated Irrigation System for BAT Bangladesh",
    dates: "2025",
    description:
      "Designed and deployed a Smart-Agri pump controller using ESP32-S3, dual-sensor logic (soil moisture + air humidity), rugged enclosures, and off-grid solar power for field operations.",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczNISibPWWNnQAMKLMdMPGoDivRwqf9dHzwAfHBeQ9Tfw-pdoSfKdYGvHTnd-kO_poBxszAE-xEpLHMDIw1gVQ6ybkyihVXdGZoyaNy_MI6GrC6trfsoNRpA4fQdezlmL9ID0Bi7Aq2pQFlNM8b3NTcaVw=w642-h857-s-no-gm?authuser=0",
    href: "/blog/project2",
  },
  {
    title: "ESP32 vs. Fuel Thieves: Digitizing Legacy Trucks",
    dates: "2024 – 2025",
    description:
      "Created a sub-$50 ESP32 telemetry retrofit for analog trucks to detect fuel theft using fuel-sender digitization, GPS+IMU context, and store-and-forward uploads—validated in a 6-week field test.",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczMytHSoMcUhky2NcgYmMPKVHj75BjU-q0ujURhGyWGutcL6osyuOeTAzU1WDwZXsc0piy4cfur1TGYLbfG2UJt3FIs__lR_Q3fLAnpXCuRDmAp8-VuGJTxdNGWHHTqUB5maiEZc6YHyb8JsBkcSuCNB5Q=w642-h857-s-no-gm?authuser=0",
    href: "/blog/project3",
  },
  {
    title: "Ruhul Bikes V1: Made in Rajshahi",
    dates: "2024 – 2025",
    description:
      "Built a self-funded electric bike prototype in Rajshahi focused on high torque, delivery-rider utility, and safety-limited testing—turning a wild concept into a rideable machine.",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczPv6BQJLl9ZQtbFD_J8B82Qsl_UYZ3n2dJ39NxaVxMOlgMQuKbnQ6quCl1oaefRGom-OERSGIrXN92XHevU1Z9xcJzEmUPJ50pGqan64iVmLcZWCxgjyF_Ys89HatdvCSRNhbY48EC-U0BzRNHYRqQqeg=w642-h857-s-no-gm?authuser=0",
    href: "/blog/project4",
  },{
    title: 'Digitizing the "Curing" Process for BAT Bangladesh',
    dates: "2025",
    description:
      "Developed an IoT-enabled barn automation system for post-harvest tobacco curing, combining temperature/humidity control, damper automation, hybrid keypad+touchscreen UI, and a centralized analytics dashboard.",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczPUWJ1b5hEtfxQu2XqApI9-7bo8ZEUEs5QXA0gIj1PZCbTMD1uFGRK4v_YdatRIC9BD5tmCU_z50OPpzk86SYEvSNXSMQ6z3ad9HdN_-BLYv4pjBBRHO8AK6wgTgwA1lPfFFVZqtJo06jDm4OcrPVPR4g=w1142-h857-s-no-gm?authuser=0",
    href: "/blog/project5",
  }, 
 
  
],
 caseStudies: [
  {
    title: "Chapter 1: Arduino Community Bangladesh",
    href: "/blog/chapter1",
    dates: "2017 – Present",
    brief:
      "Co-founded a grassroots maker community to make electronics and robotics accessible for young people across Bangladesh through workshops, campus events, and open-source materials.",
    tags: ["Community Education", "Robotics", "IoT", "STEM Outreach"],
    image: "/ardubd.jpg",
    links: [
      {
        type: "Project Site",
        href: "https://arduino-community-bd.org",
        icon: Icons.globe,
      },
    ],
  },
  {
    title: "Chapter 2: The Toolkit – Where Your Journey Begins",
    href: "/blog/chapter2",
    dates: "2018 – Present",
    brief:
      "Authoring Bengali-language Arduino books (“Arduino Te Hatekhori” & “Hoye Utho Ekjon Problem Solver”) to lower the entry barrier to embedded systems for first-generation learners.",
    tags: [
      "Embedded Systems",
      "Publishing",
      "STEM Education",
      "Bengali Language",
    ],
    image: "/books.jpg",
    links: [
      {
        type: "Books",
        href: "/blog/chapter2",
        icon: Icons.globe,
      },
    ],
  },
  {
    title:
      "Chapter 3: Children are Flowers – How 7 Days in Japan Inspired My Entrepreneurial Journey",
    href: "/blog/chapter3",
    dates: "Visiting Student · 2019",
    brief:
      "A formative experience that reshaped how I think about precision engineering, documentation, and responsibility in research labs through the Sakura Science Exchange Program in Japan.",
    tags: [
      "Precision Engineering",
      "International Exchange",
      "Research Experience",
    ],
    image: "/japan.jpg",
    links: [
      {
        type: "Case Study",
        href: "/blog/chapter3",
        icon: Icons.globe,
      },
    ],
  },
  {
    title: "Chapter 4: Tinkers Technologies Ltd – EdTech & Playful Learning",
    href: "/blog/chapter4",
    dates: "2020 – 2023",
    brief:
      "Led an EdTech startup building play-based, culturally grounded STEM tools (Tinkers AmarVasha, RoboKids, QuizHero) to make learning inclusive and engaging for kids in Bangladesh.",
    tags: ["EdTech", "UX Design", "Children's Learning", "Startup"],
    image: "/bylc.jpg",
    links: [
      {
        type: "Case Study",
        href: "/blog/chapter4",
        icon: Icons.globe,
      },
    ],
  },
  {
  title: "Chapter 5: From a Wheelchair to a Badminton Court – My One-Year GBS Logbook",
  href: "/blog/chapter5",
  dates: "Dec 2024 – Dec 2025",
  brief:
    "A one-year personal logbook of my Guillain–Barré Syndrome journey—sudden paralysis, ICU fear, physiotherapy, faith, and a gradual return to movement, ending with me playing badminton again.",
  tags: ["GBS Recovery", "Resilience", "Physiotherapy", "Faith", "Life Milestone"],
  image:
    "https://lh3.googleusercontent.com/pw/AP1GczPrYYAu3JC-UtGQ38M1dMmtcBlEZ3EYF65bpTPCiUFhSRZRvwl54WxP6GGlkcK3zw6EHB1IcCnWy-FEckoVFZzPuRcD8EYnTbD1Z7UonGNggMtnKFqugmahaAnPOAmSTu8tUfrwKTpGNDn1aM6WIJcNTA=w1142-h857-s-no-gm?authuser=0",
  links: [
    {
      type: "Read Chapter",
      href: "/blog/chapter5",
      icon: Icons.globe,
    },
  ],
},
  
] as const,
} as const;
