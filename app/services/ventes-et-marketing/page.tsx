import Image from "next/image"
import Link from "next/link"

export default function VentesEtMarketing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Ventes et Marketing</h1>
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
          alt="Ventes et Marketing"
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          Nos services de ventes et marketing sont conçus pour aider votre entreprise à croître et à atteindre de
          nouveaux marchés. Nous combinons des stratégies éprouvées avec des techniques innovantes pour maximiser vos
          résultats.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos offres comprennent :</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Télémarketing et génération de leads</li>
          <li>Campagnes de vente sortantes</li>
          <li>Gestion des campagnes marketing</li>
          <li>Enquêtes de marché</li>
          <li>Suivi et qualification des prospects</li>
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

