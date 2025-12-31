export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* About content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">hello!</h1>
        <div className="prose prose-lg">
          <p className="text-xl text-gray-600 mb-4">
            i made this website to have a better view of my works, 
            and to easily show it to other people. (thus the very original layout idea i have here) i hope to redesign
            this down the line when i actually figure out how i want my "portfolio" website
            to ACTUALLY look.
          </p>
          <p className="text-gray-600 text-xs mb-16">
            i say "portfolio" because i also want this to be my personal site
          </p>
          <p className="text-xl text-gray-600">
            but in the meantime, have some minimalist slop lol
          </p>
        </div>
      </div>
      
      {/* Inner thoughts section */}
      <div className="mt-24">
        <h2 className="text-sm text-center font-bold mb-4 md:mb-48">blogposts in the big 2026?</h2>
        <div className="relative">
          {/* Continuous line - horizontal on desktop, vertical on mobile */}
          <div className="absolute md:top-4 md:left-0 md:right-0 md:h-0.5 md:w-full top-0 left-4 bottom-0 w-0.5 h-full bg-gray-300"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
            <div className="relative md:pl-0 pl-12">
              {/* Branch line - vertical on desktop, horizontal on mobile */}
              <div className="absolute md:top-4 md:left-1/2 md:w-0.5 md:h-6 md:transform md:-translate-x-1/2 top-3 left-4 w-6 h-0.5 bg-gray-300"></div>
              {/* Circle dot */}
              <div className="absolute md:top-3 md:left-1/2 md:transform md:-translate-x-1/2 top-2 left-3 w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="md:pt-12 pt-0">
                <a href="#" className="font-semibold text-blue-600 hover:text-blue-800">New Years?</a>
                <p className="text-sm text-gray-500">Jan 1, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}