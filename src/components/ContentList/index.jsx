const ContentList = ({ content }) => {
  return (
    <ul>
      <li>
        {content.map((item) => (
          <img src={item.image} alt={item.name}></img>
        ))}{" "}
      </li>
    </ul>
  );
};

export default ContentList;
