import React from 'react'

export default function HeroSection() {
  return (
    <>
    
      <div className='flex mx-6 gap-6'>
        <div className="w-2/3 justify-around  p-2 rounded-lg flex">
          <input 
            type="text" 
            placeholder="Type the domain you want"
            className="flex-1 px-4 py-3 text-gray-800 bg-gray-200"
          />
          <button className="bg-[#00838C] px-6 py-3 text-white text-sm font-semibold hover:bg-[#09757A]">
            Search Domain
          </button>
        </div>
        
        <div className="mt-4 flex justify-center space-x-4 text-sm">
          {['.com $5.99', '.co $0.48', '.net $9.99', '.org $5.99'].map((item) => (
            <div key={item} className="flex">
              <span className="px-2 py-1 text-gray-500 font-semibold text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}
