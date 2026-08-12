export function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container text-center py-5">
        <h2 className="h5 mb-3 footer-name">Tayani Britto</h2>

        <p className="mb-4">Desenvolvedora Front-End e Back-End Python</p>

        <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
          <a href="mailto:mad.britto@gmail.com" target="_blank">
            Enviar e-mail
          </a>
          <a href="https://github.com/tayanibritto" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tayani-britto/" target="_blank">
            LinkedIn
          </a>
        </div>

        <small>&copy; {new Date().getFullYear()} Tayani Britto</small>

        <p className="mt-2 mb-0 footer-tech">Desenvolvido com Next.js, TypeScript e Bootstrap</p>
      </div>
    </footer>
  );
}
