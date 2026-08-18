import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Diferenciais from './sections/Diferenciais.jsx'
import Produtos from './sections/Produtos.jsx'
import Galeria from './sections/Galeria.jsx'
import Sobre from './sections/Sobre.jsx'
import Destaque from './sections/Destaque.jsx'
import Instagram from './sections/Instagram.jsx'
import Localizacao from './sections/Localizacao.jsx'
import CTA from './sections/CTA.jsx'
import Footer from './sections/Footer.jsx'
import BotaoFlutuante from './components/BotaoFlutuante.jsx'

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-marca focus:bg-verde focus:px-5 focus:py-3 focus:text-creme"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <Diferenciais />
        <Produtos />
        <Galeria />
        <Sobre />
        <Destaque />
        <Instagram />
        <Localizacao />
        <CTA />
      </main>

      <Footer />
      <BotaoFlutuante />
    </>
  )
}
