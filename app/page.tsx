import Image from "next/image"
import Dennis from "../images/dennis.png"
import { siGithub, siInstagram, siGmail } from 'simple-icons'
import { featuredProjects, getIcon } from '../data/projects'
import DoughnutChart from '../components/DoughnutChart'

const months: string[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const extraColumnMonths = new Set<number>([0, 2, 7, 10, 11]);
const slotsPerMonth: number = 4;

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      {/* Top row */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile section */}
        <section className="border border-gray-300 p-6 rounded-lg">
          <Image src={Dennis} alt="Dennis" width={200} height={200} className="rounded-full" />
          <div className="flex gap-4 mt-4 justify-left ml-2 text-gray-700">
            <a href="https://github.com/1nitials" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-black">
                <path d={siGithub.path} />
              </svg>
            </a>
            <a href="https://www.instagram.com/_ronnie.jd/" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-black">
                <path d={siInstagram.path} />
              </svg>
            </a>
            <a href="mailto:ronnie.1nitials@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-black">
                <path d={siGmail.path} />
              </svg>
            </a>
          </div>
          <div className="pt-2 pl-2">
            <p className="text-2xl text-black font-bold">
              ronnie
            </p>
            <p className="text-xl text-gray-600 font-light">
              1nitials
            </p>
            <p className="pt-4 text-base text-gray-600">
              developer, artist,
              <br /> 
              musician, and so on
            </p>
          </div>
        </section>
        
        {/* Showcased Works */}
        <section className="border border-gray-300 p-6 rounded-lg flex-1">
          <h1 className="text-xl mb-4">Showcased Works</h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            {featuredProjects.map((project, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded">
                {getIcon(project.category)} <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold cursor-pointer">{project.filename}</a>
                <p className="text-sm mt-1 text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <a href="/works" className="text-xs text-blue-600 hover:text-blue-800">
              check out all the other ones here
            </a>
          </div>
        </section>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Activity graph section */}
        <section className="border border-gray-300 p-6 rounded-lg order-2 md:order-1">
          <h1 className="text-xl mb-4">XX amount of works this year</h1>
          <div className="overflow-x-auto">
            <div className="relative min-w-max">
              {/* Month labels */}
              <div className="flex text-xs text-gray-500 mb-2 ml-8">
                {months.map((month, monthIndex) => {
                  const slotsForMonth =
                  slotsPerMonth + (extraColumnMonths.has(monthIndex) ? 1 : 0);

                return Array.from({ length: slotsForMonth }).map((_, slotIndex) => (
                  <div
                    key={`${monthIndex}-${slotIndex}`}
                    style={{ width: "16px" }}
                    className="text-center"
                  >
                    {slotIndex === 0 && month}
                  </div>
                ));
              })}
              </div>
              <div className="flex">
                {/* Day labels */}
                <div className="flex flex-col text-xs text-gray-500 mr-2 justify-around">
                  <div style={{height: "16px"}}></div>
                  <div>Mon</div>
                  <div style={{height: "16px"}}></div>
                  <div>Wed</div>
                  <div style={{height: "16px"}}></div>
                  <div>Fri</div>
                  <div style={{height: "16px"}}></div>
                </div>
                {/* Grid */}
                <div className="grid grid-rows-7 grid-flow-col gap-1">
                  {/* Empty cells for days before Jan 1 (Thursday = 4th position) */}
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={`empty-${i}`} className="w-3 h-3" />
                  ))}
                  {/* 2026 calendar days */}
                  {Array.from({ length: 365 }, (_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-gray-200 rounded-sm hover:bg-green-400 transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">Works done on that day</p>
        </section>
        
        {/* Work Summary - shows first on mobile, second on desktop */}
        <section className="border border-gray-300 p-6 rounded-lg flex-1 order-1 md:order-2">
          <h1 className="text-xl mb-8 text-center">Work Summary</h1>
          <DoughnutChart />
        </section>
      </div>
    
    </div>
  )
}