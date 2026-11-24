"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

export type NavItem = { href: string; label: string; desktopOnly?: boolean }

// A section becomes current once its top passes this line, as a fraction of the viewport height from the top
const ACTIVE_LINE = 0.4
// After a click on a link to a section, that link stays current while the page scrolls there (SmoothScroll takes up to
// 1.2s), instead of every section in between flashing by
const CLICK_LOCK_MS = 1300

// Box of the current link inside <nav>, where the sliding indicator goes. `animate` is false when the indicator
// (re)appears, so it fades in at the link instead of sliding in from a stale position.
type IndicatorBox = { x: number; y: number; w: number; h: number; visible: boolean; animate: boolean }

// Nav links with a scrollspy: the link of the section in view gets aria-current, and a single indicator slides to it
// (a dark pill on desktop, an underline on mobile, where pill padding wouldn't fit beside the logo at 360px).
// On mobile the nav shares one row with the logo: tighter gaps, and 12px text below 360px, keep it on one line at 320px.
export default function NavLinks ({ items }: { items: NavItem[] }) {
  // null until mounted, so a page reloaded mid-scroll doesn't flash "Home" as current before hydration
  const [current, setCurrent] = useState<string | null>(null)
  const [box, setBox] = useState<IndicatorBox | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const currentRef = useRef(current)

  // Scrollspy
  useEffect(() => {
    const hrefs = items.map((item) => item.href)
    let frame = 0
    let lockedUntil = 0
    let unlockTimer: ReturnType<typeof setTimeout> | undefined

    const update = () => {
      frame = 0
      if (performance.now() < lockedUntil) return
      const root = document.documentElement
      let next = hrefs[0]
      if (window.scrollY + window.innerHeight >= root.scrollHeight - 2) {
        // At the very bottom the last section may never reach the line
        next = hrefs[hrefs.length - 1]
      } else {
        for (const href of hrefs) {
          const top = document.getElementById(href.slice(1))?.getBoundingClientRect().top
          if (top !== undefined && top <= window.innerHeight * ACTIVE_LINE) next = href
        }
      }
      setCurrent(next)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    // Any link to a section (nav, logo, "View Projects") marks it current right away
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const href = (event.target as Element).closest("a")?.getAttribute("href")
      if (!href || !hrefs.includes(href)) return
      setCurrent(href)
      lockedUntil = performance.now() + CLICK_LOCK_MS
      clearTimeout(unlockTimer)
      unlockTimer = setTimeout(schedule, CLICK_LOCK_MS)
    }
    // The user taking over the scroll ends the lock
    const unlock = () => {
      lockedUntil = 0
    }

    update()
    const interrupts = ["wheel", "touchstart", "keydown"] as const
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    document.addEventListener("click", onClick)
    interrupts.forEach((type) => window.addEventListener(type, unlock, { passive: true }))
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(unlockTimer)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      document.removeEventListener("click", onClick)
      interrupts.forEach((type) => window.removeEventListener(type, unlock))
    }
  }, [items])

  // Measure the current link (before paint, so the indicator and the text color change in the same frame)
  const measure = () => {
    const nav = navRef.current
    const href = currentRef.current
    const link = nav && href ? nav.querySelector<HTMLAnchorElement>(`a[href="${href}"]`) : null
    // No link, or a hidden one ("Home" on mobile): fade the indicator out where it is
    if (!nav || !link || !link.offsetParent) {
      setBox((prev) => prev && { ...prev, visible: false })
      return
    }
    const n = nav.getBoundingClientRect()
    const r = link.getBoundingClientRect()
    setBox((prev) => ({ x: r.left - n.left, y: r.top - n.top, w: r.width, h: r.height, visible: true, animate: !!prev?.visible }))
  }

  useLayoutEffect(() => {
    currentRef.current = current
    measure()
  }, [current])

  // Re-measure when the nav changes size: breakpoint switch, web font swap
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const observer = new ResizeObserver(() => measure())
    observer.observe(nav)
    return () => observer.disconnect()
  }, [])

  const motion = box?.animate ? "transition-[transform,width,height,opacity] duration-500 ease-in-out" : "transition-opacity duration-300"
  const opacity = box?.visible ? 1 : 0

  return (
    <nav ref={navRef} className="relative">
      {/* Sliding indicators, painted under the links (which are `relative`, so they stack on top) */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 hidden lg:block rounded-full bg-neutral-900 ${motion}`}
        style={box ? { transform: `translate(${box.x}px, ${box.y}px)`, width: box.w, height: box.h, opacity } : { opacity: 0 }}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 lg:hidden h-0.5 rounded-full bg-neutral-900 ${motion}`}
        style={box ? { transform: `translate(${box.x}px, ${box.y + box.h + 2}px)`, width: box.w, opacity } : { opacity: 0 }}
      />
      <ul className="flex flex-row flex-wrap justify-center gap-x-3 max-[360px]:gap-x-2.5 gap-y-1 lg:gap-1 py-1 lg:py-0 text-sm max-[360px]:text-xs lg:text-base font-normal">
        {items.map(({ href, label, desktopOnly }) => {
          const isCurrent = href === current
          return (
            <li key={href} className={desktopOnly ? "hidden lg:block" : undefined}>
              {/* Text color changes with the indicator's duration and easing, so the white text never shows on the light
                  background before the pill arrives; the hover background stays quick */}
              <a
                href={href}
                aria-current={isCurrent ? "true" : undefined}
                className={`relative block lg:px-4 lg:py-2 rounded-full [transition:color_500ms_ease-in-out,background-color_200ms_ease] ${
                  isCurrent ? "text-neutral-900 lg:text-white" : "text-neutral-500 hover:text-neutral-900 lg:hover:bg-neutral-900/5"
                }`}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
