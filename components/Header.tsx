'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className="bg-white shadow-sm font-jura font-bold">
      <nav className="container mx-auto px-4 py-4 md:py-8 flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
          <Link 
            href="/" 
            className={`text-sm md:text-base ${pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            home
          </Link>
          <Link 
            href="/music" 
            className={`text-sm md:text-base ${pathname === '/music' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            music
          </Link>
          <Link 
            href="/games" 
            className={`text-sm md:text-base ${pathname === '/games' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            games
          </Link>
          <Link 
            href="/gallery" 
            className={`text-sm md:text-base ${pathname === '/gallery' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            gallery
          </Link>
          <Link 
            href="/coding" 
            className={`text-sm md:text-base ${pathname === '/coding' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            coding
          </Link>
          <Link 
            href="/about" 
            className={`text-sm md:text-base ${pathname === '/about' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            about
          </Link>
        </div>
      </nav>
    </header>
  )
}