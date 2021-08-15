import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const { isFilterChecked, toggleFilter } = props;

  return (
    <label className="checkbox search__checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        checked={isFilterChecked}
        onChange={toggleFilter}
      />
      <span className="checkbox__toggle" />
    </label>
  );
}

export default FilterCheckbox;
