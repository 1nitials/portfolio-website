export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/username" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/username" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400">
            Email
          </a>
        </div>
        <p className="text-gray-400">
          © 2024 Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}