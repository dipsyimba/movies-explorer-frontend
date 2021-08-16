import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/formValidation";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import "./Profile.css";

function Profile(props) {
  const { loggedIn, isLoading, handleSignOut, handleUpdateUser } = props;
  const currentUser = useContext(CurrentUserContext);
  const { values, isValid, handleChange, setValues } = useFormWithValidation();
  const { name, email } = values;
  const isInputValid =
    isValid && (name !== currentUser.name || email !== currentUser.email);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateUser({
      name: name || currentUser.name,
      email: email || currentUser.email
    });
  }

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        {!isLoading && (
          <>
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit} noValidate>
              <fieldset className="profile__fieldset">
                <div className="profile__form-inputs">
                  <p className="profile__form-input">Имя</p>
                  <input
                    className="profile__form-input-field"
                    type="text"
                    name="name"
                    value={name || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="profile__form-inputs">
                  <p className="profile__form-input">E-mail</p>
                  <input
                    className="profile__form-input-field"
                    type="email"
                    name="email"
                    value={email || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>
              <button
                type="submit"
                className={`profile__button profile__button_type_edit
              ${isInputValid ? "" : "profile__button_type_edit-disabled"}`}
              >
                Редактировать
              </button>
              <button
                className="profile__button profile__button_type_signout"
                type="button"
                onClick={handleSignOut}
              >
                Выйти из аккаунта
              </button>
            </form>
          </>
        )}
        {isLoading && <Preloader />}
      </section>
    </>
  );
}

export default Profile;
