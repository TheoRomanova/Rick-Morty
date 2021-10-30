import SearchInput from "../SearchInput";
import logo from "../../assets/kitty.png";
import "./index.css";

const Header = ({ onSearch }) => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <SearchInput onSearch={onSearch} />
  </header>
);

export default Header;
