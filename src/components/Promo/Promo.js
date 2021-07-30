import promo from '../../images/promo-logo.svg';
import './Promo.css';

function Promo(props) {
  return (
    <section className="promo" id="promo">
      <img className="promo__logo" alt="promo logo" src={promo} />
      <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a href="#promo" className="promo__link">Узнать больше</a>
    </section>
  )
}

export default Promo;