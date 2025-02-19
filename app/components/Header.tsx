"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-white bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              IH.center
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-gray-900">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-gray-900">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="#recruitment" className="text-gray-600 hover:text-gray-900">
                  Recrutement
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Accueil
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              À propos
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Nos services
            </Link>
            <Link
              href="#recruitment"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Recrutement
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

