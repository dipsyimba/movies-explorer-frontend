import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__input-block">
          <input className="search__input" type="text" placeholder="Фильм" required />
          <button className="search__button" type="submit">Найти</button>
        </div>
        <div className="search__checkbox-block">
          <FilterCheckbox />
          <p className="search__checkbox-label">Короткометражки</p>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;