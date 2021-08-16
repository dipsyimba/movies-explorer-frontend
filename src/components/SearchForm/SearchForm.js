import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm(props) {
  const { handleSearchSubmit, isFilterChecked, toggleFilter } = props;
  const [keyword, setKeyword] = useState("");

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearchSubmit(keyword);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__input-block">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            value={keyword}
            onChange={handleChange}
            required
          />
          <button className="search__button" type="submit">
            Найти
          </button>
        </div>
        <div className="search__checkbox-block">
          <FilterCheckbox
            isFilterChecked={isFilterChecked}
            toggleFilter={toggleFilter}
          />
          <p className="search__checkbox-label">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
