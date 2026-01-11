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
  const [prevVolume, setPrevVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 space-y-8 pb-8">
        
        {/* Top Hero Card */}
        <div className="border-2 border-black rounded-3xl p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <div className="min-w-0 flex-shrink">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black text-center md:text-left break-words"
              style={{textShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>DISCOGRAPHY</h1>
              <svg viewBox="0 0 600 72" height="48" className="block leading-none md:h-[72px] mx-auto md:mx-0">
                <text
                x="300"
                y="60"
                fontSize="60"
                fontWeight="700"
                fill="white"
                stroke="black"
                strokeWidth="3"
                paintOrder="stroke"
                textAnchor="middle"
                >
                COMING SOON!
                </text>
              </svg>
            </div>
              <Image
                alt="FL-chan"
                src={flchan}
                width={250}
                height={250}
                className="w-[150px] md:w-[250px] h-auto"
              />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border-2 border-black rounded-3xl p-4 md:p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
            
            {/* Right Section - Track Details / Player (Top on mobile) */}
            <div className="w-full lg:w-80 lg:max-w-80 lg:min-w-0 lg:flex-shrink-0 space-y-2 order-1 lg:order-2">
              
              {/* Album Cover */}
              <div className="bg-gray-100 rounded-3xl aspect-square flex items-center justify-center">
                <span className="text-gray-500">album cover here</span>
              </div>

              {/* Progress Bar */}
              <div>
                <input 
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.02}
                  value={currentTime}
                  className="w-full cursor-pointer"
                  onChange={event => {
                    const newTime = event.target.valueAsNumber;
                    setCurrentTime(newTime);
                    if (audioRef.current) {
                      audioRef.current.currentTime = newTime;
                    }
                  }}/>
                <div>
                  <span className="text-xs text-gray-500">{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500 float-right">{selectedTrack ? selectedTrack.duration : '-:--'}</span>
                </div>
              </div>
              
              {/* Audio Controls */}
              <div className="flex justify-center items-center gap-1 md:gap-2 flex-wrap">
                <button 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={prevTrack}
                >
                  <TbPlayerTrackPrevFilled size={14} className="md:w-4 md:h-4" />
                </button>
                <button 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={isPlaying ? pauseTrack : playTrack}
                >
                  {isPlaying ? <TbPlayerPauseFilled size={18} className="md:w-5 md:h-5" /> : <TbPlayerPlayFilled size={18} className="md:w-5 md:h-5" />}
                </button>
                <button 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={nextTrack}
                >
                  <TbPlayerTrackNextFilled size={14} className="md:w-4 md:h-4" />
                </button>
                <button 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={muteTrack}
                >
                  {isMuted ? <TbVolumeOff size={14} className="md:w-4 md:h-4" /> : <TbVolume size={14} className="md:w-4 md:h-4" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={volume}
                  className="cursor-pointer w-16 md:w-auto"
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
              <div className="border border-grey rounded-3xl p-3 md:p-4">
                <span className="text-xs md:text-sm break-words">{selectedTrack ? selectedTrack.tags.join(', ') : 'Select a track!'}</span>
              </div>
              
              {/* Description Box */}
              <div className="border border-grey rounded-3xl p-4 md:p-6 h-24 md:h-32">
                <span className="text-gray-500 text-xs md:text-sm break-words">{selectedTrack ? (selectedTrack.description || 'No description available') : 'Select a track to view details'}</span>
              </div>
              
            </div>

            {/* Left Section - Music Directory (Bottom on mobile) */}
            <div className="flex-1 flex flex-col order-2 lg:order-1">
              <h2 className="text-lg md:text-xl italic mb-4">music directory</h2>
              
              <div className="bg-gradient-to-b from-sky-100 via-sky-300 to-green-200 rounded-3xl p-4 md:p-8 flex-1">
                {/* Header Row - Desktop only */}
                <div className="hidden xl:flex gap-4 mb-6">
                  <div className="border border-black rounded-full px-4 py-2 flex-1">
                    <span className="italic">name</span>
                  </div>
                  <div className="border border-black rounded-full px-4 py-2 w-48">
                    <span className="italic">date created</span>
                  </div>
                  <div className="border border-black rounded-full px-4 py-2 w-64">
                    <span className="italic">tags</span>
                  </div>
                  <div className="border border-black rounded-full px-4 py-2 w-24">
                    <span className="italic">duration</span>
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
                      <div className="flex-1 flex items-center gap-2 min-w-0">
                        <TbFileMusic size={20} className="flex-shrink-0" />
                        <span className="text-sm md:text-base truncate">{track.filename}</span>
                      </div>
                      <div className="hidden xl:block w-48">{track.dateCreated}</div>
                      <div className="hidden xl:block w-64 px-4 truncate">{track.tags.join(', ')}...</div>
                      <div className="w-16 md:w-24 md:px-12 text-right text-sm md:text-base">{track.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}