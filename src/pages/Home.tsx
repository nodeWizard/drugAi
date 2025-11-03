import { Link } from 'react-router-dom'
import { backgroundVideo } from '../assets'

function Home() {
  return (
    <div className="relative w-full overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            DrugAI – L'IA qui accélère la découverte de médicaments
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md leading-relaxed">
            Découvrir un nouveau médicament prend en moyenne <span className="font-semibold">12 ans</span> et coûte plus de <span className="font-semibold">2 milliards de dollars</span>. Grâce à des modèles comme AlphaFold, l'intelligence artificielle permet de prédire la structure des protéines et de réduire considérablement le temps et le coût de recherche.
          </p>
          <Link
            to="/recherche"
            className="inline-block bg-blue-950 hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explorer les gènes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
