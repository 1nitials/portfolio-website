import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            about
          </Link>
          <Link href="/works" className="text-gray-600 hover:text-gray-900">
            works
          </Link>
        </div>
      </nav>
    </header>
  )
}