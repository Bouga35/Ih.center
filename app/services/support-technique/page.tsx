import Image from "next/image"
import Link from "next/link"

export default function SupportTechnique() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Support Technique</h1>
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Support Technique"
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          Notre équipe de support technique est composée d'experts qualifiés capables de résoudre rapidement et
          efficacement les problèmes techniques de vos clients. Nous offrons un support de premier et de deuxième niveau
          pour une large gamme de produits et services.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos services incluent :</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Dépannage à distance</li>
          <li>Gestion des tickets d'incident</li>
          <li>Support par téléphone, e-mail et chat</li>
          <li>Documentation technique et base de connaissances</li>
          <li>Escalade des problèmes complexes</li>
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

