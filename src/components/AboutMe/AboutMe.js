import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__info">
          <p className="about-me__name">Азат Салимов</p>
          <p className="about-me__occupation">Фронтенд-разработчик, 23 года</p>
          <p className="about-me__bio">Я родился и живу в Уфе, закончил факультет информатики и робототехники УГАТУ. Увлекаюсь горнолыжным спортом, осваиваю блокчейн технологию и криптовалюты,
          являюсь кандидатом в мастера спорта по пауэрлифтингу. В 2020 году начал свой путь веб-разработчика с курсов в «Яндекс.Практикуме».
          В настоящий момент я в поисках первой работы по данной специальности.</p>
          <ul className="about-me__list">
            <li className="about-me__list-item">
              <a className="about-me__link" href="https://vk.com/dipsyimba" target="_blank" rel="noreferrer">VK</a>
            </li>
            <li className="about-me__list-item">
              <a className="about-me__link" href="https://github.com/dipsyimba" target="_blank" rel="noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" alt="фотография" src={photo} />
      </div>
    </section>
  )
}

export default AboutMe;