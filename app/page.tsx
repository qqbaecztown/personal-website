/* eslint-disable @next/next/no-img-element */
import { Aperture, Mail } from "lucide-react"

const work = [
  {
    title: "Soft portrait",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=82",
    alt: "Portrait of a woman in soft natural light",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Open water",
    category: "Landscape",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=82",
    alt: "Wide mountain landscape with a winding river",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Studio study",
    category: "Editorial",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=82",
    alt: "Camera on a table in warm studio light",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Mountain quiet",
    category: "Landscape",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=82",
    alt: "Quiet mountain lake at dusk",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Morning portrait",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=82",
    alt: "Portrait of a man in soft window light",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Still room",
    category: "Still life",
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1400&q=82",
    alt: "Simple room with natural light and clean lines",
    aspect: "aspect-[4/3]",
  },
]

const pricing = [
  {
    service: "Portrait session",
    scope: "One person, one location, 90 minutes",
    price: "$350",
  },
  {
    service: "Half-day commission",
    scope: "Up to four hours, one subject or small team",
    price: "$750",
  },
  {
    service: "Full-day project",
    scope: "Eight hours, multiple locations or scenes",
    price: "$1,400",
  },
  {
    service: "Editorial day rate",
    scope: "Publication work with licensing and delivery",
    price: "$1,100",
  },
]

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-ink uppercase"
          >
            <Aperture className="h-4 w-4" strokeWidth={1.5} />
            <span>Am0r3</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-stone md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:baecztown@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink md:hidden"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink text-white">
          <img
            src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=2400&q=86"
            alt="Photographer holding a camera in a dimly lit room"
            className="absolute inset-0 h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

          <div className="relative mx-auto w-full max-w-6xl px-6 pt-40 pb-20 sm:pb-24">
            <p className="mb-6 text-xs tracking-[0.24em] text-white/70 uppercase">
              Photographer
            </p>
            <h1 className="max-w-3xl font-display text-6xl leading-[0.9] font-medium tracking-[-0.02em] sm:text-7xl lg:text-8xl">
              Am0r3
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
              Portraits, landscapes, and quiet documentary work made with
              patience and natural light.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                View work
              </a>
              <a
                href="mailto:baecztown@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 underline decoration-white/40 underline-offset-8 hover:decoration-white"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                baecztown@gmail.com
              </a>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 border-b border-line py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-5 text-xs tracking-[0.2em] text-stone uppercase">
                Introduction
              </p>
              <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-[-0.02em] sm:text-6xl">
                Quiet, deliberate images.
              </h2>
            </div>
            <div className="max-w-2xl space-y-6 text-base leading-8 text-stone">
              <p>
                I photograph people and places with patience and restraint. My
                work is built around natural light, honest color, and unhurried
                time with the subject.
              </p>
              <p>
                I take on portraits, editorial commissions, and longer
                documentary projects. The aim is always the same: to make
                pictures that feel close, calm, and true to the moment.
              </p>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-20 border-b border-line py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-5 text-xs tracking-[0.2em] text-stone uppercase">
                  Selected work
                </p>
                <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-[-0.02em] sm:text-6xl">
                  A few recent photographs.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-stone">
                Portrait, landscape, and documentary work from recent
                commissions and personal projects.
              </p>
            </div>

            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {work.map((item) => (
                <figure
                  key={item.title}
                  className="group mb-6 break-inside-avoid"
                >
                  <div className={`${item.aspect} overflow-hidden bg-line`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                  <figcaption className="flex items-baseline justify-between gap-4 pt-3 text-sm">
                    <span className="font-medium text-ink">{item.title}</span>
                    <span className="text-xs tracking-[0.14em] text-stone uppercase">
                      {item.category}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <details className="mt-12 max-w-3xl border border-line bg-white/40 px-5 py-4 text-sm text-stone">
              <summary className="cursor-pointer font-medium text-ink">
                Image replacement notes
              </summary>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  Replace the hero background with one strong, full-bleed
                  photograph from your recent work.
                </li>
                <li>
                  Replace each work tile with the matching finished photograph
                  at 1600px on the long edge.
                </li>
                <li>
                  Use consistent crops for the portrait and landscape tiles so
                  the grid rhythm stays calm.
                </li>
              </ol>
            </details>
          </div>
        </section>

        <section
          id="pricing"
          className="scroll-mt-20 border-b border-line bg-[#ebe8e1] py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="mb-5 text-xs tracking-[0.2em] text-stone uppercase">
                Pricing
              </p>
              <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-[-0.02em] sm:text-6xl">
                Commissions and day rates.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone">
                Starting points for typical projects. A final quote depends on
                scope, travel, usage, and production needs.
              </p>
            </div>

            <div className="overflow-x-auto border border-line bg-paper">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-xs tracking-[0.14em] text-stone uppercase">
                    <th className="px-5 py-4 font-medium">Service</th>
                    <th className="px-5 py-4 font-medium">Scope</th>
                    <th className="px-5 py-4 text-right font-medium">
                      Starting at
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {pricing.map((item) => (
                    <tr key={item.service}>
                      <td className="px-5 py-5 align-top font-medium text-ink">
                        {item.service}
                      </td>
                      <td className="px-5 py-5 align-top leading-7 text-stone">
                        {item.scope}
                      </td>
                      <td className="px-5 py-5 text-right align-top text-base font-medium text-ink">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-5 text-xs tracking-[0.2em] text-stone uppercase">
              Contact
            </p>
            <h2 className="max-w-3xl font-display text-5xl leading-[1.02] font-medium tracking-[-0.02em] sm:text-6xl">
              Tell me about the pictures you have in mind.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone">
              For commissions, editorial work, or general questions, email is
              the quickest way to reach me.
            </p>
            <a
              href="mailto:baecztown@gmail.com"
              className="mt-9 inline-flex items-center gap-3 border-b border-ink pb-1 text-xl font-medium text-ink transition-colors hover:text-stone"
            >
              <Mail className="h-5 w-5" strokeWidth={1.5} />
              baecztown@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 text-sm text-stone sm:flex-row">
          <p>Am0r3 Photography</p>
          <p>Photographs sourced from Unsplash and marked for replacement.</p>
        </div>
      </footer>
    </div>
  )
}
