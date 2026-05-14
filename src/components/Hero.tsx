import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-accent">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer | Designer | Creative Thinker
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View My Work
            <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}