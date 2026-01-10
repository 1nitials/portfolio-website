'use client'
import Image from "next/image"
import Dennis from "../images/me.png"
import CurrentUpdates from "../images/current_updates.gif"
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
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <div className="container mx-auto px-8 space-y-8">
        {/* Row 1: Hero + Showcased Works */}
        <div className="flex flex-col lg:flex-row gap-24 justify-center">
          {/* Hero Card */}
          <div className="border-2 border-black rounded-3xl p-8 w-fit">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-6xl font-extrabold text-black leading-none mb-1"
                style={{textShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>RONNIE</h1>
                <svg viewBox="0 0 180 38" height="40" className="block leading-none">
                  <text
                  x="0"
                  y="36"
                  fontSize="36"
                  fontWeight="700"
                  fill="white"
                  stroke="black"
                  strokeWidth="3"
                  paintOrder="stroke"
                  >
                  1NITIALS
                  </text>
                </svg>
                <p className="text-gray-600 font-bold font-jura mt-1">
                  developer, artist,
                  musician, and so on
                </p>
                <div className="flex gap-2 mt-2 justify-left text-gray-700">
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
              </div>
              <Image 
                src={Dennis} 
                alt="me"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Showcased Works */}
          <div className="rounded-3xl p-8 w-fit">
            <h2 className="text-4xl font-bold mb-6"
            style={{textShadow: '2px 2px 0px rgba(0,0,0,0.3)'}}>SHOWCASED WORKS</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                <span className="text-normal font-bold font-jura">suga games store</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                <span className="text-normal font-bold font-jura">quiz quest</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                <span className="text-normal font-bold font-jura">safedrive insurance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                <span className="text-normal font-bold font-jura">slap chop!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Updates + Work Activity */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Current Updates Panel */}
          <div className="border-2 border-black rounded-3xl p-8 relative w-fit">
            <div className="absolute -top-4 left-1 bg-white px-4">
              <Image
                src={CurrentUpdates}
                alt="current updates"
                width={250}
                height={50}
                className="block"
              />
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <div className="font-bold text-sm">1.11.26</div>
                <div className="text-gray-600 text-sm">lorem ipsum lorem ipsum</div>
              </div>
              <div>
                <div className="font-bold text-sm">1.11.26</div>
                <div className="text-gray-600 text-sm">lorem ipsum lorem ipsum</div>
              </div>
              <div>
                <div className="font-bold text-sm">1.11.26</div>
                <div className="text-gray-600 text-sm">lorem ipsum lorem ipsum</div>
              </div>
              <div>
                <div className="font-bold text-sm">1.11.26</div>
                <div className="text-gray-600 text-sm">lorem ipsum lorem ipsum</div>
              </div>
            </div>
          </div>

          {/* Work Activity Panel */}
          <div className="border-2 border-black rounded-3xl p-8 w-fit">
            <h2 className="text-xl font-bold mb-4">XX amount of works this year</h2>
            
            {/* GitHub-style heatmap */}
            <div className="overflow-x-auto">
              <div className="min-w-max">
                {/* Month labels */}
                <div className="flex text-xs text-gray-500 mb-2 ml-8">
                  {months.map((month, monthIndex) => {
                    const slotsForMonth = slotsPerMonth + (extraColumnMonths.has(monthIndex) ? 1 : 0);
                    return Array.from({ length: slotsForMonth }).map((_, slotIndex) => (
                      <div key={`${monthIndex}-${slotIndex}`} style={{ width: "16px" }} className="text-center">
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
                    {Array.from({ length: 4 }, (_, i) => (
                      <div key={`empty-${i}`} className="w-3 h-3" />
                    ))}
                    {Array.from({ length: 365 }, (_, i) => (
                      <div key={i} className="w-3 h-3 bg-gray-200 rounded-sm hover:bg-green-400 transition-colors" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">Works done on that day</p>
            
            {/* Work Summary */}
            <div className="mt-8 flex justify-end">
              <div className="text-center">
                  <svg viewBox="0 0 300 44" height="40" className="block leading-none mx-auto mb-4">
                    <text
                    x="150"
                    y="36"
                    fontSize="36"
                    fontWeight="700"
                    fill="white"
                    stroke="black"
                    strokeWidth="6"
                    paintOrder="stroke"
                    textAnchor="middle"
                    fontFamily="Impact, Arial Black, sans-serif"
                    >
                    work summary
                    </text>
                  </svg>
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}