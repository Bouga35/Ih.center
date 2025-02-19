import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">IH.center</h3>
            <p className="text-sm text-gray-300">Votre partenaire de confiance en solutions de centre d'appels</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white transition duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-gray-300 hover:text-white transition duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-gray-300 hover:text-white transition duration-300">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/#recruitment" className="text-sm text-gray-300 hover:text-white transition duration-300">
                  Recrutement
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-300 mb-2">Lots al wahda immeuble 515. 2eme étage appart 03 mohammedia</p>
            <Link
              href="mailto:ihcallrecrute@gmail.com"
              className="text-sm text-gray-300 hover:text-white transition duration-300"
            >
              ihcallrecrute@gmail.com
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} IH.center. Tous droits réservés.</p>
          <p className="text-xs text-gray-400 mt-2">
            Images par{" "}
            <a
              href="https://unsplash.com/@linkedinsalesnavigator"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Sales Solutions
            </a>
            ,{" "}
            <a
              href="https://unsplash.com/@jasongoodman_youxventures"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jason Goodman
            </a>
            ,{" "}
            <a
              href="https://unsplash.com/@arlington_research"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arlington Research
            </a>
            , et{" "}
            <a
              href="https://unsplash.com/@wocintechchat"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Christina @ wocintechchat.com
            </a>{" "}
            sur{" "}
            <a href="https://unsplash.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

