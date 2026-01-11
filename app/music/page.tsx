'use client'
import { useRef, useEffect, useState } from 'react'
import Image from "next/image"
import flchan from "../../images/fl_chan.gif"
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled, TbPlayerPlayFilled, 
  TbPlayerPauseFilled, TbFileMusic, TbVolume, TbVolumeOff } from 'react-icons/tb'
import { getAllTracks} from '../../data/music'

export default function Music() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tracks = getAllTracks()
  const [volume, setVolume] = useState(1)
  const [prevVolume, setPrevVolume] = useState(0)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const selectedTrack =
    currentIndex !== null ? tracks[currentIndex] : null;

  const playTrack = () => {
    audioRef.current?.play().catch(() => {});
  };

  const pauseTrack = () => {
    audioRef.current?.pause();
  };

  const nextTrack = () => {
    if (currentIndex === null) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex((currentIndex + 1) % tracks.length);
  };

  const prevTrack = () => {
    if (currentIndex === null) {
      setCurrentIndex(tracks.length - 1);
      return;
    }

    setCurrentIndex(
      currentIndex === 0 ? tracks.length - 1 : currentIndex - 1
    );
  };

  const muteTrack = () => {
    if (!isMuted) {
      setVolume(0)
      setPrevVolume(volume)
      setIsMuted(true)
      if (audioRef.current) audioRef.current.volume = 0
    }
    else {
      setIsMuted(false)
      setVolume(prevVolume)
      if (audioRef.current) audioRef.current.volume = prevVolume
    }
  }

  useEffect(() => {
    if (!audioRef.current || !selectedTrack) return;

    const audio = audioRef.current;
    audio.src = selectedTrack.directory;
    audio.load();
    
    audio.play().catch(() => {});
  }, [selectedTrack]);

  useEffect(() => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);
    
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

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
              
              <div className="bg-gradient-to-b from-sky-100 via-sky-300 to-green-200 rounded-3xl p-8 flex-1">
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
                  <audio ref={audioRef} src={selectedTrack?.directory} loop />
                  {tracks.map((track) => (
                    <div 
                      key={track.id} 
                      className={`flex items-center cursor-pointer p-2 rounded-lg transition-colors ${
                        selectedTrack?.id === track.id ? 'bg-green-300' : 'hover:bg-green-200'
                      }`}
                      onClick={() => {
                        setCurrentIndex(tracks.indexOf(track));
                      }}
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
              <div className="flex justify-center gap-2">
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={prevTrack}
                >
                  <TbPlayerTrackPrevFilled size={16} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={isPlaying ? pauseTrack : playTrack}
                >
                  {isPlaying ? <TbPlayerPauseFilled size={20} /> : <TbPlayerPlayFilled size={20} />}
                </button>
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={nextTrack}
                >
                  <TbPlayerTrackNextFilled size={16} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={muteTrack}
                >
                  {isMuted ? <TbVolumeOff size={16} /> : <TbVolume size={16} />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={volume}
                  onChange={event => {
                    const newVolume = event.target.valueAsNumber;
                    setVolume(newVolume);
                    setIsMuted(newVolume === 0);
                    if (audioRef.current) {
                      audioRef.current.volume = newVolume;
                    }
                  }}
                />
              </div>
              
              {/* Tags Box */}
              <div className="border border-grey rounded-3xl p-4">
                <span className="text-sm">{selectedTrack ? selectedTrack.tags.join(', ') : 'Select a track!'}</span>
              </div>
              
              {/* Description Box */}
              <div className="border border-grey rounded-3xl p-6 h-32">
                <span className="text-gray-500 text-sm">{selectedTrack ? (selectedTrack.description || 'No description available') : 'Select a track to view details'}</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}