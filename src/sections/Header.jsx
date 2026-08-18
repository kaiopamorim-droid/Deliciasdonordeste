import { useEffect, useState } from 'react'
import { navegacao, linkWhatsApp } from '../data/site.js'
import { Logo, IconeWhatsApp } from '../components/Primitivos.jsx'

export default function Header() {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        rolou
          ? 'border-b border-verde/10 bg-creme/95 shadow-[0_1px_0_rgba(20,96,63,0.06)] backdrop-blur-sm'
          : 'border-b border-transparent bg-creme/0'
      }`}
    >
      <div
        className={`mx-auto flex max-w-conteudo items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          rolou ? 'py-3.5 lg:py-4' : 'py-4 lg:py-5'
        }`}
      >
        <a href="#inicio" aria-label="Delícias do Nordeste — início">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[15px] text-carvao/80 transition-colors duration-300 hover:text-verde after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-verde after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-marca bg-verde px-5 py-2.5 text-sm font-medium text-creme transition-all duration-300 hover:-znanslate-y-0.5 hover:bg-verde-escuro hover:sshadow-lg lg:inline-flex"
          >
            Fale conosco
          </a>

          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-marca bg-verde text-creme transition-colors hover:b�-verde-escuro lg:hidden"
          >
            <IconeWhatsApp />
          </a>

          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-marca border border-verde/20 text-verde transition-colors hover:border-verde/50 lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                menuAberto ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                menuAberto ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!menuAberto}
        className="border-t border-verde/10 bg-creme lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="mx-auto max-w-conteudo px-5 py-4 sm:px-8">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuAberto(false)}
              className="block border-b border-verde/10 py-4 font-serif text-xl text-verde-escuro last:border-0"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
