import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, siteUrl } from './site-config';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteUrl.toString(),
  logo: new URL('/site/assets/brasao-oficial-transparente.png', siteUrl).toString(),
  foundingDate: '1984-09-24',
  slogan: 'Sursum Corda — Corações ao alto',
  email: siteConfig.email,
  telephone: siteConfig.telephone,
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
  sameAs: ['https://www.instagram.com/soberanos_ideais_2283'],
};

const principles = [
  {
    number: '01',
    title: 'Fraternidade',
    summary: 'Unir sem apagar diferenças.',
    copy: 'Cultivamos igualdade, respeito, tolerância, pertencimento e compromisso recíproco.',
    className: 'principle-wine',
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="24" cy="40" r="12" />
        <circle cx="56" cy="40" r="12" />
        <path d="M36 40h8M24 28l16-12 16 12M24 52l16 12 16-12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Caridade',
    summary: 'Servir com discrição e dignidade.',
    copy: 'Acolher e auxiliar são deveres exercidos sem autopromoção, sempre em benefício do próximo.',
    className: 'principle-gold',
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M16 45c8 0 12 3 18 9l6 6 6-6c6-6 10-9 18-9" />
        <path d="M40 57V21M29 32l11-11 11 11" />
        <path d="M15 56c8 0 14 3 20 9M65 56c-8 0-14 3-20 9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Verdade',
    summary: 'Fazer coincidir palavra e conduta.',
    copy: 'Conhecimento, retidão e coerência orientam o modo como a Loja registra sua memória e age no presente.',
    className: 'principle-white',
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="19" />
        <path d="M40 10v12M40 58v12M10 40h12M58 40h12" />
        <path d="m32 41 6 6 12-15" />
      </svg>
    ),
  },
];

function TriadMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? 'triad-mark triad-mark-compact' : 'triad-mark'} aria-label="Fraternidade, Caridade e Verdade">
      <span className="triad-dot triad-gold" />
      <span className="triad-dot triad-wine" />
      <span className="triad-dot triad-white" />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className="site-header">
        <Link className="brand-lockup" href="#inicio" aria-label="Soberanos Ideais — início">
          <Image src="/site/assets/brasao-oficial-transparente.png" alt="" width={52} height={52} priority />
          <span><b>Soberanos Ideais</b><small>A∴R∴L∴S∴ nº 2283</small></span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#loja">A Loja</a>
          <a href="#principios">Princípios</a>
          <a href="#visitantes">Visitantes</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header-actions">
          <Link className="header-text-link" href="/brandbook">Brand Book</Link>
          <Link className="header-pill" href="/membros">Área de membros</Link>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav aria-label="Navegação móvel">
            <a href="#loja">A Loja</a>
            <a href="#principios">Princípios</a>
            <a href="#visitantes">Visitantes</a>
            <a href="#contato">Contato</a>
            <Link href="/brandbook">Brand Book</Link>
            <Link href="/membros">Área de membros</Link>
          </nav>
        </details>
      </header>

      <div id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A∴R∴L∴S∴ Soberanos Ideais nº 2283</p>
            <div className="hero-title-lockup">
              <h1 id="hero-title">Ideais que elevam.<br />Valores que permanecem.</h1>
              <TriadMark />
            </div>
            <p className="hero-lead">Uma Loja construída sobre a memória, o trabalho e a permanência dos princípios.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#loja">Conheça a Loja</a>
              <a className="button button-quiet" href="#visitantes">Sou maçom visitante <span aria-hidden="true">↘</span></a>
            </div>
            <div className="hero-foundation"><span>Fundada em</span><strong>24 · 09 · 1984</strong></div>
          </div>

          <figure className="hero-media">
            <video autoPlay muted loop playsInline poster="/site/assets/abertura-malhete-poster.png" aria-label="Escultura de um artífice trabalhando com um malhete">
              <source src="/site/assets/abertura-malhete.mp4" type="video/mp4" />
            </video>
            <figcaption><span>Ordem</span><span>Construção</span><span>Continuidade</span></figcaption>
          </figure>
        </section>

        <section className="manifesto-strip" aria-label="Lema institucional">
          <span>Sursum Corda</span>
          <strong>Corações ao alto</strong>
          <TriadMark compact />
        </section>

        <section className="history-section" id="loja" aria-labelledby="history-title">
          <div className="section-index"><span>01</span><p>A Loja</p></div>
          <div className="history-intro">
            <p className="eyebrow wine-text">Memória e continuidade</p>
            <h2 id="history-title">Uma história que volta a erguer suas colunas.</h2>
            <p>Fundada em 1984 e reativada em 2022, a Loja preserva o nº 2283 como elo de continuidade entre sua origem e sua nova etapa.</p>
          </div>
          <div className="timeline" aria-label="Linha do tempo institucional">
            <article><time dateTime="1984-09-24">1984</time><div><b>Fundação</b><p>Em 24 de setembro, nasce a Loja que daria origem a esta trajetória.</p></div></article>
            <article><time dateTime="2022">2022</time><div><b>Reativação</b><p>O número histórico é preservado e uma nova etapa começa sob o nome Soberanos Ideais.</p></div></article>
            <article><time dateTime="2026">Hoje</time><div><b>Continuidade</b><p>A memória se torna orientação para o presente e compromisso com as futuras administrações.</p></div></article>
          </div>
        </section>

        <section className="principles-section" id="principios" aria-labelledby="principles-title">
          <div className="section-heading">
            <div><p className="eyebrow gold-text">02 · Princípios</p><h2 id="principles-title">Três pontos.<br />Uma direção.</h2></div>
            <p>A tríade digital resume aquilo que deve permanecer visível em toda decisão institucional.</p>
          </div>
          <div className="principle-accordion">
            {principles.map((principle, index) => (
              <details className={`principle ${principle.className}`} key={principle.title} open={index === 0}>
                <summary>
                  <span className="principle-number">{principle.number}</span>
                  <span className="principle-icon">{principle.icon}</span>
                  <span className="principle-name">{principle.title}</span>
                  <span className="principle-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="principle-copy"><strong>{principle.summary}</strong><p>{principle.copy}</p></div>
              </details>
            ))}
          </div>
        </section>

        <section className="visitor-section" id="visitantes" aria-labelledby="visitor-title">
          <div className="visitor-crest" aria-hidden="true">
            <Image src="/site/assets/brasao-oficial-transparente.png" alt="" width={420} height={420} priority />
          </div>
          <div className="visitor-copy">
            <p className="eyebrow gold-text">03 · Maçons visitantes</p>
            <h2 id="visitor-title">À porta da Loja, a acolhida começa pelo contato.</h2>
            <p>As visitas devem ser confirmadas previamente. Enquanto a Chancelaria é organizada, o contato é feito pelos canais institucionais abaixo.</p>
            <dl className="meeting-ledger">
              <div><dt>Quando</dt><dd>1ª e 3ª quartas-feiras de cada mês</dd></div>
              <div><dt>Horário</dt><dd>Informado mediante confirmação</dd></div>
              <div><dt>Onde</dt><dd>Rua Carbonita, 5 · Parque 10 · Manaus, AM</dd></div>
            </dl>
            <a className="button button-light" href="mailto:loja2283.gobam@gmail.com?subject=Solicitação%20de%20visita%20à%20Loja%202283">Solicitar orientação por e-mail</a>
          </div>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
          <div className="section-index"><span>04</span><p>Contato</p></div>
          <div className="contact-heading">
            <p className="eyebrow wine-text">Canais autorizados</p>
            <h2 id="contact-title">Entre em contato com a Loja.</h2>
            <p>Para informações institucionais, visitação ou assuntos administrativos.</p>
          </div>
          <div className="contact-ledger">
            <a href="mailto:loja2283.gobam@gmail.com"><span>E-mail</span><strong>loja2283.gobam@gmail.com</strong><i aria-hidden="true">↗</i></a>
            <a href="https://wa.me/5592929882201" target="_blank" rel="noreferrer"><span>WhatsApp provisório</span><strong>(92) 92988-2201</strong><i aria-hidden="true">↗</i></a>
            <a href="https://www.instagram.com/soberanos_ideais_2283" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@soberanos_ideais_2283</strong><i aria-hidden="true">↗</i></a>
            <div><span>Endereço</span><strong>Rua Carbonita, 5 · Parque 10<br />Manaus, AM</strong></div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/site/assets/brasao-oficial-transparente.png" alt="Brasão da A.R.L.S. Soberanos Ideais nº 2283" width={92} height={92} />
          <div><strong>A∴R∴L∴S∴ Soberanos Ideais</strong><span>Nº 2283 · GOB / GOBAM</span></div>
        </div>
        <p>Sursum Corda <span>—</span> Corações ao alto</p>
        <div className="footer-links"><Link href="/brandbook">Brand Book</Link><Link href="/membros">Área de membros</Link></div>
      </footer>
    </main>
  );
}
