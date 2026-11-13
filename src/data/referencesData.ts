export interface AcademicReferenceItem {
  id: string;
  chapterNumber: string;
  chapterTitle: string;
  authors: string;
  year: string;
  title: string;
  source: string;
  doiOrUrl?: string;
  annotation: string;
}

export const ACADEMIC_REFERENCES: AcademicReferenceItem[] = [
  {
    id: "ref-dweck-2006",
    chapterNumber: "01",
    chapterTitle: "Introduction to Professional Skills & Johari Window",
    authors: "Dweck, C. S.",
    year: "2006",
    title: "Mindset: The New Psychology of Success",
    source: "Random House.",
    doiOrUrl: "https://dpshowrah.dspaces.org/bitstream/123456789/109/1/01-11-2020-205951MINDSET%20BY%20CAROL%20S.%20DWECK.pdf",
    annotation: "Explains how shifting from a fixed mindset to a growth mindset allows individuals to view failure as essential feedback, fostering lifelong resilience and adaptability in high-pressure workplaces."
  },
  {
    id: "ref-luft-1955",
    chapterNumber: "01",
    chapterTitle: "Introduction to Professional Skills & Johari Window",
    authors: "Luft, J., & Ingham, H.",
    year: "1955",
    title: "The Johari Window: A Graphic Model of Interpersonal Awareness",
    source: "Proceedings of the Western Training Laboratory in Group Development.",
    doiOrUrl: "https://www.psychologytoday.com/us/basics/johari-window",
    annotation: "Pioneers the four-quadrant matrix (Open, Blind, Hidden, Unknown) used globally in organizational psychology to systematically reduce blind spots and expand mutual trust through reciprocal feedback."
  },
  {
    id: "ref-burnett-2016",
    chapterNumber: "02",
    chapterTitle: "Portfolio Management & Engineering Your Digital Blueprint",
    authors: "Burnett, B., & Evans, D.",
    year: "2016",
    title: "Designing Your Life: How to Build a Well-Lived, Joyful Life",
    source: "Knopf / Stanford d.school.",
    doiOrUrl: "https://designingyour.life",
    annotation: "Demonstrates how design thinking principles (prototyping, iterative reframing, and active curation) are applied to personal career architecture and portfolio evolution."
  },
  {
    id: "ref-zubizarreta-2009",
    chapterNumber: "02",
    chapterTitle: "Portfolio Management & Engineering Your Digital Blueprint",
    authors: "Zubizarreta, J.",
    year: "2009",
    title: "The Learning Portfolio: Reflective Practice for Improving Student Learning",
    source: "Jossey-Bass.",
    doiOrUrl: "https://www.wiley.com/en-us/The+Learning+Portfolio",
    annotation: "Establishes that 'context is king' in academic assessment portfolios, proving that reflective meta-analysis of artefacts creates significantly deeper retention than uncontextualized project displays."
  },
  {
    id: "ref-mehrabian-1971",
    chapterNumber: "03",
    chapterTitle: "Job Interviews & Mock Interview Skills",
    authors: "Mehrabian, A.",
    year: "1971",
    title: "Silent Messages: Implicit Communication of Emotions and Attitudes",
    source: "Wadsworth Publishing.",
    doiOrUrl: "https://www.kaaj.com/psych/smorder.html",
    annotation: "Formulates the 7-38-55 communication rule during emotionally laden messages: 55% body language, 38% paralanguage/tone, and 7% literal spoken words, emphasizing bodily presence during job interviews."
  },
  {
    id: "ref-yate-2020",
    chapterNumber: "03",
    chapterTitle: "Job Interviews & Mock Interview Skills",
    authors: "Yate, M.",
    year: "2020",
    title: "Knock 'em Dead: The Ultimate Job Search Guide",
    source: "Adams Media.",
    doiOrUrl: "https://knockemdead.com",
    annotation: "Deconstructs the candidate evaluation criteria: Why are you here? What can you do for us? and What kind of person are you?, alongside the behavioral STAR formula."
  },
  {
    id: "ref-innes-2016",
    chapterNumber: "04",
    chapterTitle: "CV Writing & Career Documents",
    authors: "Innes, J.",
    year: "2016",
    title: "The CV Book: Your Definitive Guide to Writing the Perfect CV",
    source: "Pearson Education.",
    doiOrUrl: "https://www.pearson.com",
    annotation: "Provides granular structural requirements for modern hybrid and chronological CV formats, including ATS parsing mechanics, action verbs, and metric-based accomplishments."
  },
  {
    id: "ref-cutts-2020",
    chapterNumber: "05",
    chapterTitle: "Speaking Skills & Effective Meetings",
    authors: "Cutts, M.",
    year: "2020",
    title: "Oxford Guide to Plain English (5th ed.)",
    source: "Oxford University Press.",
    doiOrUrl: "https://global.oup.com/academic/product/oxford-guide-to-plain-english-9780198844617",
    annotation: "Details the 7 C's of professional communication (Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous) and meeting facilitation protocols."
  },
  {
    id: "ref-schwalbe-2017",
    chapterNumber: "06",
    chapterTitle: "Professional Email & Online Etiquette",
    authors: "Schwalbe, W., & Shipley, D.",
    year: "2017",
    title: "Send: Why People Email So Badly and How to Do It Better",
    source: "Knopf Doubleday.",
    doiOrUrl: "https://www.penguinrandomhouse.com/books/165507/send-by-david-shipley-and-will-schwalbe/",
    annotation: "Defines digital netiquette, recipient field boundaries (To vs. Cc vs. Bcc), tone calibration, subject line syntax, and executive sign-off structures."
  },
  {
    id: "ref-evenson-2011",
    chapterNumber: "07",
    chapterTitle: "Telephone Etiquette & Customer Service",
    authors: "Evenson, R.",
    year: "2011",
    title: "Powerful Phrases for Effective Customer Service",
    source: "AMACOM.",
    doiOrUrl: "https://www.amacombooks.org",
    annotation: "Introduces the 5 Steps to Telephone Excellence and the HEAT/LAST de-escalation framework for diffusing distressed or aggressive stakeholders."
  },
  {
    id: "ref-goleman-1995",
    chapterNumber: "08",
    chapterTitle: "Emotional Intelligence & Brain Dynamics",
    authors: "Goleman, D.",
    year: "1995",
    title: "Emotional Intelligence: Why It Can Matter More Than IQ",
    source: "Bantam Books.",
    doiOrUrl: "https://www.danielgoleman.info",
    annotation: "Establishes the neurobiology of the Amygdala Hijack and proves that Emotional Quotient (EQ) is the predominant predictor of executive durability and team cohesion."
  },
  {
    id: "ref-maclean-1990",
    chapterNumber: "08",
    chapterTitle: "Emotional Intelligence & Brain Dynamics",
    authors: "MacLean, P. D.",
    year: "1990",
    title: "The Triune Brain in Evolution: Role in Paleocerebral Functions",
    source: "Plenum Press.",
    doiOrUrl: "https://link.springer.com/book/10.1007/978-1-4684-6469-6",
    annotation: "Maps out the evolutionary architecture of human cognition: Reptilian Complex (survival), Limbic System (emotion), and Neocortex (prefrontal executive command)."
  },
  {
    id: "ref-post-2022",
    chapterNumber: "09",
    chapterTitle: "Dining Etiquette & Table Manners",
    authors: "Post, L., & Post, D.",
    year: "2022",
    title: "Emily Post's Etiquette: The Centennial Edition",
    source: "Ten Speed Press.",
    doiOrUrl: "https://emilypost.com",
    annotation: "The definitive standard for formal diplomatic and corporate dining: Outside-In cutlery progression, silent utensil signaling, and executive social etiquette."
  }
];
