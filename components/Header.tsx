'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className="bg-white shadow-sm font-jura font-bold">
      <nav className="container mx-auto px-4 py-6 flex justify-center items-center">
        <div className="space-x-12">
          <Link 
            href="/" 
            className={pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            home
          </Link>
          <Link 
            href="/music" 
            className={pathname === '/music' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            music
          </Link>
          <Link 
            href="/games" 
            className={pathname === '/games' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            games
          </Link>
          <Link 
            href="/gallery" 
            className={pathname === '/gallery' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            gallery
          </Link>
          <Link 
            href="/coding" 
            className={pathname === '/coding' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            coding
          </Link>
          <Link 
            href="/about" 
            className={pathname === '/about' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
          >
            about
          </Link>
        </div>
      </nav>
    </header>
  )
}