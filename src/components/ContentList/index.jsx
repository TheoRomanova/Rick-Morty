import "./styles.css";

const ContentList = ({ content }) => {
  return (
    <ul className="content-list-wrapper">
      {content.map((item) => (
        <li>
          <img className="content-img" src={item.image} alt={item.name}></img>
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
