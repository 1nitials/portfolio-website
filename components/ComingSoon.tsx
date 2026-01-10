import Image from "next/image"
import Pochi from "../images/pochi.png"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="border-2 border-black rounded-3xl p-8 md:p-16 text-center max-w-md w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4" 
            style={{textShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>
          COMING SOON
        </h1>
        <p className="text-gray-600 font-jura font-bold text-base md:text-lg">
          This page is under construction
        </p>
        <div className="mt-6 md:mt-8 flex justify-center">
          <Image src={Pochi} alt="pochi" width={120} height={120} className="md:w-[150px] md:h-[150px]" />
        </div>
        </div>
      </div>
  )
}