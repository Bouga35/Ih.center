import Image from "next/image"
import Link from "next/link"

export default function GestionRelationClient() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Gestion de la Relation Client</h1>
        <Image
          src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Gestion de la Relation Client"
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          Notre service de gestion de la relation client (CRM) vous aide à construire et maintenir des relations
          durables avec vos clients. Nous utilisons des outils et des stratégies avancés pour améliorer la fidélisation
          et maximiser la valeur de chaque client.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos services incluent :</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Mise en place et gestion de systèmes CRM</li>
          <li>Analyse des données clients</li>
          <li>Programmes de fidélisation</li>
          <li>Gestion des retours et feedbacks clients</li>
          <li>Personnalisation des interactions client</li>
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

