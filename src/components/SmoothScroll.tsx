"use client"

import { useEffect } from "react"

// Eased scrolling for in-page anchor clicks (nav, logo, "View Projects"). The CSS `scroll-behavior: smooth` on <html>
// can't be tuned: Chrome's version covers half the distance in the first quarter of the time, which feels abrupt.
// Mouse clicks on "#..." links are animated here instead with a symmetric ease-in-out curve. Keyboard activation,
// modified clicks (new tab) and "reduce motion" keep the browser's native behavior. Renders nothing.

// Quadratic: a softer start and landing than native, without the long, slow ramp of a cubic curve
const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

// Longer trips take a bit longer, within bounds: ~600ms to the next section, 1.2s at most
const durationFor = (distance: number) => Math.min(1200, Math.max(600, 450 + distance * 0.15))

export default function SmoothScroll () {
  useEffect(() => {
    let frame = 0
    const cancel = () => cancelAnimationFrame(frame)

    const onClick = (event: MouseEvent) => {
      // event.detail is 0 for keyboard activation: the native jump also moves focus into the section, keep it
      if (event.defaultPrevented || event.button !== 0 || event.detail === 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      const hash = (event.target as Element).closest("a")?.getAttribute("href")
      const target = hash?.startsWith("#") && hash.length > 1 ? document.getElementById(hash.slice(1)) : null
      if (!target) return

      event.preventDefault()
      cancel()

      // Same offset as native anchor jumps: scroll-padding-top keeps the section title clear of the sticky header
      const root = document.documentElement
      const offset = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0
      // Re-measured every frame and clamped to the max scroll, so the ease-out still lands smoothly on short pages
      const targetY = () =>
        Math.min(Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset), root.scrollHeight - window.innerHeight)

      const from = window.scrollY
      const duration = durationFor(Math.abs(targetY() - from))
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        // "instant" bypasses the CSS smooth behavior, which would otherwise animate every frame on its own
        window.scrollTo({ top: from + (targetY() - from) * easeInOutQuad(t), behavior: "instant" })
        if (t < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
      history.pushState(null, "", hash)
    }

    // Hand control back as soon as the user scrolls on their own
    const interrupts = ["wheel", "touchstart", "keydown"] as const
    document.addEventListener("click", onClick)
    interrupts.forEach((type) => window.addEventListener(type, cancel, { passive: true }))
    return () => {
      cancel()
      document.removeEventListener("click", onClick)
      interrupts.forEach((type) => window.removeEventListener(type, cancel))
    }
  }, [])

  return null
}
