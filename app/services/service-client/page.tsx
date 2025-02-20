"use client"

import Image from "next/image"
import Link from "next/link"

export default function ServiceClient() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Service Client</h1>
        <Image
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Service Client"
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          Notre service client est conçu pour offrir une expérience exceptionnelle à vos clients. Nous formons nos
          agents pour qu'ils soient empathiques, efficaces et capables de résoudre rapidement les problèmes. Que ce soit
          par téléphone, e-mail ou chat en direct, nous sommes là pour représenter votre marque avec professionnalisme.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos offres incluent :</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Gestion des appels entrants et sortants</li>
          <li>Support par e-mail et chat en direct</li>
          <li>Gestion des réclamations et résolution des problèmes</li>
          <li>Enquêtes de satisfaction client</li>
          <li>Support multilingue</li>
        </ul>
        <Link
          href="/"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

