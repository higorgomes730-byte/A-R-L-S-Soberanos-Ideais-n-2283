import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Área de membros',
  description: 'Acesso reservado aos membros da A.R.L.S. Soberanos Ideais nº 2283.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function MembersPage() {
  return (
    <main className="members-page">
      <Link className="members-back" href="/">← Voltar ao site</Link>
      <section className="members-panel" aria-labelledby="members-title">
        <Image src="/site/assets/brasao-oficial-transparente.png" alt="Brasão da A.R.L.S. Soberanos Ideais nº 2283" width={180} height={180} priority />
        <p className="eyebrow gold-text">Ambiente reservado</p>
        <h1 id="members-title">Área de membros</h1>
        <p>Este ambiente está sendo preparado para reunir documentos e comunicações internas com acesso controlado.</p>
        <div className="members-status"><span aria-hidden="true" /><strong>Acesso ainda não habilitado</strong></div>
        <a className="button button-light" href="mailto:loja2283.gobam@gmail.com?subject=Área%20de%20membros">Falar com a administração</a>
      </section>
    </main>
  );
}
