export default function Layout({ children }) {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">Mi Sitio</a>
          </div>
        </nav>
        {children}
        <footer className="bg-dark text-center text-light py-3 mt-5">
          © 2025 Mi Sitio
        </footer>
      </div>
    );
  }
  