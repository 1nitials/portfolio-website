interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
}

export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span 
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a 
          href={github}
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a 
          href={demo}
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}