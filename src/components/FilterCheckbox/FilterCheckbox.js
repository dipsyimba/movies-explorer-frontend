import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="checkbox search__checkbox">
      <input className="checkbox__input" type="checkbox" />
      <span className="checkbox__toggle" />
    </label>
  )
}

export default FilterCheckbox;