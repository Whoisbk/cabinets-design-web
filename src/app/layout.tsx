import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"
import { Bounce, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CabinetsHero from "../../public/images/slider-cabinets.jpg"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const description =
  "Custom wardrobes, walk-in closets, kitchen cabinets, ceilings and tiling, built to measure by Mbalagani Interiors & Renovations."

export const metadata: Metadata = {
  metadataBase: new URL("https://mbalaganiinteriors.vercel.app"),
  title: "Mbalagani Interiors & Renovations",
  description,
  openGraph: {
    url: "https://mbalaganiinteriors.vercel.app",
    images: [CabinetsHero.src],
    title: "Mbalagani Interiors & Renovations",
    description,
    siteName: "Mbalagani Interiors & Renovations",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mbalaganiinteriors.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} bg-charcoal font-sans text-[17px] leading-relaxed text-cream antialiased`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        {children}
      </body>
    </html>
  )
}
