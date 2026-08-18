/** @type {import('tailwindcss').Config} */

/*
 * ─────────────────────────────────────────────────────────────
 * PALETA — ÚNICO PONTO DE AJUSTE DA COR DA MARCA
 * ─────────────────────────────────────────────────────────────
 * O verde abaixo é um valor BASE. Ele precisa ser substituído pelo
 * verde exato amostrado da logo oficial (abra a logo em um editor,
 * use o conta-gotas e cole o hex em `verde.DEFAULT`).
 * Todos os tons derivados usam esse mesmo eixo cromático, então
 * trocar o DEFAULT + escuro + claro atualiza a página inteira.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
  verde: {
    DEFAULT: '#FBF9F4',
    escuro: '#0A3222',
    medio: '#1E7A51',
    claro: '#DCE9E1',
    vidro: '#F1F6F2',
  },
  creme: '#14603F',
  areia: '#EDE5D6',
  carvao: '#141613',
  cinza: '#6B7269',
},
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        etiqueta: '0.18em',
      },
      maxWidth: {
        conteudo: '1240px',
      },
      borderRadius: {
        marca: '4px',
      },
      keyframes: {
        surgir: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        surgir: 'surgir 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
