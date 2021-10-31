import { useCallback, useRef, useState, useEffect } from "react";

export const useLoadContent = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const pages = useRef(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const getContent = useCallback(async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(
      searchValue ? `${url}&name=${searchValue}` : url
    );
    const jsonData = await response.json();
    if (jsonData?.error) {
      setErrorMessage(`Oops!...${jsonData.error}.`);
    }
    if (jsonData?.info) {
      pages.current = jsonData.info.pages;
      const newData = jsonData.results.slice(0, 10);
      setContent([...content, ...newData]);
    }
  }, [content, page, searchValue]);

  useEffect(() => {
    getContent();
  }, [page, searchValue]);

  const onFetchMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const onSearch = useCallback(
    (value) => {
      if (!value) {
        return;
      }
      if (searchValue === value) {
        return;
      }
      setSearchValue(value);
      setContent([]);
    },
    [searchValue]
  );

  return {
    content,
    getContent,
    onFetchMore,
    onSearch,
    errorMessage,
    isFetchMoreButtonVisible: !errorMessage && page < pages.current,
  };
};
