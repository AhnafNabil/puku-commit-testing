import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}