import './AboutProject.css';
import '../Cards/Cards.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title section__title">О проекте</h2>
      <ul className="cards">
        <li className="cards__item">
          <h3 className="cards__title">Дипломный проект включал 5 этапов</h3>
          <p className="cards__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="cards__item">
          <h3 className="cards__title">На выполнение диплома ушло 5 недель</h3>
          <p className="cards__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__steps">
        <p className="about-project__steps-week about-project__steps-week_one">1 неделя</p>
        <p className="about-project__steps-week about-project__steps-week_four">4 недели</p>
        <p className="about-project__steps-text about-project__steps-text_back">Back-end</p>
        <p className="about-project__steps-text about-project__steps-text_front">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;