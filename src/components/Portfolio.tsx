import { Phone, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { getAllPosts } from "../utils/posts";
import { Link } from "react-router-dom";
import sloganImage from "../assets/slogan.png";

export default function Portfolio() {
  const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

  return (
    <main className="min-h-screen w-full bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative isolate py-35">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-8 items-start">
            {/* Left column with logo/slogan */}
            <div className="absolute left-0 w-full max-w-xs z-0">
              <img
                src={sloganImage}
                alt="Logo"
                className="w-1/3 sm:w-1/2 md:w-2/3 lg:w-full h-auto mb-4"
              />
            </div>

            {/* Right column with content */}
            <div className="relative z-10 w-full text-center px-4">
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
                Antonella Andreini
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
                Software Engineer
              </p>

              {/* Contact info */}
              <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-10 text-gray-600 text-base">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>+54 9 2355 488818</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-primary-light to-grey-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            About Me
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Software engineer who cares about user experience and performance,
            learning new things to deliver better results every day.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-primary">
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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-primary">
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
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">
                    {role}
                  </h3>
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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-primary">
            From the Blog
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.length === 0 ? (
              <li className="text-gray-500">No blog posts available yet.</li>
            ) : (
              posts.map((post) => (
                <li
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition"
                >
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                    {post.meta.title}
                  </h4>
                  <time className="block text-sm text-gray-500 mt-1">
                    {post.meta.date}
                  </time>
                  {post.meta.description && (
                    <p className="mt-2 text-gray-700 text-sm">
                      {post.meta.description}
                    </p>
                  )}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-primary font-medium hover:underline text-sm"
                  >
                    Read more →
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-primary-light to-grey-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Education
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Let's Connect
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
