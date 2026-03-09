'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <img
            src="/profile.jpg"
            alt="Portrait of Amir Houshmand"
            className="h-16 w-16 rounded-full object-cover ring-1 ring-zinc-200"
          />
          <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
        </div>

        <div>
          <Link href="/" className="font-medium text-black">
            Amir Houshmand
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600"
            delay={0.5}
          >
            Senior Mobile App Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
