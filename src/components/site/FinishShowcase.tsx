"use client"

import Image from "next/image"
import Link from "next/link"
import { finishes } from "@/lib/site"
import { cn } from "@/lib/utils"
import { useFinish } from "./FinishContext"

export function FinishShowcase() {
  const { finish, setFinishId } = useFinish()

  return (
    <section id="top" className="px-4 pb-20 pt-10 sm:px-[4vw] md:pb-24 md:pt-14">
      <div className="mx-auto grid max-w-[1280px] items-stretch gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-balance text-[clamp(40px,5vw,68px)] font-bold leading-[1.03] tracking-[-0.035em]">
            Cabinets and wardrobes in the finish you love.
          </h1>
          <p className="max-w-[30em] text-lg text-stone">
            Choose a finish to see how it looks in a real Mbalagani project. We build every unit to your room’s exact
            measurements.
          </p>
          <fieldset>
            <legend className="mb-3 text-sm text-stone-muted">Pick a finish</legend>
            <div className="flex flex-wrap gap-2.5">
              {finishes.map((f) => {
                const selected = f.id === finish.id
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFinishId(f.id)}
                    aria-pressed={selected}
                    className={cn(
                      "inline-flex min-h-12 items-center gap-2.5 rounded-full border-2 py-2 pl-2 pr-4.5 text-[15px] font-semibold transition-colors",
                      selected ? "border-oak bg-charcoal-line" : "border-charcoal-field hover:border-stone-muted",
                    )}
                  >
                    <span
                      aria-hidden
                      className="size-7 shrink-0 rounded-full border-2 border-white/35"
                      style={{ background: f.swatch }}
                    />
                    {f.name}
                  </button>
                )
              })}
            </div>
          </fieldset>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-lg bg-oak px-6.5 font-bold text-charcoal transition-colors hover:bg-oak-hover"
            >
              Get a free quote
            </Link>
            <Link href="#gallery" className="inline-flex min-h-12 items-center px-1.5 font-semibold hover:text-white">
              View the gallery →
            </Link>
          </div>
        </div>

        <figure className="relative min-h-[520px] overflow-hidden rounded-[14px] bg-charcoal-raised lg:min-h-[600px]">
          {finishes.map((f) => (
            <Image
              key={f.id}
              src={f.image}
              alt={f.id === finish.id ? f.alt : ""}
              aria-hidden={f.id !== finish.id}
              fill
              priority={f.id === "greige"}
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 620px"
              className={cn(
                "object-cover transition-opacity duration-500 motion-reduce:transition-none",
                f.id === finish.id ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          <figcaption
            aria-live="polite"
            className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-[10px] bg-charcoal/92 px-5 py-4"
          >
            <span>
              <span className="block text-[13px] text-stone-muted">{finish.name} finish</span>
              <span className="font-semibold">{finish.project}</span>
            </span>
            <span className="text-sm text-oak">{finish.note}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
