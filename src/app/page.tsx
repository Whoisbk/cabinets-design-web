"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Hammer,
  Home,
  Palette,
  ChefHat,
  Clock,
  Award,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CabinetsHero from "../../public/images/cabinets-1.jpg"
import SliderCabinets from "../../public/images/slider-cabinets.jpg"
import WalkInCloset from "../../public/images/walk-in-cabinets.jpg"
import BathroomTiles from "../../public/images/bathoom-tile.jpg"
import LivingRoom from "../../public/images/living-room-cabinets.jpg"
import KitchenCabinets from "../../public/images/custom-cabinets.jpg"
import Ceiling from "../../public/images/Cieling.jpg"
import CustomWardrobe from "../../public/images/custome-room.jpg"
import { useState } from "react"
import emailjs from 'emailjs-com';
import { toast } from "react-toastify"
export default function HomePage() {
  const [isSending, setIsSending] = useState(false)
  const [sendMessage, setSendMessage] = useState<string | null>(null)
  const [sendError, setSendError] = useState<string | null>(null)

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    setSendMessage(null)
    setSendError(null)

    try {
      await emailjs.sendForm(
        process.env.EMAILJS_SERVICE_ID ?? "",
        process.env.EMAILJS_TEMPLATE_ID ?? "",
        event.currentTarget,
        process.env.EMAILJS_PUBLIC_KEY ?? ""
      )

      // setSendMessage("Message Sent Successfully")
      toast.success("Message Sent Successfully")
      // Reset form after successful submission

    } catch (error) {
      console.log(error)
      // setSendError("Something went wrong! Please try again.")
      toast.error("Something went wrong! Please try again.")
    } finally {
      setIsSending(false)
    }
  }
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">Mbalangani <span className="text-orange-600">Interiors & Renovations</span></span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="#contact">Get Quote</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-orange-50 w-full flex justify-center">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto text-center">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  Premium Home Renovation
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Transform Your{" "}
                  <span className="text-orange-600 block">Dream Home</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-[600px]">
                  Expert craftsmanship in floor tiles, ceiling installation, custom wardrobes, and kitchen cabinets. We
                  bring your vision to life with quality materials and professional service.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8">
                  <Link href="#contact">Start Your Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">30+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-gray-900">5</span>
                  </div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={CabinetsHero}
                alt="Modern home renovation showcase"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-semibold">Quality Guaranteed</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white w-full flex justify-center">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Our Specialties
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Professional Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              From concept to completion, we deliver exceptional results in every aspect of home renovation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit group-hover:bg-orange-200 transition-colors">
                  <Palette className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Floor Tiles</CardTitle>
                <CardDescription>Premium tile installation for kitchens, bathrooms, and living spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Ceramic & Porcelain
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Natural Stone
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Luxury Vinyl
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom Patterns
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit group-hover:bg-orange-200 transition-colors">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Ceiling Installation</CardTitle>
                <CardDescription>Modern ceiling solutions including suspended and decorative ceilings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Drop Ceilings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Coffered Ceilings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    LED Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Acoustic Solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit group-hover:bg-orange-200 transition-colors">
                  <Hammer className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Custom Wardrobes</CardTitle>
                <CardDescription>Bespoke wardrobe solutions designed to maximize your storage space</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Built-in Wardrobes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Walk-in Closets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sliding Doors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom Fittings
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit group-hover:bg-orange-200 transition-colors">
                  <ChefHat className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Kitchen Cabinets</CardTitle>
                <CardDescription>Modern kitchen cabinet design and installation for your dream kitchen</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom Design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Premium Materials
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Soft-Close Hardware
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Complete Installation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 w-full flex justify-center">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Our Work
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              See how we&apos;ve transformed homes with our expert craftsmanship and attention to detail
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={KitchenCabinets}
                      alt="Modern kitchen renovation"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600">Kitchen Renovation</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Modern Kitchen Makeover</h3>
                    <p className="text-gray-600 text-sm">
                      Complete kitchen renovation with custom cabinets and premium tile flooring
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="p-4 pb-2">
                  <DialogTitle>Modern Kitchen Makeover</DialogTitle>
                  <DialogDescription>
                    Complete kitchen renovation with custom cabinets and premium tile flooring
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 pt-0 overflow-auto">
                  <Image
                    src={KitchenCabinets}
                    alt="Modern kitchen renovation - Full view"
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={BathroomTiles}
                      alt="Luxury bathroom tiles"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600">Bathroom Tiles</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Luxury Bathroom Design</h3>
                    <p className="text-gray-600 text-sm">Elegant marble tile installation with custom ceiling features</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="p-4 pb-2">
                  <DialogTitle>Luxury Bathroom Design</DialogTitle>
                  <DialogDescription>
                    Elegant marble tile installation with custom ceiling features
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 pt-0 overflow-auto">
                  <Image
                    src={BathroomTiles}
                    alt="Luxury bathroom tiles - Full view"
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={WalkInCloset}
                      alt="Custom wardrobe installation"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600">Custom Wardrobe</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Walk-in Closet Design</h3>
                    <p className="text-gray-600 text-sm">Bespoke wardrobe solution with integrated lighting and storage</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="p-4 pb-2">
                  <DialogTitle>Walk-in Closet Design</DialogTitle>
                  <DialogDescription>
                    Bespoke wardrobe solution with integrated lighting and storage
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 pt-0 overflow-auto">
                  <Image
                    src={WalkInCloset}
                    alt="Custom wardrobe installation - Full view"
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={Ceiling}
                      alt="Living room ceiling"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600">Ceiling Design</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Coffered Ceiling Installation</h3>
                    <p className="text-gray-600 text-sm">Sophisticated ceiling design with integrated LED lighting</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="p-4 pb-2">
                  <DialogTitle>Coffered Ceiling Installation</DialogTitle>
                  <DialogDescription>
                    Sophisticated ceiling design with integrated LED lighting
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 pt-0 overflow-auto">
                  <Image
                    src={Ceiling}
                    alt="Living room ceiling - Full view"
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={CustomWardrobe}
                      alt="Floor tile pattern"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600">Floor Tiles</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Luxury Built-In Walk-In Closet</h3>
                    <p className="text-gray-600 text-sm">Experience refined storage with this custom-built walk-in closet. </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="p-4 pb-2">
                  <DialogTitle>Luxury Built-In Walk-In Closet</DialogTitle>
                  <DialogDescription>
                    Experience refined storage with this custom-built walk-in closet.
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 pt-0 overflow-auto">
                  <Image
                    src={CustomWardrobe}
                    alt="Floor tile pattern - Full view"
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={LivingRoom}
                      alt="Complete home renovation"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600">Full Renovation</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Modern Floating TV Unit with Accent Wall</h3>
                    <p className="text-gray-600 text-sm">This sleek floating TV unit combines clean, modern lines with practical storage</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="p-4 pb-2">
                  <DialogTitle>Modern Floating TV Unit with Accent Wall</DialogTitle>
                  <DialogDescription>
                    This sleek floating TV unit combines clean, modern lines with practical storage
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 pt-0 overflow-auto">
                  <Image
                    src={LivingRoom}
                    alt="Complete home renovation - Full view"
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white w-full flex justify-center">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  About Mbalangani Interiors & Renovations
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Crafting Beautiful Homes Since 2008
                </h2>
                <p className="text-lg text-gray-600">
                  With over 15 years of experience in home renovation, Mbalangani Interiors & Renovations has established itself as the premier
                  choice for homeowners seeking quality craftsmanship and exceptional service.
                </p>
                <p className="text-gray-600">
                  Our team of skilled professionals specializes in transforming spaces through expert installation of
                  floor tiles, innovative ceiling solutions, custom wardrobes, and beautiful kitchen cabinets. We pride
                  ourselves on attention to detail, using only the finest materials, and delivering projects on time and
                  within budget.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">On-Time Delivery</div>
                    <div className="text-sm text-gray-600">Every project completed as promised</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm text-gray-600">Recognized for excellence in renovation</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Expert Team</div>
                    <div className="text-sm text-gray-600">Skilled craftsmen with years of experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={SliderCabinets}
                alt="Our professional team at work"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 w-full flex justify-center">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Contact us today for a free consultation and quote. Let&apos;s bring your vision to life!
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="079 188 7495" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select id="service" name="service" className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Select a service</option>
                      <option>Floor Tiles</option>
                      <option>Ceiling Installation</option>
                      <option>Custom Wardrobes</option>
                      <option>Kitchen Cabinets</option>
                      <option>Complete Renovation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[120px]" required />
                  </div>
                  <Button type="submit" disabled={isSending} className="w-full bg-orange-600 hover:bg-orange-700">
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                  {sendMessage && (
                    <p className="text-green-600 text-sm" role="status">{sendMessage}</p>
                  )}
                  {sendError && (
                    <p className="text-red-600 text-sm" role="alert">{sendError}</p>
                  )}
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-600">079 188 7495</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">mbalangani2@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-gray-600">3949 maripani street</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-orange-50 border-orange-200">
                <h4 className="font-semibold text-lg mb-4">Why Choose Mbalangani Interiors & Renovations?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-sm">Free consultation and detailed quotes</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-sm">5-year warranty on all work</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-sm">Flexible financing options available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-sm">Clean, professional work environment</span>
                  </li>
                </ul>
              </Card>


            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full flex justify-center">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Home className="h-8 w-8 text-orange-600" />
                <span className="text-xl font-bold">Mbalangani Interiors & Renovations</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming homes with expert craftsmanship in floor tiles, ceilings, wardrobes, and kitchen cabinets.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/tebogo.tebza.1650" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </Link>
                {/* <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-xs">in</span>
                </div> */}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#portfolio" className="hover:text-white transition-colors">
                    Floor Tiles
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-white transition-colors">
                    Ceiling Installation
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-white transition-colors">
                    Custom Wardrobes
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-white transition-colors">
                    Kitchen Cabinets
                  </Link>
                </li>
              </ul>
            </div>



            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="tel:0791887495" className="hover:text-white transition-colors">079 188 7495</Link></li>
                <li><Link href="mailto:mbalangani2@gmail.com" className="hover:text-white transition-colors">mbalangani2@gmail.com</Link></li>
                <li><Link href="https://maps.app.goo.gl/3949maripani" className="hover:text-white transition-colors">3949 maripani street</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Mbalangani Interiors & Renovations. All rights reserved. | Privacy Policy
              | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
