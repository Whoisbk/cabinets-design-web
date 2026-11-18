import Image from "next/image"
import { FinishProvider } from "@/components/site/FinishContext"
import { FinishShowcase } from "@/components/site/FinishShowcase"
import { QuoteForm } from "@/components/site/QuoteForm"
import { SiteHeader } from "@/components/site/SiteHeader"
import { business, gallery, promises, services, stats } from "@/lib/site"

const h2 = "text-[clamp(32px,3.4vw,46px)] font-bold leading-[1.05] tracking-[-0.03em]"

export default function Home() {
  return (
    <FinishProvider>
      <SiteHeader />
      <main>
        <FinishShowcase />

        {/* Key figures */}
        <section aria-label="At a glance" className="px-4 sm:px-[4vw]">
          <dl className="mx-auto grid max-w-[1280px] grid-cols-2 border-y border-charcoal-line lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse py-6 pr-5">
                <dt className="text-sm text-stone-muted">{s.label}</dt>
                <dd className="text-[34px] font-bold text-oak">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Services */}
        <section id="services" className="px-4 py-24 sm:px-[4vw] md:py-26">
          <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[1fr_2fr]">
            <div className="flex flex-col gap-3.5">
              <h2 className={h2}>Everything for the inside of your home</h2>
              <p className="text-stone">From one wardrobe to a full renovation, handled by one team.</p>
            </div>
            <ul>
              {services.map((s) => (
                <li key={s.title} className="flex items-center gap-6 border-t border-charcoal-line py-5">
                  <Image
                    src={s.image}
                    alt=""
                    placeholder="blur"
                    sizes="96px"
                    className="h-30 w-24 shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[22px] font-bold">{s.title}</h3>
                    <p className="text-stone">{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="px-4 pb-24 sm:px-[4vw] md:pb-26">
          <div className="mx-auto max-w-[1280px]">
            <h2 className={`${h2} mb-9`}>Gallery</h2>
            <ul className="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map((g) => (
                <li key={g.alt}>
                  <figure className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                      src={g.image}
                      alt={g.alt}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 310px"
                      className="object-cover"
                    />
                    <figcaption className="absolute bottom-2.5 left-2.5 rounded-md bg-charcoal px-3 py-1.5 text-sm">
                      {g.label}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Promises */}
        <section className="bg-oak px-4 py-18 text-charcoal sm:px-[4vw]">
          <ul className="mx-auto grid max-w-[1280px] gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <li key={p.title} className="flex flex-col gap-1.5 border-t-2 border-charcoal pt-4">
                <span className="text-xl font-bold">{p.title}</span>
                <span className="text-oak-ink">{p.body}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 py-24 sm:px-[4vw] md:py-26">
          <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col gap-5.5">
              <h2 className={h2}>Ready to start your project?</h2>
              <p className="text-stone">
                Tell us what you have in mind. We will come out, measure up and send a detailed quote, free of charge.
              </p>
              <dl className="grid grid-cols-[max-content_minmax(0,1fr)] gap-x-6 gap-y-3">
                <dt className="text-stone-muted">Phone</dt>
                <dd className="whitespace-nowrap font-semibold">
                  <a href={business.phoneHref} className="hover:text-oak">
                    {business.phone}
                  </a>
                </dd>
                <dt className="text-stone-muted">Email</dt>
                <dd className="break-words font-semibold">
                  <a href={`mailto:${business.email}`} className="hover:text-oak">
                    {business.email}
                  </a>
                </dd>
                <dt className="text-stone-muted">Address</dt>
                <dd className="font-semibold">
                  <a href={business.mapsUrl} className="hover:text-oak">
                    {business.address}
                  </a>
                </dd>
              </dl>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-charcoal-line px-4 py-7 text-[15px] text-stone-muted sm:px-[4vw]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3">
          <span>
            © {new Date().getFullYear()} {business.name}
          </span>
          <span>Wardrobes · Cabinets · Ceilings · Tiling</span>
        </div>
      </footer>
    </FinishProvider>
  )
}
