export default function Music() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        
        {/* Top Hero Card */}
        <div className="border-2 border-black rounded-3xl p-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-6xl font-extrabold text-black mb-2">DISCOGRAPHY</h1>
              <div className="text-6xl font-extrabold text-transparent" 
                   style={{WebkitTextStroke: '3px black', WebkitTextFillColor: 'transparent'}}>
                COMING SOON!
              </div>
            </div>
            <div>
              <img 
                src="https://placehold.co/200x200/f0f0f0/666?text=Character" 
                alt="Character placeholder"
                className="w-48 h-48"
              />
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
            <div className="w-80 space-y-6">
              
              {/* Album Cover */}
              <div className="bg-gray-100 rounded-3xl aspect-square flex items-center justify-center border border-black">
                <span className="text-gray-500">album cover here</span>
              </div>
              
              {/* Audio Controls */}
              <div className="flex justify-center gap-4">
                <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
                  🔀
                </button>
                <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
                  ⏮
                </button>
                <button className="w-12 h-12 border border-black rounded-full flex items-center justify-center">
                  ▶️
                </button>
                <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
                  ⏭
                </button>
                <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
                  🔁
                </button>
              </div>
              
              {/* Tags Box */}
              <div className="border border-black rounded-3xl p-4">
                <span className="text-sm">tags: jazz, short, demo, warmup</span>
              </div>
              
              {/* Description Box */}
              <div className="border border-black rounded-3xl p-6 h-32">
                <span className="text-gray-400 text-sm">track description...</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}