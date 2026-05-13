'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-.231.397-.231.397s-.324.645-.384 1.127c-.06.482.017.884.231 1.127.288.329.767.395 1.287.395.514 0 1.134-.168 1.794-.474L21 4.5 21 8.719z" />
          </svg>
          <span className="ml-2 text-white font-bold text-xl tracking-wider hidden sm:block">NIKE</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">New Releases</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">Men</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">Women</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">Kids</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">Collections</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white/80 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-white/80 hover:text-white transition-colors relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">2</span>
          </button>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-6 py-4 space-y-3">
            <a href="#" className="block text-white/80 hover:text-white text-sm font-medium">New Releases</a>
            <a href="#" className="block text-white/80 hover:text-white text-sm font-medium">Men</a>
            <a href="#" className="block text-white/80 hover:text-white text-sm font-medium">Women</a>
            <a href="#" className="block text-white/80 hover:text-white text-sm font-medium">Kids</a>
            <a href="#" className="block text-white/80 hover:text-white text-sm font-medium">Collections</a>
          </div>
        </div>
      )}
    </nav>
  )
}
