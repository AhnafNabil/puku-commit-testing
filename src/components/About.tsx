export default function About() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-4">
              I'm a passionate full-stack developer with experience in building
              modern web applications. I love creating beautiful, functional, and
              user-friendly solutions.
            </p>
            <p className="text-gray-300 mb-4">
              With a strong foundation in both frontend and backend technologies,
              I bring a holistic approach to every project I work on.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-accent">3+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-accent">50+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-accent">30+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-accent">15+</p>
              <p className="text-gray-400">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}