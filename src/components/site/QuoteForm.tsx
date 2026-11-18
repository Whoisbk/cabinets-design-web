"use client"

import { useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { finishes, serviceOptions } from "@/lib/site"
import { useFinish } from "./FinishContext"

const field =
  "min-h-12 w-full rounded-lg border border-charcoal-field bg-charcoal px-3.5 py-3 text-base text-cream placeholder:text-stone-muted/70 focus:border-oak focus:outline-none"
const labelClass = "grid gap-1.5 text-[15px] text-stone"

export function QuoteForm() {
  const { finish, setFinishId } = useFinish()
  const [sending, setSending] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const preferredFinish = String(data.get("finish") ?? "")
    setSending(true)
    try {
      // Same parameter names as the original form, so the EmailJS template keeps working.
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID ?? "",
        process.env.EMAILJS_TEMPLATE_ID ?? "",
        {
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          finish: preferredFinish,
          message: `Preferred finish: ${preferredFinish}\n\n${data.get("message") ?? ""}`,
        },
        { publicKey: process.env.EMAILJS_PUBLIC_KEY ?? "" },
      )
      toast.success("Thank you! We’ll be in touch to arrange your free consultation.")
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong. Please try again or call us on 079 188 7495.")
    } finally {
      setSending(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-[14px] border border-charcoal-line bg-charcoal-raised p-6 sm:grid-cols-2 sm:p-8"
    >
      <label htmlFor="firstName" className={labelClass}>
        First name
        <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="Nomvula" className={field} />
      </label>
      <label htmlFor="lastName" className={labelClass}>
        Last name
        <input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Dube" className={field} />
      </label>
      <label htmlFor="email" className={labelClass}>
        Email
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.co.za" className={field} />
      </label>
      <label htmlFor="phone" className={labelClass}>
        Phone
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="072 555 0123" className={field} />
      </label>
      <label htmlFor="service" className={labelClass}>
        Service
        <select id="service" name="service" className={field} defaultValue={serviceOptions[0]}>
          {serviceOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label htmlFor="finish" className={labelClass}>
        Preferred finish
        <select
          id="finish"
          name="finish"
          className={field}
          value={finish.name}
          onChange={(e) => {
            const match = finishes.find((f) => f.name === e.target.value)
            if (match) setFinishId(match.id)
          }}
        >
          {finishes.map((f) => (
            <option key={f.id}>{f.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="message" className={`${labelClass} sm:col-span-2`}>
        Your project
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="What would you like built, and in which room?"
          className={`${field} resize-y`}
        />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="min-h-13 rounded-lg bg-oak text-[17px] font-bold text-charcoal transition-colors hover:bg-oak-hover disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  )
}
