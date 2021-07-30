import Header from '../Header/Header';
import './Profile.css';

function Profile(props) {
  return (
    <>
      <Header loggedIn={ props.loggedIn } />
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <div className="profile__form-inputs">
              <p className="profile__form-input">Имя</p>
              <input className="profile__form-input-field" type="text" placeholder="Виталий" disabled />
            </div>
            <div className="profile__form-inputs">
              <p className="profile__form-input">E-mail</p>
              <input className="profile__form-input-field" type="text" placeholder="pochta@yandex.ru" disabled />
            </div>
          </fieldset>
          <button className="profile__button profile__button_type_edit" >Редактировать</button>
          <button className="profile__button profile__button_type_signout" >Выйти из аккаунта</button>
        </form>
      </section>
    </>
  )
}

export default Profile;