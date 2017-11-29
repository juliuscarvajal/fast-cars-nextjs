const SelectBox = ({ label, placeholderText, value, onChange, options }) => {
  const opts =
    options &&
    options.map(option => {
      return (
        <option value={option.key} key={option.key}>
          {option.value}
        </option>
      );
    });

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="0" key="0">
          Select {placeholderText}
        </option>
        {opts}
      </select>
    </div>
  );
};

export default SelectBox;
