'use client'

import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import { Spotlight } from '@/components/ui/spotlight'
import {
  PROFILE,
  PROJECTS,
  WORK_EXPERIENCE,
  SKILLS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50"
      >
        {children}
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-6"
      >
        <div className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
          <span>{PROFILE.role}</span>
        </div>
        <div className="space-y-4">
          <p className="text-zinc-600">{PROFILE.summary}</p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Portfolio</h3>
        <div className="grid grid-cols-1 gap-4">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h4 className="text-base font-medium text-zinc-900">
                  {project.name}
                </h4>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-sm text-zinc-500 underline decoration-zinc-300 underline-offset-4"
                  >
                    {project.linkLabel || 'Open'}
                  </a>
                ) : null}
              </div>
              <p className="text-sm leading-6 text-zinc-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-3">
          {WORK_EXPERIENCE.map((job) => (
            <div
              key={job.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px]"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl"
                size={64}
              />
              <div className="relative rounded-[15px] bg-white p-5">
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-normal text-zinc-900">{job.title}</h4>
                    <p className="text-zinc-500">{job.company}</p>
                  </div>
                  <p className="text-sm text-zinc-600">
                    {job.start} - {job.end}
                  </p>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-zinc-600">
                  {job.description.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600">
          Available for freelance engagements, long-term collaboration, and
          end-to-end mobile product development. Reach me at{' '}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
