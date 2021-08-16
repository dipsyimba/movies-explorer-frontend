import "./InfoPopup.css";

function InfoPopup({ state, onClose }) {
  const popupBaseClassName = "root__popup popup";
  let popupClassName;

  if (!state.open) {
    popupClassName = popupBaseClassName + " popup_hidden";
  } else {
    popupClassName = popupBaseClassName;
  }

  if (!state.error) {
    popupClassName += " popup_success";
  }
  return (
    <div className={popupClassName}>
      <button
        className={`popup__close ${!state.error ? "popup__close_success" : ""}`}
        type="button"
        onClick={onClose}
      />
      <h1
        className={`popup__title ${!state.error ? "popup__title_success" : ""}`}
      >
        {state.title}
      </h1>
      <p className="popup__text">{state.message}</p>
    </div>
  );
}

export default InfoPopup;
