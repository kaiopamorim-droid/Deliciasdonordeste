import { marca, unidades, navegacao, linkWhatsApp, whatsapp } from '../data/site.js'
import { Logo } from '../components/Primitivos.jsx'

export default function Footer() {
  const boaViagem = unidades[0]

  return (
    <footer className="border-t border-verde/12 bg-creme">
      <div className="mx-auto max-w-conteudo px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-cinza">
              {marca.bio} {marca.entrega}, a partir das nossas bancas nos mercados de São José e Boa
              Viagem, em Recife.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="etiqueta text-verde/55">Navegar</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-carvao/75 transition-colors hover:text-verde">
                    {item.rotulo}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={marca.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-carvao/75 transition-colors hover:text-verde"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="etiqueta text-verde/55">Contato</p>
            <address className="mt-5 space-y-3 text-[15px] not-italic leading-relaxed text-carvao/75">
              <p>
                {boaViagem.endereco}
                <br />
                {boaViagem.bairro}
              </p>
              <p>
                <a href={boaViagem.telefoneLink} className="transition-colors hover:text-verde">
                  {boaViagem.telefone}
                </a>
                <br />
                <a
                  href={linkWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-verde"
                >
                  WhatsApp {whatsapp.exibicao}
                </a>
              </p>
              <p className="font-mono text-[13px] text-cinza">
                Seg a sex 7h–18h · Sáb 7h–15h30 · Dom 7h–13h
              </p>
              <p>
                <a
                  href={marca.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-verde"
                >
                  {marca.instagram.usuario}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-verde/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[12px] text-cinza">
            © 2026 Delícias do Nordeste. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[12px] text-cinza">Recife · Pernambuco</p>
        </div>
      </div>
    </footer>
  )
}
