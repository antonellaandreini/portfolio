import {ExternalLink, Mail, MapPin, Phone} from 'lucide-react';
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {Link} from 'react-router-dom';
import sloganImage from '../assets/slogan.png';
import {getAllPosts} from '../utils/posts';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Python', 'Express', 'REST APIs', 'GraphQL', 'PostgreSQL'],
  },
  {
    title: 'Testing & Delivery',
    skills: ['CI/CD', 'Cypress', 'Jest', 'E2E testing', 'LaunchDarkly'],
  },
  {
    title: 'AI & DevOps',
    skills: [
      'OpenCode agent tooling',
      'Git worktrees',
      'Open-source repositories',
      'Docker',
      'AWS',
    ],
  },
];

const experience = [
  {
    role: 'Product Engineer',
    company: 'NaNLABS · Abaxx',
    dates: 'Aug 2024 – Present',
    description: 'Agents++ is the customer’s public project.',
    details: [
      'Own product workflows from ambiguous requirements through scoped solutions and end-to-end delivery.',
      'Improve performance and stability in document-heavy editing and real-time collaboration flows.',
      'Build reusable AI-assisted skills and automation for planning, implementation, code review, and repository hygiene.',
      'Own public/private repository synchronization, CodeQL and Dependabot security scanning, release gates, and policy-as-code for Agents++.',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'NaNLABS · Workstep',
    dates: 'Jun 2024 – Aug 2024',
    details: [
      'Set up Cypress E2E testing from scratch, establishing coverage for critical user flows.',
      'Expanded automated test coverage and integrated LaunchDarkly feature-flag validation into CI.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'NaNLABS · Frenter',
    dates: 'Apr 2024 – Jun 2024',
    details: [
      'Implemented responsive React screens from complex Figma designs.',
      'Implemented a reusable component library to accelerate feature development and keep the UI consistent.',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'NaNLABS · Artifact Uprising',
    dates: 'Feb 2021 – Apr 2024',
    details: [
      'Defined and shipped customer-facing commerce features from product requirements through production delivery.',
      'Turned production support findings into fixes and product improvements.',
      'Improved quality and performance with Jest, CI/CD, Split A/B tests, and image optimization across React, TypeScript, Node.js, REST, and GraphQL.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Exisoft',
    dates: 'Feb 2019 – Dec 2020',
    details: [
      'Built, deployed, and maintained e-commerce web applications using React, Node.js, and PostgreSQL.',
    ],
  },
];

const projects = [
  {
    name: 'Cucharada',
    stack: 'Ruby on Rails · Gemini · Docker',
    description:
      'AI-powered recipe application that imports recipes from images and URLs, backed by 10,000 Argentine ingredients, search, authentication, favorites, Docker, and CI.',
    href: 'https://github.com/antonellaandreini/cucharada',
  },
  {
    name: 'Agent Session Lessons',
    stack: 'Python · AI tooling',
    description:
      'Pipeline for extracting and reviewing reusable lessons from multi-agent coding sessions, with automated testing and HTML reporting.',
  },
  {
    name: 'Personal AI Infrastructure',
    stack: 'OpenClaw · Linux · Self-hosting',
    description:
      'Self-hosted environment for personal AI agents integrating Telegram, local services, persistent memory, and automated workflows.',
  },
];

const primaryButton =
  'inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-secondary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const secondaryButton =
  'inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

export default function Portfolio() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className='min-h-screen w-full bg-white font-sans text-gray-800'>
      <section className='relative isolate overflow-hidden px-6 py-24 sm:py-32'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-br from-white via-primary-light/55 to-white' />
        <img
          src={sloganImage}
          alt=''
          aria-hidden='true'
          className='absolute -left-12 top-10 -z-10 w-72 opacity-10 sm:w-96'
        />

        <div className='mx-auto max-w-5xl text-center'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.22em] text-secondary-600'>
            Software Engineer · Product Engineer
          </p>
          <h1 className='text-4xl font-extrabold tracking-tight text-primary sm:text-6xl'>
            Antonella Andreini
          </h1>
          <p className='mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl'>
            Product Engineer with 7+ years of experience building web products
            across product definition, implementation, APIs, performance,
            testing, and delivery.
          </p>

          <div className='mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-600 sm:text-base'>
            <span className='inline-flex items-center gap-2'>
              <MapPin className='h-4 w-4 text-primary' /> City Bell, Buenos Aires,
              Argentina
            </span>
            <a
              href='mailto:anto.andreini@gmail.com'
              className='inline-flex items-center gap-2 hover:text-primary'
            >
              <Mail className='h-4 w-4 text-primary' />
              anto.andreini@gmail.com
            </a>
            <span className='inline-flex items-center gap-2'>
              <Phone className='h-4 w-4 text-primary' /> +54 9 2355 488818
            </span>
          </div>

          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            <a
              href='https://github.com/antonellaandreini'
              target='_blank'
              rel='noopener noreferrer'
              className={primaryButton}
            >
              <SiGithub className='mr-2 h-5 w-5' /> GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/antonella-andreini/'
              target='_blank'
              rel='noopener noreferrer'
              className={secondaryButton}
            >
              <SiLinkedin className='mr-2 h-5 w-5' /> LinkedIn
            </a>
            <Link to='/blog' className={secondaryButton}>
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-br from-primary-light to-white px-6 py-20'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='text-3xl font-semibold text-primary'>About</h2>
          <p className='mt-6 text-lg leading-8 text-gray-700'>
            I build full-stack products with React, Next.js, TypeScript, Node.js,
            and Python. My work spans customer-facing features, performance and
            reliability, automated testing, open-source repositories, and
            AI-assisted engineering workflows. I care about maintainable systems
            and taking product work from an unclear need to production.
          </p>
        </div>
      </section>

      <section className='px-6 py-20'>
        <div className='mx-auto max-w-5xl'>
          <h2 className='text-3xl font-semibold text-primary'>Technical Skills</h2>
          <div className='mt-8 grid gap-5 sm:grid-cols-2'>
            {skillGroups.map(group => (
              <article
                key={group.title}
                className='rounded-2xl border border-primary-light bg-white p-6 shadow-sm'
              >
                <h3 className='text-lg font-bold text-gray-900'>{group.title}</h3>
                <p className='mt-3 leading-7 text-gray-600'>
                  {group.skills.join(' · ')}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-br from-primary-light to-white px-6 py-20'>
        <div className='mx-auto max-w-5xl'>
          <h2 className='text-3xl font-semibold text-primary'>Experience</h2>
          <div className='mt-10 space-y-10'>
            {experience.map(item => (
              <article key={`${item.company}-${item.role}`}>
                <div className='gap-4 sm:flex sm:items-start sm:justify-between'>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900'>{item.role}</h3>
                    <p className='mt-1 font-semibold text-primary'>{item.company}</p>
                  </div>
                  <p className='mt-2 whitespace-nowrap text-sm text-gray-500 sm:mt-0'>
                    {item.dates}
                  </p>
                </div>
                {item.description && (
                  <p className='mt-3 text-sm font-medium text-gray-600'>
                    {item.description}
                  </p>
                )}
                <ul className='mt-4 list-disc space-y-2 pl-5 leading-7 text-gray-700'>
                  {item.details.map(detail => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 py-20'>
        <div className='mx-auto max-w-5xl'>
          <h2 className='text-3xl font-semibold text-primary'>Personal Projects</h2>
          <div className='mt-8 grid gap-6 md:grid-cols-3'>
            {projects.map(project => (
              <article
                key={project.name}
                className='flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'
              >
                <h3 className='text-xl font-bold text-gray-900'>{project.name}</h3>
                <p className='mt-2 text-sm font-semibold text-primary'>{project.stack}</p>
                <p className='mt-4 flex-1 leading-7 text-gray-600'>
                  {project.description}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline'
                  >
                    View repository <ExternalLink className='h-4 w-4' />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-br from-primary-light to-white px-6 py-20'>
        <div className='mx-auto max-w-5xl'>
          <div className='flex items-end justify-between gap-6'>
            <h2 className='text-3xl font-semibold text-primary'>From the Blog</h2>
            <Link to='/blog' className='font-semibold text-primary hover:underline'>
              View all
            </Link>
          </div>
          <div className='mt-8 grid gap-6 md:grid-cols-3'>
            {posts.length === 0 ? (
              <p className='text-gray-500'>No blog posts available yet.</p>
            ) : (
              posts.map(post => (
                <article
                  key={post.slug}
                  className='rounded-2xl border border-white/80 bg-white p-6 shadow-sm'
                >
                  <time className='text-sm text-gray-500'>{post.meta.date}</time>
                  <h3 className='mt-2 text-lg font-bold text-gray-900'>
                    {post.meta.title}
                  </h3>
                  {post.meta.description && (
                    <p className='mt-3 text-sm leading-6 text-gray-600'>
                      {post.meta.description}
                    </p>
                  )}
                  <Link
                    to={`/blog/${post.slug}`}
                    className='mt-5 inline-block font-semibold text-primary hover:underline'
                  >
                    Read more →
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className='px-6 py-20'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-3xl font-semibold text-primary'>Education</h2>
          <p className='mt-5 text-lg font-bold text-gray-900'>
            National University of La Plata (UNLP)
          </p>
          <p className='mt-2 text-gray-600'>
            Bachelor&apos;s Degree in Computer Engineering · 2013–2019
          </p>
        </div>
      </section>

      <section className='bg-primary px-6 py-20 text-white'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-semibold'>Let&apos;s build something useful</h2>
          <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-primary-light'>
            I&apos;m open to remote Software Engineer, Product Engineer, and Full
            Stack opportunities from Argentina.
          </p>
          <a
            href='mailto:anto.andreini@gmail.com'
            className='mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow transition hover:bg-primary-light'
          >
            <Mail className='mr-2 h-5 w-5' /> Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
