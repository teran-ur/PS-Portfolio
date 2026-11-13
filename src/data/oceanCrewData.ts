export interface OceanCrewTeamMember {
  number: string;
  name: string;
  saNumber: string;
  isCurrentUser?: boolean;
}

export interface OceanCrewObjective {
  number: string;
  title: string;
  focus: string;
}

export interface OceanCrewActivity {
  number: string;
  title: string;
  description: string;
  image: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  category: "Sanctuary Maintenance" | "Direct Care" | "Education" | "Community";
}

export interface OceanCrewBudgetItem {
  number: string;
  expense: string;
  costPerStudent: number;
  noOfStudents: number;
  totalCost: number;
  purpose: string;
}

export interface OceanCrewGalleryImage {
  id: string;
  src: string;
  caption: string;
  category: string;
  aspectRatio: "portrait" | "landscape" | "square" | "wide";
  activityRef?: string;
}

export const OCEAN_CREW_DATA = {
  projectTitle: "Turtle Conservation & Community Service Project",
  groupName: "Ocean Crew",
  institution: "SLIIT City Uni",
  module: "Professional Skills",
  numberOfStudents: 10,
  purpose:
    "To contribute to turtle care and conservation while gaining practical experience in community engagement, teamwork and professional responsibility.",
  background:
    "As part of the Professional Skills module, Ocean Crew participated in a community service project at a turtle sanctuary. The project was organized to provide practical experience in community engagement while contributing to the care and protection of turtles. During the visit, the group actively participated in various activities related to turtle care and sanctuary maintenance. These activities provided an opportunity to work together as a team, interact with the sanctuary environment, and gain a better understanding of the responsibilities involved in protecting marine life. The project also allowed us to learn about turtles, their needs, their challenges, and the importance of conservation. In addition to volunteering our time and effort, the group made a small financial contribution to support the sanctuary.",
  videoUrl: "https://drive.google.com/file/d/1T2QgYD90kR0_gdiiLhMDJ2GN8Yhqidhc/view?usp=drivesdk",
  videoEmbedUrl: "https://drive.google.com/file/d/1T2QgYD90kR0_gdiiLhMDJ2GN8Yhqidhc/preview",
  videoQrCode: "/images/ocean-crew/video-qr-code.png",
  reportPdfUrl: "/documents/psproject.pdf",

  objectives: [
    {
      number: "01",
      title: "Care & Wellbeing",
      focus: "To contribute to the care and wellbeing of turtles.",
    },
    {
      number: "02",
      title: "Sanctuary Maintenance",
      focus: "To assist in maintaining a clean and suitable environment for the turtles.",
    },
    {
      number: "03",
      title: "Conservation Knowledge",
      focus: "To gain practical knowledge about turtles and their conservation.",
    },
    {
      number: "04",
      title: "Teamwork & Communication",
      focus: "To develop teamwork and communication skills through practical activities.",
    },
    {
      number: "05",
      title: "Environmental Responsibility",
      focus: "To develop a greater sense of environmental and social responsibility.",
    },
    {
      number: "06",
      title: "Community Engagement",
      focus: "To gain practical experience in community service and professional engagement.",
    },
    {
      number: "07",
      title: "Financial Support",
      focus: "To provide financial support to the turtle sanctuary through a group contribution.",
    },
  ] as OceanCrewObjective[],

  activities: [
    {
      number: "01",
      title: "Sanctuary Cleaning",
      description: "Cleaned and maintained areas within the turtle sanctuary, scrubbing pools and clearing surrounding premises.",
      image: "/images/ocean-crew/sanctuary-cleaning-scrub.jpeg",
      category: "Sanctuary Maintenance",
    },
    {
      number: "02",
      title: "Turtle Cleaning & Care",
      description: "Assisted with cleaning and gently caring for the rescued turtles using fresh water and soft brushes on their carapaces.",
      image: "/images/ocean-crew/turtle-cleaning-brush.jpeg",
      category: "Direct Care",
    },
    {
      number: "03",
      title: "Feeding Turtles",
      description: "Fed the turtles individually under the direct supervision and guidance of sanctuary conservation staff.",
      image: "/images/ocean-crew/turtle-feeding-tongs-1.jpeg",
      category: "Direct Care",
    },
    {
      number: "04",
      title: "Applying Medication",
      description: "Assisted with applying necessary antiseptic spray and medication to injured turtles under appropriate sanctuary guidance.",
      image: "/images/ocean-crew/turtle-medication-spray.jpeg",
      category: "Direct Care",
    },
    {
      number: "05",
      title: "Learning About Turtles",
      description: "Learned directly about turtle anatomy, behavioral dynamics, incubation cycles, and long-term conservation challenges.",
      image: "/images/ocean-crew/learning-turtle-egg.jpeg",
      category: "Education",
    },
    {
      number: "06",
      title: "Environmental Awareness",
      description: "Gained a deeper understanding of marine ecology threats including fishing net entanglement, boat strikes, and plastic pollution.",
      image: "/images/ocean-crew/environmental-threats-chart.jpeg",
      category: "Education",
    },
    {
      number: "07",
      title: "Donation & Support",
      description: "Provided a financial contribution of LKR 5,000 from the student group to directly support sanctuary feeding and veterinary upkeep.",
      image: "/images/ocean-crew/sanctuary-pamphlet-ticket.jpeg",
      category: "Community",
    },
    {
      number: "08",
      title: "Teamwork & Collaboration",
      description: "Worked together as Ocean Crew, dividing roles responsibly to ensure all conservation and sanctuary tasks were completed safely.",
      image: "/images/ocean-crew/group-holding-turtle.jpeg",
      category: "Community",
    },
  ] as OceanCrewActivity[],

  outcomes: {
    summary:
      "Through this project, Ocean Crew was able to make a practical contribution to the turtle sanctuary while gaining valuable personal and professional experience. The activities helped us improve our ability to work as a team, communicate effectively, take responsibility, and participate in a community-based activity.",
    extended:
      "The experience also increased our awareness of turtle conservation and the importance of protecting marine life. Most importantly, it allowed us to understand how even a small contribution of time, effort, and resources can support animal welfare and the wider community.",
    competencyBridges: [
      {
        skill: "Interpersonal Teamwork",
        detail: "Coordinating task handoffs between cleaning, medication assistance, and feeding without verbal friction.",
      },
      {
        skill: "Calibrated Communication",
        detail: "Listening attentively to sanctuary staff directives and relaying safety protocols across 10 peers.",
      },
      {
        skill: "Professional Responsibility",
        detail: "Treating live injured marine life with gentle precision, dignity, and acute situational awareness.",
      },
      {
        skill: "Community & Civic Duty",
        detail: "Connecting university academic theory to real-world grassroots conservation and non-profit support.",
      },
      {
        skill: "Environmental Consciousness",
        detail: "Recognizing firsthand the devastating impact of oceanic plastic debris and ghost fishing gear on marine life.",
      },
    ],
  },

  budget: {
    perStudent: [
      {
        number: "01",
        expense: "Sanctuary Entrance Ticket",
        costPerStudent: 1500,
        noOfStudents: 10,
        totalCost: 15000,
        purpose: "Entrance fee for the turtle sanctuary",
      },
      {
        number: "02",
        expense: "Lunch",
        costPerStudent: 1000,
        noOfStudents: 10,
        totalCost: 10000,
        purpose: "Lunch during the project visit",
      },
      {
        number: "03",
        expense: "Donation Contribution",
        costPerStudent: 500,
        noOfStudents: 10,
        totalCost: 5000,
        purpose: "Contribution towards supporting the turtle sanctuary",
      },
    ] as OceanCrewBudgetItem[],
    totalPerStudent: 3000,
    totalBudget: 30000,
  },

  teamMembers: [
    { number: "01", name: "A N Fernando", saNumber: "SA25610131" },
    { number: "02", name: "W W N S Fernando", saNumber: "SA25610203" },
    { number: "03", name: "I V V Perera", saNumber: "SA25610140" },
    {
      number: "04",
      name: "U R T U Rathnayake (Teran)",
      saNumber: "SA25610122",
      isCurrentUser: true,
    },
    { number: "05", name: "P P Jayathunga", saNumber: "SA24610923" },
    { number: "06", name: "C T Ranaweera", saNumber: "SA25610023" },
    { number: "07", name: "H A S Hapuarachci", saNumber: "SA24610363" },
    { number: "08", name: "M T Madushanka", saNumber: "SA25610152" },
    { number: "09", name: "A D T Senhas", saNumber: "SA24610471" },
    { number: "10", name: "N Danushika", saNumber: "SA25610049" },
  ] as OceanCrewTeamMember[],

  gallery: [
    {
      id: "img-group-turtle",
      src: "/images/ocean-crew/group-holding-turtle.jpeg",
      caption: "Ocean Crew group holding a rescued sea turtle with sanctuary staff after completing care activities.",
      category: "Teamwork & Care",
      aspectRatio: "wide",
      activityRef: "Activity 08: Teamwork",
    },
    {
      id: "img-medication-spray",
      src: "/images/ocean-crew/turtle-medication-spray.jpeg",
      caption: "Applying antiseptic medication spray to a rescued baby turtle under staff supervision.",
      category: "Medical Care",
      aspectRatio: "square",
      activityRef: "Activity 04: Applying Medication",
    },
    {
      id: "img-turtle-egg-learn",
      src: "/images/ocean-crew/learning-turtle-egg.jpeg",
      caption: "Sanctuary staff showing a sea turtle egg to group members during the conservation briefing.",
      category: "Education",
      aspectRatio: "landscape",
      activityRef: "Activity 05: Learning About Turtles",
    },
    {
      id: "img-cleaning-scrub",
      src: "/images/ocean-crew/sanctuary-cleaning-scrub.jpeg",
      caption: "Cleaning and scrubbing algae buildup from the outer sanctuary pool walls.",
      category: "Maintenance",
      aspectRatio: "portrait",
      activityRef: "Activity 01: Sanctuary Cleaning",
    },
    {
      id: "img-turtle-feeding-tongs",
      src: "/images/ocean-crew/turtle-feeding-tongs-1.jpeg",
      caption: "Feeding an adult sea turtle using feeding tongs under sanctuary staff guidance.",
      category: "Direct Care",
      aspectRatio: "portrait",
      activityRef: "Activity 03: Feeding Turtles",
    },
    {
      id: "img-turtle-cleaning-brush",
      src: "/images/ocean-crew/turtle-cleaning-brush.jpeg",
      caption: "Gently brushing and caring for a sea turtle's carapace on the inspection mat.",
      category: "Direct Care",
      aspectRatio: "portrait",
      activityRef: "Activity 02: Turtle Cleaning",
    },
    {
      id: "img-medication-tub",
      src: "/images/ocean-crew/turtle-medication-tub.jpeg",
      caption: "Applying topical medication to a turtle undergoing rehabilitation in a treatment basin.",
      category: "Medical Care",
      aspectRatio: "portrait",
      activityRef: "Activity 04: Applying Medication",
    },
    {
      id: "img-group-waving",
      src: "/images/ocean-crew/group-waving.jpeg",
      caption: "Ocean Crew team members gathering together during the sanctuary community visit.",
      category: "Teamwork",
      aspectRatio: "portrait",
      activityRef: "Activity 08: Teamwork",
    },
    {
      id: "img-egg-sunlight",
      src: "/images/ocean-crew/learning-egg-sunlight.jpeg",
      caption: "Examining the spherical structure of a turtle egg against the sunlight.",
      category: "Education",
      aspectRatio: "portrait",
      activityRef: "Activity 05: Learning About Turtles",
    },
    {
      id: "img-sanctuary-tank-held",
      src: "/images/ocean-crew/sanctuary-tank-held.jpeg",
      caption: "Holding a turtle safely while other team members maintain the sanctuary tank.",
      category: "Maintenance",
      aspectRatio: "landscape",
      activityRef: "Activity 01: Sanctuary Cleaning",
    },
    {
      id: "img-cleaning-inner",
      src: "/images/ocean-crew/sanctuary-cleaning-inner.jpeg",
      caption: "Scrubbing the interior pool tiles to maintain clean water conditions for the turtles.",
      category: "Maintenance",
      aspectRatio: "portrait",
      activityRef: "Activity 01: Sanctuary Cleaning",
    },
    {
      id: "img-turtle-swimming-1",
      src: "/images/ocean-crew/turtle-swimming-1.jpeg",
      caption: "A rehabilitated sea turtle swimming freely in the filtered sanctuary pool.",
      category: "Wildlife",
      aspectRatio: "portrait",
      activityRef: "Activity 06: Environmental Awareness",
    },
    {
      id: "img-threats-chart",
      src: "/images/ocean-crew/environmental-threats-chart.jpeg",
      caption: "Sanctuary educational exhibit highlighting human threats to marine turtles.",
      category: "Education",
      aspectRatio: "landscape",
      activityRef: "Activity 06: Environmental Awareness",
    },
    {
      id: "img-feeding-pool",
      src: "/images/ocean-crew/turtle-feeding-pool.jpeg",
      caption: "Feeding sea turtles across the open sanctuary pool enclosure.",
      category: "Direct Care",
      aspectRatio: "portrait",
      activityRef: "Activity 03: Feeding Turtles",
    },
    {
      id: "img-pamphlet-ticket",
      src: "/images/ocean-crew/sanctuary-pamphlet-ticket.jpeg",
      caption: "Sanctuary visitor brochure and entrance contribution supporting turtle conservation.",
      category: "Community",
      aspectRatio: "portrait",
      activityRef: "Activity 07: Donation",
    },
    {
      id: "img-hatchling-held",
      src: "/images/ocean-crew/learning-hatchling.jpeg",
      caption: "Carefully holding a baby sea turtle hatchling beside the nursery pool.",
      category: "Direct Care",
      aspectRatio: "square",
      activityRef: "Activity 05: Learning About Turtles",
    },
  ] as OceanCrewGalleryImage[],

  personalReflection: {
    studentName: "Teran Rathnayake",
    studentId: "SA25610122",
    title: "What I Took Away From This Experience",
    intro:
      "Participating in the Ocean Crew turtle conservation project as part of our Professional Skills module was an invaluable experiential learning milestone. Working outside an IT laboratory environment in a hands-on conservation sanctuary tested our interpersonal coordination, adaptability, and sense of civic responsibility.",
    sections: [
      {
        heading: "My Personal Contribution",
        prompt: "Editable placeholder for personal roles and specific tasks undertaken at the sanctuary.",
        content:
          "During the project, I contributed actively across the group tasks: participating in the physical cleaning of the sanctuary pool perimeter, assisting team members with handling equipment, and collaborating with our cohort to ensure our financial donation and entrance procedures were organized seamlessly. I engaged closely with sanctuary staff during the medication and care demonstrations, observing how delicate animal welfare operations require discipline and focus.",
      },
      {
        heading: "What I Learned",
        prompt: "Key knowledge and environmental awareness acquired through the visit.",
        content:
          "I learned firsthand about the fragility of marine turtle ecosystems in Sri Lanka and the critical role community sanctuaries play in rehabilitating turtles injured by commercial fishing lines, boat strikes, and plastic debris. Handling hatchlings and observing medical spray application made abstract ecological concepts tangible and urgent.",
      },
      {
        heading: "How I Worked with Group Members",
        prompt: "Collaboration, communication, and peer dynamics within Ocean Crew.",
        content:
          "Coordinating a 10-person group requires clear communication and mutual support. We divided responsibilities naturally—some focused on tank scrubbing, others assisted with feeding and tool sanitation. Applying the Johari Window principles from our academic lectures, I stayed open to feedback, maintained positive energy, and supported peers when dealing with unfamiliar tasks.",
      },
      {
        heading: "Challenges Encountered",
        prompt: "Logistical or practical difficulties and how they were navigated.",
        content:
          "Balancing physical outdoor tasks in humid weather while handling live animals with appropriate gentleness was challenging. We had to remain patient and strictly adhere to the sanctuary staff's instructions to avoid stressing the turtles. Communicating across a large group in an active sanctuary environment required vocal clarity and attentiveness.",
      },
      {
        heading: "How the Experience Developed My Professional Skills",
        prompt: "Transferable skills gained: empathy, teamwork, responsibility, and communication.",
        content:
          "This project directly reinforced that technical competence is only one facet of professional capability. Empathy, situational awareness, ethical responsibility, and teamwork under unpredictable conditions are universal meta-skills that will make me a better software engineer, colleague, and technology leader in the future.",
      },
      {
        heading: "What I Would Do Differently in a Future Project",
        prompt: "Areas for continuous improvement in future group community initiatives.",
        content:
          "In future community initiatives, I would establish a formal pre-visit briefing meeting with assigned documentation roles (e.g., dedicated photography timestamps, detailed notes) earlier in the planning phase to streamline post-activity reporting even further.",
      },
    ],
  },
};
