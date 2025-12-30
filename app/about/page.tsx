export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            I'm a passionate full-stack developer with 3+ years of experience building 
            web applications. I love creating efficient, scalable solutions and learning 
            new technologies.
          </p>
          <p className="text-gray-600 mb-6">
            When I'm not coding, you can find me exploring new coffee shops, 
            reading tech blogs, or working on open-source projects.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold">Senior Developer</h3>
            <p className="text-blue-600">Company Name • 2022 - Present</p>
            <p className="text-gray-600 mt-2">
              Led development of customer-facing applications using React and Node.js
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}