import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container py-5 text-center" style={{ minHeight: '70vh' }}>
      <h1 className="display-1 fw-bold text-primary">Erro 404</h1>

      <h2 className="display-6 mb-4">Página não encontrada</h2>

      <p className="lead mb-4">
        A página que você tentou acessar não existe ou foi movida para outro endereço.
      </p>

      <Link href="/" className="btn btn-primary">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
