import { FetchApi } from "./components/FetchApi";

export function HomePage() {
  return (
    <div className="layout-app">
      <header className="layout-header">
        <nav className="layout-nav">
          <div className="layout-logo">DemoSite HW 07</div>

          <div className="layout-links">
            <a href="#contacts">Contacts</a>
          </div>
        </nav>
      </header>

      <main className="layout-main">
        <div className="layout-section">
          <h1>HW07 Базовый сетап фронтенд части проекта с React</h1>
          <p>Simple React page built with HTML and CSS only.</p>
        </div>
        <FetchApi />
      </main>

      <footer className="layout-footer">
        © 2026 DemoSite
      </footer>
    </div>
  );
}
