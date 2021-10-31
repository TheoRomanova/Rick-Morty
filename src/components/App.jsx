import Header from "./Header";
import ContentList from "./ContentList";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";
import Button from "./Button";

const App = () => {
  const {
    content,
    onFetchMore,
    onSearch,
    errorMessage,
    isFetchMoreButtonVisible,
  } = useLoadContent();

  return (
    <div className="App">
      <Header onSearch={onSearch} />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <ContentList content={content} />
      {isFetchMoreButtonVisible && (
        <Button className=" button fetch-more-btn" onClick={onFetchMore}>
          FETCH MORE
        </Button>
      )}
    </div>
  );
};

export default App;
