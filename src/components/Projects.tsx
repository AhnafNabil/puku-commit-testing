import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with React and Node.js',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'E-commerce platform with payment integration',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Real-time chat application with WebSocket',
    tags: ['React', 'Socket.io', 'Express'],
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-accent">Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="bg-gray-700 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}