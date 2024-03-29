import './globals.css'

export const metadata = {
  title: 'Pindie',
  description: 'Портал инди-игр от студентов Яндекс Практикума',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
      <header className="header">
      <a href="./index.html" className="logo">
        <img className="logo__image" src="./images/logo.svg" alt="Логотип Pindie" />
      </a>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="" className="menu__link">Новинки</a>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">Популярные</a>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">Шутеры</a>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">Ранеры</a>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">Пиксельные</a>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">TDS</a>
          </li>
        </ul>
        <div className="auth">
          <button className="auth__button">Войти</button>
        </div>
      </nav>
    </header>
        {children}
      <footer className="footer">
      <a href="./index.html" className="footer__logo">
        <span className="footer__logo-name">pindie</span>
        <span className="footer__logo-copy">, XXI век</span>
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="" className="button social-list__link">YT</a>
        </li>
        <li className="social-list__item">
          <a href="" className="button social-list__link">ВК</a>
        </li>
        <li className="social-list__item">
          <a href="" className="button social-list__link">TG</a>
        </li>
      </ul>
    </footer>
      </body>
    </html>
  );
}
