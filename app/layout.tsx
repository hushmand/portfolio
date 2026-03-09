import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { WEBSITE_URL } from '@/lib/constants'
import { EMAIL } from './data'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Amir Houshmand - Senior Mobile App Developer',
    template: '%s | Amir Houshmand',
  },
  description:
    'Senior Mobile App Developer specializing in Flutter, Android, iOS, WebRTC, blockchain, VoIP, BLE, and agentic AI systems.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
          <div className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-[rgb(226,244,235)]/92 backdrop-blur-xl supports-[backdrop-filter]:bg-[rgb(226,244,235)]/82">
            <div className="mx-auto flex w-full max-w-screen-sm items-center justify-center gap-3 px-4 py-2.5 text-sm text-emerald-900/95">
              <span className="inline-flex items-center gap-2 font-medium">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" />
                Available for Work
              </span>
              <span className="text-emerald-900/45">-</span>
              <a
                href={`mailto:${EMAIL}`}
                className="underline decoration-emerald-900/45 underline-offset-4 transition hover:text-emerald-950"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-16">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
