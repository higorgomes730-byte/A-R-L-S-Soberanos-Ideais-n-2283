import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Book',
  description: 'Manual institucional e de identidade visual da A.R.L.S. Soberanos Ideais nº 2283.',
  alternates: {
    canonical: '/brandbook',
  },
};

export default function BrandBookPage() {
  return (
    <main className="brandbook-shell">
      <iframe
        className="brandbook-frame"
        src="/site/index.html"
        title="Brand Book da A.R.L.S. Soberanos Ideais nº 2283"
        allow="autoplay"
      />
    </main>
  );
}
