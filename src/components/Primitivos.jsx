import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────────────────────
 * Revelar — fade-in discreto quando o bloco entra na tela.
 * Respeita prefers-reduced-motion: quem pediu menos movimento
 * recebe o conteúdo já visível, sem transição.
 * ───────────────────────────────────────────────────────────── */
export function Revelar({ children, atraso = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduzido) return setVisivel(true)

    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${atraso}ms` }}
      className={`transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visivel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}

/* ─────────────────────────────────────────────────────────────
 * Figura — imagem real quando existe; espaço reservado explícito
 * quando ainda não. O espaço reservado mostra o nome do arquivo
 * que deve ser colocado em /public/imagens/, para que a troca
 * seja óbvia para quem for finalizar o site.
 * ───────────────────────────────────────────────────────────── */
export function Figura({
  imagem,
  arquivo,
  alt,
  className = '',
  imgClassName = '',
  prioridade = false,
  onClick,
}) {
  const base = `relative overflow-hidden bg-verde-vidro ${className}`

  if (imagem) {
    return (
      <figure className={base} onClick={onClick}>
        <img
          src={imagem}
          alt={alt}
          loading={prioridade ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={prioridade ? 'high' : 'auto'}
          className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${imgClassName}`}
        />
      </figure>
    )
  }

  return (
    <div
      className={`${base} flex items-center justify-center border border-dashed border-verde/25`}
      role="img"
      aria-label={`Espaço reservado para imagem: ${alt}`}
      onClick={onClick}
    >
      <div className="px-5 py-6 text-center">
        <MarcaDagua />
        <p className="etiqueta mt-3 text-verde/70">Imagem a inserir</p>
        <p className="mt-1 font-mono text-[10px] leading-relaxed text-verde/50 break-all">
          /imagens/{arquivo}
        </p>
      </div>
    </div>
  )
}

function MarcaDagua() {
  return (
    <svg viewBox="0 0 40 40" className="mx-auto h-7 w-7 text-verde/35" aria-hidden="true">
      <rect x="2" y="7" width="36" height="26" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 26l10-9 7 6 6-5 13 11" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="28" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
 * Logo — reconstrução tipográfica temporária.
 * ⚠ SUBSTITUIR pelo arquivo oficial (SVG de preferência):
 *   coloque em /public/imagens/logo.svg e troque o corpo deste
 *   componente por <img src="/imagens/logo.svg" ... />.
 *   Não redimensionar de forma desproporcional.
 * ───────────────────────────────────────────────────────────── */
export function Logo({ tom = 'verde', className = '' }) {
  const cor = tom === 'claro' ? 'text-creme' : 'text-verde'
  const sub = tom === 'claro' ? 'text-creme/60' : 'text-verde/55'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className={`h-7 w-7 shrink-0 ${cor}`} aria-hidden="true">
        <path
          d="M16 3c3.6 0 6.5 2.9 6.5 6.5V15h1.8c2.6 0 4.7 2.1 4.7 4.7S26.9 24.4 24.3 24.4H7.7C5.1 24.4 3 22.3 3 19.7S5.1 15 7.7 15h1.8V9.5C9.5 5.9 12.4 3 16 3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M16 24.4V29" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="leading-none">
        <span className={`block font-serif text-[19px] font-medium tracking-tight ${cor}`}>
          Delícias do Nordeste
        </span>
        <span className={`etiqueta mt-[3px] block text-[9px] ${sub}`}>
          Regionais &amp; Naturais
        </span>
      </span>
    </span>
  )
}

/* Ícones lineares para os diferenciais — sem emojis, sem preenchimento. */
export function Icone({ nome, className = 'h-6 w-6' }) {
  const comum = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.3,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const formas = {
    cesta: (
      <>
        <path d="M3 9h18l-1.6 10.2a2 2 0 0 1-2 1.8H6.6a2 2 0 0 1-2-1.8L3 9z" />
        <path d="M8 9 10.5 3M16 9 13.5 3" />
        <path d="M9.5 13v4M14.5 13v4" />
      </>
    ),
    mapa: (
      <>
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    caixa: (
      <>
        <path d="M3 8.2 12 4l9 4.2v7.6L12 20l-9-4.2V8.2z" />
        <path d="M3 8.2 12 12.4l9-4.2M12 12.4V20" />
      </>
    ),
    relogio: (
      <>
        <circle cx="12" cy="12" r="8.6" />
        <path d="M12 7.2V12l3.2 2" />
      </>
    ),
  }

  return <svg {...comum}>{formas[nome] ?? formas.cesta}</svg>
}

/* Botão — duas variantes sólidas. Sem gradiente, sem sombra pesada. */
export function Botao({ variante = 'solido', href, children, className = '', ...rest }) {
  const estilos = {
    solido:
      'bg-verde text-creme hover:bg-verde-escuro active:translate-y-px',
    contorno:
      'border border-verde/30 text-verde hover:border-verde hover:bg-verde hover:text-creme active:translate-y-px',
    claro:
      'bg-creme text-verde-escuro hover:bg-white active:translate-y-px',
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-marca px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 ${estilos[variante]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

/* Cabeçalho de seção — etiqueta mono + título serifado. */
export function TituloSecao({ etiqueta, titulo, apoio, tom = 'escuro', className = '' }) {
  const corTitulo = tom === 'claro' ? 'text-creme' : 'text-verde-escuro'
  const corEtiqueta = tom === 'claro' ? 'text-creme/60' : 'text-verde/60'
  const corApoio = tom === 'claro' ? 'text-creme/75' : 'text-cinza'

  return (
    <div className={className}>
      {etiqueta && <p className={`etiqueta ${corEtiqueta}`}>{etiqueta}</p>}
      <h2
        className={`mt-4 font-serif text-[34px] leading-[1.1] tracking-[-0.015em] sm:text-[42px] lg:text-[48px] ${corTitulo}`}
      >
        {titulo}
      </h2>
      {apoio && <p className={`mt-5 max-w-xl text-[17px] leading-relaxed ${corApoio}`}>{apoio}</p>}
    </div>
  )
}

export function IconeWhatsApp({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.18-1.36a9.94 9.94 0 0 0 4.86 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 1.82c2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 0 1 2.38 5.76c0 4.5-3.65 8.14-8.14 8.14a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.07.8.82-3-.19-.31a8.1 8.1 0 0 1-1.25-4.32c0-4.49 3.65-8.14 8.14-8.14zm-3.7 4.3c-.17 0-.45.07-.69.32-.24.25-.9.88-.9 2.15s.92 2.49 1.05 2.66c.13.17 1.8 2.86 4.46 3.9 2.21.87 2.66.7 3.14.65.48-.04 1.55-.63 1.77-1.24.22-.61.22-1.14.15-1.25-.06-.11-.24-.17-.5-.3-.26-.13-1.55-.77-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.82 1.02-.15.18-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.58-1.42-.8-1.94-.21-.5-.42-.44-.58-.44l-.5-.01z" />
    </svg>
  )
}
