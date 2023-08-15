import { components } from "react-select";

const useSelectOptions = () => {
  const selectStyles = {
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused ? "#f5f5f5" : "white",
      color: "black",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        color: "black",
      },
      cursor: "pointer",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: "white",
      boxShadow: "none",
      "&:hover": {
        borderColor: "white",
      },
      cursor: "pointer",
    }),
    dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      transform: state.selectProps.menuIsOpen ? "" : "rotate(-90deg)",
      transition: "all .2s ease",
      "& svg": {
        width: "24px",
        height: "24px",
      },
    }),
    indicatorSeparator: () => null,
    menu: (baseStyles) => ({
      ...baseStyles,
      "& span": { backgroundColor: "red" },
    }),
  };

  const CheckboxOption = ({ children, ...props }) => {
    return (
      <components.Option {...props}>
        <input
          className="me-3"
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
          style={{
            width: "16px",
            height: "16px",
          }}
        />
        {children}
      </components.Option>
    );
  };

  const RadioOption = ({ children, ...props }) => {
    return (
      <components.Option {...props}>
        <input
          className="me-3"
          type="radio"
          checked={props.isSelected}
          onChange={() => null}
          style={{
            width: "16px",
            height: "16px",
          }}
        />
        {children}
      </components.Option>
    );
  };
  return { selectStyles, CheckboxOption, RadioOption };
};

export default useSelectOptions;
