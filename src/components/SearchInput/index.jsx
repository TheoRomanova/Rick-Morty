import { useCallback, useState } from "react";
import Button from "../Button";
import "./index.css";

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onSearchChange = useCallback((e) => setValue(e.target.value), []);
  const onSubmit = useCallback(() => onSearch(value), [value, onSearch]);

  return (
    <div className="search-input">
      <input value={value} onChange={onSearchChange} />
      <Button onClick={onSubmit}>SEARCH</Button>
    </div>
  );
};

export default SearchInput;
