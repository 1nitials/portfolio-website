import Image from "next/image"
import Dennis from "../images/dennis.png"
import { siGithub } from 'simple-icons'
import { siInstagram } from 'simple-icons'
import { siGmail } from 'simple-icons'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex gap-8">

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
            questionably average
          </p>
        </div>
      </section>
      
      {/* PLACEHOLDER: will add feature functionality later */}
      <section className="border border-gray-300 p-6 rounded-lg flex-1">
        <h1 className="text-xl mb-4">Showcased Works</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-semibold cursor-pointer">Placeholder</h3>
            <p className="text-sm text-gray-600">Placeholder description</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-semibold cursor-pointer">Placeholder</h3>
            <p className="text-sm text-gray-600">Placeholder description</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-semibold cursor-pointer">Placeholder</h3>
            <p className="text-sm text-gray-600">Placeholder description</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-semibold cursor-pointer">Placeholder</h3>
            <p className="text-sm text-gray-600">Placeholder description</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-semibold cursor-pointer">Placeholder</h3>
            <p className="text-sm text-gray-600">Placeholder description</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-semibold cursor-pointer">Placeholder</h3>
            <p className="text-sm text-gray-600">Placeholder description</p>
          </div>
        </div>
      </section>
    </div>
  )
}