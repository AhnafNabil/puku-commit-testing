const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'MongoDB', level: 75 },
  { name: 'Docker', level: 65 },
  { name: 'AWS', level: 60 },
]

export default function Skills() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-accent">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}