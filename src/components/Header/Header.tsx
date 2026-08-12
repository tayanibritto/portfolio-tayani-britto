'use client';

import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';

export function Header() {
  return (
    <header className="sticky-top bg-body border-bottom">
      <nav className="navbar navbar-expand-lg container">
        <a className="navbar-brand" href="#hero">
          Tayani Britto
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir menu de navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#tecnologias">
                Tecnologias
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projetos">
                Projetos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experiencia">
                Experiência
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#certificacoes">
                Certificações
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </li>

            <li className="nav-item ms-lg-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
