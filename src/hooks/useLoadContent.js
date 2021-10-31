import { useCallback, useRef, useState, useEffect } from "react";

export const useLoadContent = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const pages = useRef(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const getContent = useCallback(async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const data = await fetch(searchValue ? `${url}&name=${searchValue}` : url);
    const response = await data.json();
    if (response?.error) {
      setErrorMessage(`Oops!...${response.error}.`);
    }
    if (response?.info) {
      errorMessage && setErrorMessage(null);
      pages.current = response.info.pages;
      const newData = response.results.slice(0, 10);
      setContent([...content, ...newData]);
    }
  }, [content, page, searchValue, errorMessage]);

  useEffect(() => {
    getContent();
  }, [page, searchValue]);

  const onFetchMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const onSearch = useCallback(
    (value) => {
      if (searchValue === value) {
        return;
      }
      setSearchValue(value);
      setContent([]);
      setPage(1);
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
