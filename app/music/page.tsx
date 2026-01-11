'use client'
import { useState } from 'react'
import Image from "next/image"
import flchan from "../../images/fl_chan.gif"
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled, TbPlayerPlayFilled, 
  TbArrowsShuffle, TbRepeat, TbFileMusic } from 'react-icons/tb'
import { getAllTracks } from '../../data/music'

export default function Music() {
  const tracks = getAllTracks()
  const [selectedTrack, setSelectedTrack] = useState(tracks[0])
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 space-y-8 pb-8">
        
        {/* Top Hero Card */}
        <div className="border-2 border-black rounded-3xl p-8">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-7xl font-extrabold text-black"
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
        <div className="border-2 border-black rounded-3xl p-8 mb-8">
          <div className="flex gap-8">
            
            {/* Left Section - Music Directory */}
            <div className="flex-1 flex flex-col">
              <h2 className="text-xl italic mb-4">music directory</h2>
              
              <div className="bg-gradient-to-b from-sky-100 to-sky-300 rounded-3xl p-8 flex-1">
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
                <div className="space-y-1">
                  {tracks.map((track) => (
                    <div 
                      key={track.id} 
                      className={`flex items-center cursor-pointer p-2 rounded-lg transition-colors ${
                        selectedTrack.id === track.id ? 'bg-green-200' : 'hover:bg-green-100'
                      }`}
                      onClick={() => setSelectedTrack(track)}
                    >
                      <div className="flex-1 flex items-center gap-2">
                        <TbFileMusic size={24} />
                        <span>{track.filename}</span>
                      </div>
                      <div className="w-48">{track.dateCreated}</div>
                      <div className="w-64 px-4 truncate">{track.tags.join(', ')}...</div>
                    </div>
                  ))}
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
                <span className="text-sm">tags: {selectedTrack.tags.join(', ')}</span>
              </div>
              
              {/* Description Box */}
              <div className="border border-grey rounded-3xl p-6 h-32">
                <span className="text-gray-500 text-sm">{selectedTrack.description || 'No description available'}</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}