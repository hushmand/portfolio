import Link from 'next/link'
import { BASE_PATH } from '@/lib/constants'

export function Header() {
  return (
    <header className="mb-10 space-y-5">
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <img
            src={`${BASE_PATH}/profile.jpg`}
            alt="Portrait of Amir Houshmand"
            className="h-16 w-16 rounded-full object-cover ring-1 ring-zinc-200"
          />
          <span className="absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
        </div>

        <div>
          <Link href="/" className="font-medium text-black">
            Amir Houshmand
          </Link>
          <p className="text-sm text-zinc-500">Senior Mobile / Full-Stack Software Engineer</p>
        </div>
      </div>

      <div className="text-[clamp(1rem,2vw,1.4rem)] leading-[1.2] tracking-tight text-stone-400">
        <p>
          I was <span className="text-zinc-900">10x developer</span> before AI:
          <span className="text-zinc-900"> built 80+ mobile apps.</span>
        </p>
        <p className="mt-2">
          Now with AI? I&apos;m <span className="text-zinc-900">100x.</span>
        </p>
      </div>
    </header>
  )
}
