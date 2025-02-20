"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useScrollToHash } from "../hooks/useScrollToHash"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useScrollToHash()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    window.history.pushState(null, "", href)
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              IH.center
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#home"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              onClick={(e) => handleLinkClick(e, "/#home")}
            >
              Accueil
            </a>
            <a
              href="#about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              onClick={(e) => handleLinkClick(e, "/#about")}
            >
              À propos
            </a>
            <a
              href="#services"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              onClick={(e) => handleLinkClick(e, "/#services")}
            >
              Services
            </a>
            <a
              href="#recruitment"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              onClick={(e) => handleLinkClick(e, "/#recruitment")}
            >
              Recrutement
            </a>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="text-2xl font-bold text-blue-600">
                    IH.center
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="#home"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={(e) => handleLinkClick(e, "/#home")}
                  >
                    Accueil
                  </a>
                  <a
                    href="#about"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={(e) => handleLinkClick(e, "/#about")}
                  >
                    À propos
                  </a>
                  <a
                    href="#services"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={(e) => handleLinkClick(e, "/#services")}
                  >
                    Services
                  </a>
                  <a
                    href="#recruitment"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={(e) => handleLinkClick(e, "/#recruitment")}
                  >
                    Recrutement
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

