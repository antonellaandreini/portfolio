import { Phone, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Portfolio() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative isolate px-8 pt-24 pb-32 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-primary">
            Antonella Andreini
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Software Engineer
          </p>

          {/* Contact info */}
          <div className="mt-4 flex justify-center items-center space-x-10 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+54 9 2355 488818</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>anto.andreini@gmail.com</span>
            </div>
          </div>

          {/* Button row */}
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/antonellandreini"
              target="_blank"
              rel="noopener noreferrer"
              className="
      inline-flex items-center justify-center
      rounded-full bg-secondary px-6 py-3
      text-sm font-semibold text-white shadow
      border-2 border-transparent
      hover:border-primary hover:bg-opacity-90
      transition
    "
            >
              <SiGithub className="w-5 h-5 mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/antonella-andreini/"
              target="_blank"
              rel="noopener noreferrer"
              className="
      inline-flex items-center justify-center
      rounded-full bg-secondary px-6 py-3
      text-sm font-semibold text-white shadow
      border-2 border-transparent
      hover:border-primary hover:bg-opacity-90
      transition
    "
            >
              <SiLinkedin className="w-5 h-5 mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-primary-light to-grey-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-primary">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Software engineer who cares about user experience and performance,
            learning new things to deliver better results every day.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-primary">
            Technologies & Skills
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <li>
              <strong>Frameworks:</strong> React, Next.js, Cypress
            </li>
            <li>
              <strong>Data & APIs:</strong> MongoDB, PostgreSQL, GraphQL, REST
            </li>
            <li>
              <strong>Tools:</strong> Docker, AWS, GitHub Actions, LaunchDarkly
            </li>
            <li>
              <strong>UI:</strong> Material-UI, PrimeReact, Tailwind CSS
            </li>
            <li>
              <strong>Testing:</strong> Cypress, Jest, A/B Testing
            </li>
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-primary-light to-grey-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-primary">
            Experience
          </h2>
          <ul className="space-y-8">
            {[
              {
                role: "<Frontend Developer/> NaNLABS – Abaxx",
                dates: "Aug 2024 – Present",
                details: [
                  "Modernized & modularized React + Next.js codebases",
                  "Integrated Canvas-based graphics library",
                  "Built real-time data streaming with PubNub",
                ],
              },
              {
                role: "<Backend & Cypress Developer/> NaNLABS – Workstep",
                dates: "Jun 2024 – Aug 2024",
                details: [
                  "Wrote end-to-end test suites with Cypress",
                  "Automated CI/CD tests via GitHub Actions",
                  "Built feature-flag test matrices with LaunchDarkly",
                ],
              },
              {
                role: "<Frontend Developer/>  NaNLABS – Frenter",
                dates: "Apr 2024 – Jun 2024",
                details: [
                  "Translated complex Figma designs to React/TypeScript",
                  "Styled with PrimeFlex & PrimeReact",
                  "Collaborated closely with designers to refine UI",
                ],
              },
              {
                role: "<Fullstack Developer/> NaNLABS - Artifact Uprising",
                dates: "Feb 2021 – Apr 2024",
                details: [
                  "Optimized high-volume image workflows for performance",
                  "Implemented CI/CD pipelines & automated testing",
                  "Built GraphQL APIs & Unit test experiments",
                ],
              },
              {
                role: "<Fullstack Developer/> Exisoft",
                dates: "Feb 2019 – Dec 2020",
                details: [
                  "Developed and maintained e-commerce platform",
                  "Translated client requirements into React + Node features",
                  "Worked with MongoDB & PostgreSQL backends",
                ],
              },
            ].map(({ role, dates, details }) => (
              <li key={role} className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="text-xl font-medium text-gray-900">{role}</h3>
                  <span className="text-sm text-gray-500">{dates}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600">
                  {details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-primary">
            From the Blog
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Building a Real-Time Canvas with React & PubNub",
                date: "June 10, 2025",
                excerpt:
                  "Walk through my process of architecting a collaborative whiteboard using React hooks and PubNub’s data streams.",
                link: "/blog/real-time-canvas",
              },
              {
                title: "E2E Testing Strategies with Cypress",
                date: "May 28, 2025",
                excerpt:
                  "An in-depth look at structuring your Cypress suites, using feature flags, and integrating into GitHub Actions.",
                link: "/blog/cypress-e2e-strategies",
              },
              {
                title: "Optimizing Image Delivery on Static Sites",
                date: "April 15, 2025",
                excerpt:
                  "How I chopped load times by 50% on Artifact Uprising’s store with lazy-loading, responsive srcsets, and S3 optimizations.",
                link: "/blog/image-delivery-optimizations",
              },
            ].map(({ title, date, excerpt, link }) => (
              <li
                key={title}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition"
              >
                <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                <time className="block text-sm text-gray-500 mt-1">{date}</time>
                <p className="mt-2 text-gray-700 text-sm">{excerpt}</p>
                <a
                  href={link}
                  className="mt-4 inline-block text-primary font-medium hover:underline text-sm"
                >
                  Read more →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-primary-light to-grey-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-primary">
            Education
          </h2>
          <p className="text-gray-700 text-lg">
            <strong>National University of La Plata (UNLP)</strong> — La Plata,
            Buenos Aires
            <br />
            Graduate Degree in Computer Engineering
            <br />
            2013 – 2019
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-primary">
            Let’s Connect
          </h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out by email or LinkedIn—I’m always open to new
            opportunities!
          </p>
          <a
            href="mailto:anto.andreini@gmail.com"
            className="inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow border-2 border-transparent hover:border-primary hover:bg-opacity-90 transition"
          >
            Say Hello
          </a>
        </div>
      </section>
    </main>
  );
}
