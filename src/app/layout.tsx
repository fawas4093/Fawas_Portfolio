import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/Context/ScrollContext";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// app/page.tsx or app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://fawaz-shemeer-portfolio.vercel.app"),
  title: "Fawaz Shemeer | Full Stack Developer & Tech Explorer",
  description:
    "Crafting sleek UIs and powerful backends — I'm Fawaz Shemeer, a full stack developer with a passion for building modern web experiences using React, Node.js, TypeScript, and more.",
  keywords: [
    // Personal Branding
    "Fawaz Shemeer",
    "Fawaz Shemeer Portfolio",
    "Fawaz Shemeer Developer",
    "Fawaz Shemeer Website",
    "Fawaz Shemeer Full Stack Developer",
    "Fawaz Shemeer Projects",
    "Fawaz Shemeer Personal Website",
    "Fawaz Shemeer Software Engineer",
    "Fawaz Shemeer Web Developer",
    "Fawaz Shemeer React Developer",
    "Fawaz Shemeer Node.js Developer",

    // General Role & Skills
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "JavaScript Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Web Application Developer",
    "UI/UX Developer",
    "API Developer",
    "Database Developer",

    // Core Technologies
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "REST API",
    "GraphQL",
    "Redux",
    "Context API",

    // Additional Technologies & Tools
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "Firebase",
    "Jest",
    "Testing Library",
    "Webpack",
    "Babel",
    "ESLint",
    "Prettier",
    "npm",
    "yarn",

    // Frameworks & Libraries
    "React Router",
    "React Query",
    "React Hook Form",
    "Framer Motion",
    "Material-UI",
    "Ant Design",
    "Bootstrap",
    "Sass",
    "Less",
    "Webpack",
    "Vite",

    // Development Practices
    "Agile Development",
    "Scrum",
    "Test-Driven Development",
    "Continuous Integration",
    "Continuous Deployment",
    "Code Review",
    "Pair Programming",
    "Responsive Design",
    "Progressive Web Apps",
    "Performance Optimization",

    // Project Types
    "E-commerce Applications",
    "Content Management Systems",
    "Real-time Applications",
    "Mobile-First Design",
    "Single Page Applications",
    "Progressive Web Applications",
    "API Development",
    "Database Design",
    "Cloud Deployment",

    // Location + Career Tags
    "Developer in India",
    "Indian Web Developer",
    "Junior Developer Portfolio",
    "Software Engineer Portfolio",
    "Remote Developer",
    "Freelance Developer",
    "Contract Developer",
    "Startup Developer",
    "Tech Startup Developer",

    // Industry Keywords
    "SaaS Development",
    "Fintech Applications",
    "Healthcare Applications",
    "Education Technology",
    "E-learning Platforms",
    "Social Media Applications",
    "Dashboard Development",
    "Analytics Applications",

    // SEO & Portfolio Specific
    "Developer Portfolio Website",
    "Personal Portfolio Website",
    "Tech Portfolio",
    "Portfolio for Developer",
    "Next.js Portfolio",
    "Modern Web Developer Portfolio",
    "Clean Developer Portfolio Design",
    "Professional Developer Portfolio",
    "Creative Developer Portfolio",
    "Interactive Portfolio",
    "Developer Resume Website",
    "Tech Resume",
    "Developer CV",
    "Programming Portfolio",
    "Code Portfolio",
    "GitHub Portfolio",
    "Open Source Contributor",
    "Tech Blog",
    "Developer Blog",
    "Programming Blog",
    "Web Development Blog",
    "Tech Tutorials",
    "Coding Tutorials",
    "Developer Resources",
    "Tech Community",
    "Developer Network",
    "Tech Meetups",
    "Hackathons",
    "Code Challenges",
    "Programming Competitions",
  ],

  authors: [
    {
      name: "Fawaz Shemeer",
      url: "https://fawaz-shemeer-portfolio.vercel.app",
    },
  ],
  creator: "Fawaz Shemeer",
  publisher: "Fawaz Shemeer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fawaz Shemeer — Full Stack Web Developer & Tech Explorer",
    description:
      "Explore the developer portfolio of Fawaz Shemeer. Discover innovative projects, technical insights, and modern web solutions built with React, Node.js, TypeScript, and cutting-edge technologies.",
    url: "https://fawaz-shemeer-portfolio.vercel.app",
    siteName: "Fawaz Shemeer Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Fawaz Shemeer - Full Stack Developer Portfolio",
        type: "image/png",
      },
      {
        url: "/favicon.png", // Add a square version for better social sharing
        width: 600,
        height: 600,
        alt: "Fawaz Shemeer - Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawaz Shemeer | Full Stack Developer & Tech Explorer",
    description:
      "Passionate full-stack developer crafting modern web experiences. Explore my projects, technical insights, and journey in React, Node.js, TypeScript, and beyond.",
    site: "@Shemeer_Fawaz",
    creator: "@Shemeer_Fawaz",
    images: ["/favicon.png"],
  },
  category: "technology",
 
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fawaz-shemeer-portfolio.vercel.app",
  },
  other: {
    "theme-color": "#b7ab98", // Add your brand color
    "color-scheme": "dark light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Fawaz Shemeer",
    "application-name": "Fawaz Shemeer Portfolio",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    classification: "Personal Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <ScrollProvider>{children}</ScrollProvider>
        <SpeedInsights />
         <Analytics />
      </body>
    </html>
  );
}
