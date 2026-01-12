import Image from "next/image"
import slapchop from "../../images/slapchop.png"
import fridgeGame from "../../images/fridge-game.png"
import loopGame from "../../images/loop-game.png"
import GameText from "../../images/games.gif"
import Tooltip from "@mui/material/Tooltip";

export default function Games() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center">
            <Image src={GameText} alt="GAMES"/>
          </div>
          <p className="text-lg md:text-xl text-gray-600 font-bold font-jura">
            It's not much but I hope to make more in the future!
          </p>
        </div>

        {/* Game Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          
          {/* Slap Chop */}
          <Tooltip title="Rhythm minigame made for the Solo Dev Game Jam" placement="bottom" arrow>
            <a href="https://1nitials.itch.io/slap-chop" target="_blank" rel="noopener noreferrer">
              <div className="border-2 border-black rounded-2xl overflow-hidden w-32 h-32 hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src={slapchop}
                  alt="Slap Chop game screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </Tooltip>

          {/* Fridge Game */}
          <Tooltip title="Platformer puzzle game made for the Sarawak Game Jam 2025, with Changes as it's main theme" placement="bottom" arrow>
            <a href="https://1nitials.itch.io/fridge-story" target="_blank" rel="noopener noreferrer">
              <div className="border-2 border-black rounded-2xl overflow-hidden w-32 h-32 hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src={fridgeGame}
                  alt="Fridge Game screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </Tooltip>

          {/* Loop Game */}
          <Tooltip
            placement="bottom"
            arrow
            title={
              <div className="flex flex-col gap-2">
              <p>
                Platformer puzzle game made for GMTK, using save states as its primary mechanic
              </p>
              <a
                href="https://youtu.be/ZapDUSOEoGU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                View demo on Youtube →
              </a>
              </div>
            }
          >
            <a href="https://1nitials.itch.io/loop-guy" target="_blank" rel="noopener noreferrer">
              <div className="border-2 border-black rounded-2xl overflow-hidden w-32 h-32 hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src={loopGame}
                  alt="Loop Game screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </Tooltip>

        </div>
      </div>
    </div>
  )
}