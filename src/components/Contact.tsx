import { useState, FormEvent } from 'react'
import { Send, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 1000)
  }

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-accent/20 p-4 rounded-lg">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">hello@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-accent/20 p-4 rounded-lg">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">New York, USA</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-accent/20 p-4 rounded-lg">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+1 234 567 890</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}