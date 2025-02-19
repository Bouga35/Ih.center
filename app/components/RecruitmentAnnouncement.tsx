"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function RecruitmentAnnouncement() {
  return (
    <section className="relative py-16 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="mailto:ihcallrecrute@gmail.com"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Postuler maintenant
          </a>
        </motion.div>
      </div>
    </section>
  )
}

