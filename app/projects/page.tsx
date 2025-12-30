import ProjectCard from '../../components/ProjectCard'

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project1",
    demo: "https://project1-demo.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/username/project2",
    demo: "https://project2-demo.com"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}