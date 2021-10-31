import SearchInput from "../SearchInput";
import logo from "../../assets/kitty.png";
import catsVoice from "../../assets/kitty-meow.wav";
import "./index.css";

const Header = ({ onSearch }) => {
  const play = () => {
    const audio = new Audio(catsVoice);
    audio.play();
  };
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" onClick={play} />
      <SearchInput onSearch={onSearch} />
    </header>
  );
};
export default Header;
