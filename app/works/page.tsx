'use client'
import { useState } from 'react'
import { RiMusicAiFill, RiGalleryFill } from "react-icons/ri"
import { FaComputer } from "react-icons/fa6"
import { CgGames } from "react-icons/cg"
import { projects, getIcon } from '../../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="flex gap-8 justify-center">
        <RiMusicAiFill 
          style={{fontSize: '200px'}} 
          className={`cursor-pointer hover:text-blue-600 hover:scale-110 transition-all duration-300 transform ${filter === 'music' ? 'text-blue-600 scale-105' : ''}`}
          onClick={() => setFilter(filter === 'music' ? 'all' : 'music')}
        />
        <RiGalleryFill 
          style={{fontSize: '200px'}} 
          className={`cursor-pointer hover:text-green-600 hover:scale-110 transition-all duration-300 transform ${filter === 'art' ? 'text-green-600 scale-105' : ''}`}
          onClick={() => setFilter(filter === 'art' ? 'all' : 'art')}
        />
        <FaComputer 
          style={{fontSize: '200px'}} 
          className={`cursor-pointer hover:text-purple-600 hover:scale-110 transition-all duration-300 transform ${filter === 'code' ? 'text-purple-600 scale-105' : ''}`}
          onClick={() => setFilter(filter === 'code' ? 'all' : 'code')}
        />
        <CgGames 
          style={{fontSize: '200px'}} 
          className={`cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300 transform ${filter === 'games' ? 'text-red-600 scale-105' : ''}`}
          onClick={() => setFilter(filter === 'games' ? 'all' : 'games')}
        />
      </div>
      <p className="text-sm mb-8">click on an icon to sort</p>
      
      <div className="mx-auto text-left overflow-x-auto">
        <div className="bg-gray-100 p-2 md:p-4 font-mono text-xs md:text-sm min-w-max">
          <h2 className="text-base md:text-lg font-bold mb-4">Index of /works</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-1 w-1/4">Filename</th>
                <th className="text-left py-1 pl-2 md:pl-8 w-2/5">Description</th>
                <th className="text-left py-1 pl-2 md:pl-8 w-1/5">Last Modified</th>
                <th className="text-left py-1 pl-2 md:pl-8 w-1/5">Tags</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr key={index} className="hover:bg-gray-200 cursor-pointer">
                  <td className="py-1">{getIcon(project.category)} <a href="#" className="text-blue-600 underline">{project.filename}</a></td>
                  <td className="py-1 pl-2 md:pl-8">{project.description}</td>
                  <td className="py-1 pl-2 md:pl-8">{project.date}</td>
                  <td className="py-1 pl-2 md:pl-8">{project.tags}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}