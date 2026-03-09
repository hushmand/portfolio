import { TextLoop } from '@/components/ui/text-loop'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4">
      <div className="flex items-center justify-between">
        <a href="https://github.com/hushmand" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2026 Amir Houshmand</span>
            <span>Mobile apps, real-time systems, and product delivery.</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400"></div>
      </div>
    </footer>
  )
}
