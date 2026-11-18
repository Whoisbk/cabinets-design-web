"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { finishes, type Finish } from "@/lib/site"

type FinishState = { finish: Finish; setFinishId: (id: Finish["id"]) => void }

const FinishContext = createContext<FinishState | null>(null)

/** Shares the finish picked in the hero with the quote form further down the page. */
export function FinishProvider({ children }: { children: ReactNode }) {
  const [id, setFinishId] = useState<Finish["id"]>("greige")
  const finish = finishes.find((f) => f.id === id) ?? finishes[0]
  return <FinishContext.Provider value={{ finish, setFinishId }}>{children}</FinishContext.Provider>
}

export function useFinish() {
  const ctx = useContext(FinishContext)
  if (!ctx) throw new Error("useFinish must be used inside FinishProvider")
  return ctx
}
