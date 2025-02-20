"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Modal from "./Modal"

export default function RecruitmentAnnouncement() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log("Submitted email:", email)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section id="recruitment" className="relative py-16 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        alt="Recruitment Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-blue-600 bg-opacity-70 z-10" />
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Journées portes ouvertes recrutement
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center mb-8"
        >
          Venez muni de votre CV et repartez avec un job du lundi au vendredi
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Rejoignez notre équipe et façonnez l'avenir du service client !
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Postuler maintenant
          </button>
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setIsSubmitted(false)
        }}
      >
        <div className="p-6">
          {!isSubmitted ? (
            <>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Postuler chez IH.center</h3>
              <p className="mb-4 text-gray-600">
                Merci de votre intérêt pour rejoindre notre équipe. Veuillez nous laisser votre adresse e-mail, et nous
                vous contacterons avec plus d'informations sur le processus de recrutement.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="votre@email.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Envoyer
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Merci pour votre candidature !</h3>
              <p className="mb-4 text-gray-600">
                Nous avons bien reçu votre adresse e-mail. Notre équipe de recrutement vous contactera prochainement
                avec plus d'informations.
              </p>
              <button
                onClick={() => {
                  setIsModalOpen(false)
                  setIsSubmitted(false)
                }}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Retour à l'accueil
              </button>
            </div>
          )}
        </div>
      </Modal>
    </section>
  )
}

