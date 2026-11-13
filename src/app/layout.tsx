import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${STUDENT_PROFILE.fullName} (${STUDENT_PROFILE.studentId}) | Professional Skills E-Portfolio — ${STUDENT_PROFILE.institution}`,
  description: `Official Academic Assessment E-Portfolio & Career Dossier for ${STUDENT_PROFILE.fullName} (${STUDENT_PROFILE.studentId}), pursuing the ${STUDENT_PROFILE.programme} at ${STUDENT_PROFILE.institution} (${STUDENT_PROFILE.batch} Batch, ${STUDENT_PROFILE.academicLevel}). Synthesizing software engineering, entrepreneurship, and professional leadership.`,
  keywords: [
    STUDENT_PROFILE.fullName,
    STUDENT_PROFILE.studentId,
    STUDENT_PROFILE.institution,
    "SLIIT",
    "Higher Diploma in Information Technology",
    "HDIT",
    "Software Engineering",
    "Entrepreneurship",
    "Professional Skills",
    "Johari Window",
    "Career Portfolio",
    "Emotional Intelligence",
    "Triune Brain",
    "Executive Etiquette",
    "STAR Interview Method",
    "Mrs. Ishara Raviharee Weerasinghe",
    "LA'CEDRA",
    "TechMart",
    "ApPoint",
    "Computer Security Vulnerability Assessment",
    "DigitalOcean VPS",
    "Full-Stack Web Development"
  ],
  authors: [{ name: STUDENT_PROFILE.fullName }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-background text-text-primary min-h-screen flex flex-col font-sans selection:bg-accent-primary selection:text-white antialiased">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
