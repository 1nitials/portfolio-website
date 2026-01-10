import Image from "next/image"
import flchan from "../../images/fl_chan.gif"
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled, TbPlayerPlayFilled, TbArrowsShuffle, TbRepeat } from 'react-icons/tb'

export default function Music() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 space-y-8">
        
        {/* Top Hero Card */}
        <div className="border-2 border-black rounded-3xl p-8">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-7xl font-extrabold text-black mb-2"
              style={{textShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>DISCOGRAPHY</h1>
              <svg viewBox="0 0 600 72" height="72" className="block leading-none">
                <text
                x="0"
                y="60"
                fontSize="60"
                fontWeight="700"
                fill="white"
                stroke="black"
                strokeWidth="3"
                paintOrder="stroke"
                >
                COMING SOON!
                </text>
              </svg>
            </div>
            <div>
              <Image alt="FL-chan" src={flchan} width={250} height={250}/>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border-2 border-black rounded-3xl p-8">
          <div className="flex gap-8">
            
            {/* Left Section - Music Directory */}
            <div className="flex-1">
              <h2 className="text-xl italic mb-4">music directory</h2>
              
              <div className="bg-sky-100 rounded-3xl p-8">
                {/* Header Row */}
                <div className="flex gap-4 mb-6">
                  <div className="border border-black rounded-full px-4 py-2 flex-1">
                    <span className="italic">name</span>
                  </div>
                  <div className="border border-black rounded-full px-4 py-2 w-48">
                    <span className="italic">date created</span>
                  </div>
                  <div className="border border-black rounded-full px-4 py-2 w-64">
                    <span className="italic">tags</span>
                  </div>
                </div>
                
                {/* Track Rows */}
                <div className="space-y-3">
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 flex items-center gap-2">
                      <span>🎵</span>
                      <span>shortwork_jazz.mp3</span>
                    </div>
                    <div className="w-48">30-11-2025 @ 1:07</div>
                    <div className="w-64 truncate">jazz, short, demo...</div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 flex items-center gap-2">
                      <span>🎵</span>
                      <span>ambient_loop.mp3</span>
                    </div>
                    <div className="w-48">28-11-2025 @ 3:22</div>
                    <div className="w-64 truncate">ambient, loop...</div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 flex items-center gap-2">
                      <span>🎵</span>
                      <span>experimental_beat.mp3</span>
                    </div>
                    <div className="w-48">25-11-2025 @ 2:15</div>
                    <div className="w-64 truncate">experimental, beat...</div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 flex items-center gap-2">
                      <span>🎵</span>
                      <span>warmup_session.mp3</span>
                    </div>
                    <div className="w-48">22-11-2025 @ 0:45</div>
                    <div className="w-64 truncate">warmup, practice...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Track Details / Player */}
            <div className="w-80 space-y-2">
              
              {/* Album Cover */}
              <div className="bg-gray-100 rounded-3xl aspect-square flex items-center justify-center">
                <span className="text-gray-500">album cover here</span>
              </div>
              
              {/* Audio Controls */}
              <div className="flex justify-center">
                <button className="w-10 h-10 rounded-full flex items-center justify-center">
                  <TbArrowsShuffle size={16} />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center">
                  <TbPlayerTrackPrevFilled size={16} />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center">
                  <TbPlayerPlayFilled size={20} />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center">
                  <TbPlayerTrackNextFilled size={16} />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center">
                  <TbRepeat size={16} />
                </button>
              </div>
              
              {/* Tags Box */}
              <div className="border border-grey rounded-3xl p-4">
                <span className="text-sm">tags: jazz, short, demo, warmup</span>
              </div>
              
              {/* Description Box */}
              <div className="border border-grey rounded-3xl p-6 h-32">
                <span className="text-gray-400 text-sm">track description...</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}