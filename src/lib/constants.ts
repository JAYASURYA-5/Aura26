export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1PSllKpTmE-z_ojwcDtMaHyjMstHON7o8e0XcakZF7EAhPw/viewform?usp=sharing&ouid=115146890674878936404";

export const EVENT_DATE = new Date("2026-03-15T09:00:00");

export interface DepartmentEvent {
  name: string;
  description: string;
  rules: string[];
  teamSize: string;
  prize: string;
  coordinator: { name: string; phone: string };
  category: "technical" | "non-technical";
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  description: string;
  events: DepartmentEvent[];
}

export const departments: Department[] = [
  {
    id: "it",
    name: "Information Technology",
    shortName: "IT",
    icon: "🌐",
    color: "from-green-400 to-cyan-500",
    description: "Dive into the world of networks, databases, and web technologies that connect the globe",
    events: [
      { name: "Paper Presentation", description: "Present your research paper on emerging IT trends and technologies.", rules: [
        "A maximum of 4 members are allowed per team.",
        "Time limit: 5 minutes for presentation + 2 minutes for Q&A session.",
        "The PowerPoint presentation (PPT) must be submitted before the specified deadline.",
        "Evaluation will be based on content quality, clarity, and presentation skills."
      ], teamSize: "1-4", prize: "1st: ₹1,500 | 2nd: ₹1,000", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Tech Quest", description: "A thrilling technical treasure hunt combining coding puzzles and logical reasoning.", rules: [
        "Each team must consist of 4 members.",
        "The event will include multiple rounds such as MCQ, Buzzer, and Rapid Fire.",
        "The use of mobile phones or any electronic gadgets is not permitted.",
        "Points will be awarded for each correct answer."
      ], teamSize: "4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "BugSmash", description: "Find and fix bugs in code snippets across multiple programming languages.", rules: [
        "Participants may compete individually or in teams of two members.",
        "The time limit is 45–60 minutes.",
        "The use of mobile phones or internet access is strictly prohibited.",
        "Scoring will be based on the number of bugs correctly fixed.",
        "Any form of malpractice will result in immediate disqualification."
      ], teamSize: "1-2", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Short Film", description: "Compete with yourself, and you’ll never lose.", rules: [
        "Maximum 3–5 members per team.",
        "Duration: 5–10 minutes only.",
        "Film must be original (no copied content).",
        "Vulgar, offensive, or inappropriate content is strictly prohibited."
      ], teamSize: "3-5", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "non-technical" },
    ],
  },
  {
    id: "ece",
    name: "Electronics and Communication Engineering",
    shortName: "ECE",
    icon: "📡",
    color: "from-yellow-400 to-orange-500",
    description: "From circuit design to signal processing — innovate at the intersection of hardware and communication",
    events: [
      { name: "Paper Presentation", description: "Present innovative research on electronics and communication topics.", rules: [
        "A maximum of 4 members are allowed per team.",
        "Time limit: 5 minutes for presentation + 2 minutes for Q&A session.",
        "The PowerPoint presentation (PPT) must be submitted before the specified deadline.",
        "Evaluation will be based on content quality, clarity, and presentation skills."
      ], teamSize: "1-4", prize: "1st: ₹1,500 | 2nd: ₹1,000", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Circuit Debugging", description: "Identify and fix errors in electronic circuits under time pressure.", rules: ["Teams of 2-4", "Components provided", "Timed challenge"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Robo Race / Line Follower", description: "Build and race robots through an obstacle course or follow a line track.", rules: ["Teams of 2-4", "Bring your own bot", "No remote jamming"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Squid Game", description: "A fun recreation of popular Squid Game challenges with a tech twist.", rules: ["Teams of 2-4", "Multiple elimination rounds", "Physical + mental challenges"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "non-technical" },
    ],
  },
  {
    id: "eee",
    name: "Electrical and Electronics Engineering",
    shortName: "EEE",
    icon: "⚡",
    color: "from-amber-400 to-yellow-500",
    description: "Power systems, renewable energy, and smart grids — electrify the future",
    events: [
      { name: "Paper Presentation", description: "Present your research on electrical engineering advancements and innovations.", rules: [
        "A maximum of 4 members are allowed per team.",
        "Time limit: 5 minutes for presentation + 2 minutes for Q&A session.",
        "The PowerPoint presentation (PPT) must be submitted before the specified deadline.",
        "Evaluation will be based on content quality, clarity, and presentation skills."
      ], teamSize: "1-4", prize: "1st: ₹1,500 | 2nd: ₹1,000", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Circuit Debugging", description: "Identify and fix errors in electronic circuits under time pressure.", rules: ["Teams of 2-4", "Components provided", "Timed challenge"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Robo Race / Line Follower", description: "Build and race robots through an obstacle course or follow a line track.", rules: ["Teams of 2-4", "Bring your own bot", "No remote jamming"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Connections", description: "Connect the clues to find the answer — a fun general knowledge event.", rules: ["Teams of 2-4", "3 rounds", "General knowledge based"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "non-technical" },
    ],
  },
  {
    id: "cse",
    name: "Computer Science and Engineering",
    shortName: "CSE",
    icon: "💻",
    color: "from-cyan-500 to-blue-600",
    description: "Explore the frontiers of computing — from AI and machine learning to cybersecurity and blockchain",
    events: [
      { name: "Paper Presentation", description: "Present cutting-edge research in computer science and engineering.", rules: [
        "A maximum of 4 members are allowed per team.",
        "Time limit: 5 minutes for presentation + 2 minutes for Q&A session.",
        "The PowerPoint presentation (PPT) must be submitted before the specified deadline.",
        "Evaluation will be based on content quality, clarity, and presentation skills."
      ], teamSize: "1-4", prize: "1st: ₹1,500 | 2nd: ₹1,000", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Code Debugging", description: "Find and fix bugs in code across multiple programming challenges.", rules: ["Teams of 2-4", "Timed rounds", "Multiple languages"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Design Challenge", description: "Create stunning UI/UX designs for given problem statements.", rules: ["Teams of 2-4", "Any design tool allowed", "2-hour time limit"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Photography", description: "Capture the best moments — a creative photography competition.", rules: ["Teams of 2-4", "Mobile or DSLR allowed", "Theme revealed on spot"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "non-technical" },
    ],
  },
  {
    id: "aids",
    name: "Artificial Intelligence & Data Science",
    shortName: "AI&DS",
    icon: "🤖",
    color: "from-violet-500 to-purple-600",
    description: "Harness the power of AI, machine learning, and data science to shape the intelligent future",
    events: [
      { name: "Paper Presentation", description: "Present innovative research on AI, ML, and data science topics.", rules: [
        "A maximum of 4 members are allowed per team.",
        "Time limit: 5 minutes for presentation + 2 minutes for Q&A session.",
        "The PowerPoint presentation (PPT) must be submitted before the specified deadline.",
        "Evaluation will be based on content quality, clarity, and presentation skills."
      ], teamSize: "1-4", prize: "1st: ₹1,500 | 2nd: ₹1,000", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Workshop", description: "Hands-on workshop on trending AI/ML tools and technologies.", rules: [
        "Individual participation.",
        "Prior registration is required.",
        "Bring laptop, charger, and notebook.",
        "Follow the resource person's instructions.",
        "Full attendance is mandatory to receive certificate.",
        "Maintain discipline throughout the session."
      ], teamSize: "1", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Reverse Coding", description: "Given the output, write the code — a reverse engineering challenge.", rules: [
        "Individual participation.",
        "Solve given output and write the code.",
        "Time limit: 45–60 minutes.",
        "Any programming knowledge allowed (any language).",
        "No internet access.",
        "Evaluated based on accuracy and logic."
      ], teamSize: "1", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "AI Mimic (Prompting)", description: "Master the art of AI prompting — compete to generate the best AI outputs.", rules: [
        "Solo / Duo participation allowed.",
        "3–5 minutes performance.",
        "Mimic AI tools / robots creatively.",
        "No vulgar content.",
        "Simple props allowed.",
        "Evaluation based on Creativity, Originality, Voice Modulation, and Stage Presence."
      ], teamSize: "1-2", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "non-technical" },
    ],
  },
  {
    id: "civil",
    name: "Civil Engineering",
    shortName: "CIVIL",
    icon: "🏗️",
    color: "from-emerald-500 to-teal-500",
    description: "Build the infrastructure of tomorrow — sustainable, resilient, and innovative",
    events: [
      { name: "Paper Presentation", description: "Present research on civil engineering innovations and sustainable construction.", rules: [
        "A maximum of 4 members are allowed per team.",
        "Time limit: 5 minutes for presentation + 2 minutes for Q&A session.",
        "The PowerPoint presentation (PPT) must be submitted before the specified deadline.",
        "Evaluation will be based on content quality, clarity, and presentation skills."
      ], teamSize: "1-4", prize: "1st: ₹1,500 | 2nd: ₹1,000", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Tech Hunt", description: "A tech-themed treasure hunt across the campus with engineering clues.", rules: ["Teams of 2-4", "Clues based on civil concepts", "First to finish wins"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Bridge-It", description: "Design and build the strongest bridge using limited materials.", rules: ["Teams of 2-4", "Materials provided", "Load testing evaluation"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Connections", description: "Connect the clues to find the answer — a fun general knowledge event.", rules: ["Teams of 2-4", "3 rounds", "General knowledge based"], teamSize: "2-4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "non-technical" },
    ],
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    shortName: "MECH",
    icon: "⚙️",
    color: "from-red-500 to-orange-500",
    description: "From thermodynamics to robotics — engineering solutions that move the world",
    events: [
      { name: "Paper Presentation", description: "Present research on mechanical engineering innovations and design.", rules: [
        "A maximum of 4 members are allowed per team.",
        "Time limit: 5 minutes for presentation + 2 minutes for Q&A session.",
        "The PowerPoint presentation (PPT) must be submitted before the specified deadline.",
        "Evaluation will be based on content quality, clarity, and presentation skills."
      ], teamSize: "1-4", prize: "1st: ₹1,500 | 2nd: ₹1,000", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Mr. MECHANICAL (CAD+CAM)", description: "Hands‑on CAD modeling challenge using SOLIDWORKS.", rules: [
        "Software Tool: SOLIDWORKS",
        "Participants are allowed to use their laptops, and system will be provided if required.",
        "A 2D drawing will be provided and Participants must create 3D model with Proper dimensions.",
        "Time limit: 45–60 minutes"
      ], teamSize: "1", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "Water Rocketry", description: "Build and launch water rockets with plastic bottles.", rules: [
        "Team of 4 members",
        "Rocket body must be made from plastic bottles only",
        "Maximum bottle capacity: 1 or 2 litres",
        "Two attempts will be given per team",
        "Unsafe rockets will be rejected"
      ], teamSize: "4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "technical" },
      { name: "E-SPORTS - Free Fire", description: "Competitive Free Fire gaming tournament.", rules: [
        "Team of 4 members",
        "No external hacks, mods, or unfair tools",
        "Solo/squad mode (if applicable) will be announced based on the participant strength.",
        "No character skill",
        "No gun skin",
        "No rules match",
        "No Emote"
      ], teamSize: "4", prize: "Certificates", coordinator: { name: "", phone: "" }, category: "non-technical" },
    ],
  },
];

export const getAllEvents = () =>
  departments.flatMap((dept) =>
    dept.events.map((event) => ({ ...event, departmentId: dept.id, departmentName: dept.name, departmentShortName: dept.shortName }))
  );
