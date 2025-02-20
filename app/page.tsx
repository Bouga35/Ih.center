"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Users,
  Headphones,
  BarChart,
  PhoneCall,
  HeadsetIcon,
  BarChartIcon,
  UsersIcon,
  Clock,
  Globe,
} from "lucide-react"
import Header from "./components/Header"
import RecruitmentAnnouncement from "./components/RecruitmentAnnouncement"
import ImageCarousel from "./components/ImageCarousel"
import { useScrollToHash } from "./hooks/useScrollToHash"

export default function Home() {
  useScrollToHash()

  return (
    <>
      <Header />
      <section id="home" className="relative min-h-screen pt-16">
        <div className="absolute inset-0 z-10">
          <ImageCarousel />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4 text-center"
          >
            IH.center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-center mb-8"
          >
            Votre partenaire de confiance en solutions de centre d'appels
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-center mb-12"
          >
            Façonnons ensemble l'avenir du service client
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#services"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Découvrez nos services
            </Link>
          </motion.div>
        </div>
      </section>
      <section id="about" className="py-16 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center text-gray-800"
          >
            À propos de IH.center
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Notre Mission</h3>
              <p className="text-lg mb-6 text-gray-600">
                Chez IH.center, notre mission est de fournir des solutions de centre d'appels de haute qualité, en
                mettant l'accent sur l'excellence du service client et l'innovation technologique. Nous nous efforçons
                de créer une expérience exceptionnelle pour nos clients et leurs clients.
              </p>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg text-gray-700">Équipe expérimentée et dévouée</span>
              </div>
              <div className="flex items-center mb-4">
                <Headphones className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg text-gray-700">Support client 24/7</span>
              </div>
              <div className="flex items-center mb-4">
                <BarChart className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg text-gray-700">Solutions personnalisées pour votre entreprise</span>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg text-gray-700">Disponibilité 7j/7, 24h/24</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg text-gray-700">Services multilingues</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">Contactez-nous</h3>
              <div className="flex items-center mb-4">
              <a
                href="https://maps.app.goo.gl/uWTDchg79sdBAjnQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <MapPin className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0" />
                <span className="text-lg text-blue-600 hover:underline">
                  Lots al wahda immeuble 515. 2eme étage appart 03 mohammedia
                </span>
              </a>
            </div>
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 mr-3 text-blue-600" />
                <a href="tel:+212523281065" className="text-lg text-blue-600 hover:underline">
                  +212 5 23 28 10 65
                </a>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                <a href="mailto:ihcallrecrute@gmail.com" className="text-lg text-blue-600 hover:underline">
                  ihcallrecrute@gmail.com
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-700">Horaires d'ouverture</h4>
                <p className="text-lg text-gray-600">
                  Lundi - Vendredi : 9h00 - 18h00
                  <br />
                  Samedi : 9h00 - 13h00
                  <br />
                  Dimanche : Fermé
                </p>
              </div>
            <div className="mt-6">
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.162176149587!2d-7.38958212435956!3d33.6788646373536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b68f01a61fb3%3A0x8a216fa7cad8f5c8!2sAl%20Wahda!5e0!3m2!1sen!2sma!4v1740055229029!5m2!1sen!2sma"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">location</iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="services" className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center text-gray-800"
          >
            Nos Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <PhoneCall className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service client</h3>
              <p className="text-gray-600 mb-4">Support client professionnel et réactif pour vos clients.</p>
              <Link href="/services/service-client" className="text-blue-600 hover:underline">
                En savoir plus
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <HeadsetIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support technique</h3>
              <p className="text-gray-600 mb-4">Assistance technique experte pour résoudre les problèmes rapidement.</p>
              <Link href="/services/support-technique" className="text-blue-600 hover:underline">
                En savoir plus
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <BarChartIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ventes et marketing</h3>
              <p className="text-gray-600 mb-4">Campagnes de vente et de marketing pour développer votre entreprise.</p>
              <Link href="/services/ventes-et-marketing" className="text-blue-600 hover:underline">
                En savoir plus
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <UsersIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestion de la relation client</h3>
              <p className="text-gray-600 mb-4">Solutions CRM personnalisées pour fidéliser vos clients.</p>
              <Link href="/services/gestion-relation-client" className="text-blue-600 hover:underline">
                En savoir plus
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="recruitment">
        <RecruitmentAnnouncement />
      </section>
    </>
  )
}

