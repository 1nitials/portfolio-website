'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="space-x-6">
          <Link 
            href="/" 
            className={pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            home
          </Link>
          <Link 
            href="/about" 
            className={pathname === '/about' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            about
          </Link>
          <Link 
            href="/works" 
            className={pathname === '/works' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            works
          </Link>
        </div>
      </nav>
    </header>
  )
}