"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { business } from "@/lib/site"

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-charcoal/95 px-4 backdrop-blur sm:px-[4vw]">
      <div className="mx-auto flex min-h-[84px] max-w-[1280px] items-center justify-between gap-6 border-b border-charcoal-line">
        <Link href="#top" className="flex items-center gap-3" aria-label={`${business.name} home`}>
          <span aria-hidden className="flex size-10 items-center justify-center rounded-lg bg-oak text-lg font-extrabold text-charcoal">
            M
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold">{business.shortName}</span>
            <span className="text-[13px] text-stone-muted">Interiors and Renovations</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 text-[15px] md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-md px-3.5 py-3 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="hidden min-h-11 items-center whitespace-nowrap rounded-lg border-[1.5px] border-oak px-5 text-[15px] font-semibold hover:bg-charcoal-line sm:inline-flex"
          >
            {business.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-12 items-center justify-center rounded-lg border border-charcoal-field md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="mx-auto max-w-[1280px] pb-5 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-charcoal-line px-1 py-3.5 text-lg font-semibold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            className="mt-4 block rounded-lg bg-oak py-3.5 text-center font-bold text-charcoal"
          >
            Call {business.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
