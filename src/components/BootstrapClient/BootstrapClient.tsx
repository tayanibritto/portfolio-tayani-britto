'use client';

import { useEffect } from 'react';

export function BootstrapClient() {
  useEffect(() => {
    void import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
