import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__links">
        <p className="footer__copyright">© 2021 Азат Салимов</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="https://github.com/dipsyimba" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;