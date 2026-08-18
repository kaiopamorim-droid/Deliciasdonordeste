import { useEffect, useState } from 'react'
import { linkWhatsApp } from '../data/site.js'
import { IconeWhatsApp } from './Primitivos.jsx'

export default function BotaoFlutuante() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 420)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <a
      href={linkWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Delícias do Nordeste pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-verde text-creme transition-all duration-500 hover:bg-verde-escuro sm:bottom-7 sm:right-7 ${
        visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{ boxShadow: '0 2px 16px rgba(10, 50, 34, 0.22)' }}
    >
      <IconeWhatsApp className="h-7 w-7" />
    </a>
  )
}
