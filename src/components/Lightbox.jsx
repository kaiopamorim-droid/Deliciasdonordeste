import { useEffect, useRef } from 'react'
import { Figura } from './Primitivos.jsx'

export default function Lightbox({ itens, indice, aoFechar, aoNavegar }) {
  const fecharRef = useRef(null)
  const aberto = indice !== null && indice >= 0
  const item = aberto ? itens[indice] : null

  useEffect(() => {
    if (!aberto) return

    const anterior = document.activeElement
    fecharRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const aoTeclar = (e) => {
      if (e.key === 'Escape') aoFechar()
      if (e.key === 'ArrowRight') aoNavegar(1)
      if (e.key === 'ArrowLeft') aoNavegar(-1)
    }

    window.addEventListener('keydown', aoTeclar)
    return () => {
      window.removeEventListener('keydown', aoTeclar)
      document.body.style.overflow = ''
      anterior?.focus?.()
    }
  }, [aberto, aoFechar, aoNavegar])

  if (!aberto) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[100] flex flex-col bg-verde-escuro/97 px-4 py-5 sm:px-8 sm:py-8"
      onClick={aoFechar}
    >
      <div className="flex shrink-0 items-center justify-between">
        <p className="etiqueta text-creme/60">
          {indice + 1} / {itens.length}
        </p>
        <button
          ref={fecharRef}
          type="button"
          onClick={aoFechar}
          aria-label="Fechar imagem ampliada"
          className="rounded-marca border border-creme/25 px-4 py-2 text-sm text-creme transition-colors hover:bg-creme hover:text-verde-escuro"
        >
          Fechar
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <Figura
          imagem={item.imagem}
          arquivo={item.arquivo}
          alt={item.alt}
          className="max-h-full w-full max-w-4xl rounded-marca"
          imgClassName="!object-contain"
        />
      </div>

      <div
        className="flex shrink-0 items-center justify-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => aoNavegar(-1)}
          aria-label="Imagem anterior"
          className="rounded-marca border border-creme/25 px-5 py-2.5 text-sm text-creme transition-colors hover:bg-creme hover:text-verde-escuro"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={() => aoNavegar(1)}
          aria-label="Próxima imagem"
          className="rounded-marca border border-creme/25 px-5 py-2.5 text-sm text-creme transition-colors hover:bg-creme hover:text-verde-escuro"
        >
          Próxima
        </button>
      </div>
    </div>
  )
}
