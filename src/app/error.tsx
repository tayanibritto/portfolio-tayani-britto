'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container py-5 text-center" style={{ minHeight: '70vh' }}>
      <h1 className="display-1 fw-bold text-primary">Ops!</h1>

      <h2 className="display-6 mb-4">Algo deu errado.</h2>

      <p className="lead mb-4">Ocorreu um erro inesperado.</p>

      <button className="btn btn-outline-primary" onClick={reset}>
        Tentar novamente
      </button>
    </main>
  );
}
