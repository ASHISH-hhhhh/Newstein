import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getNewsAPI } from "./api";
import { getSourceAPI } from "./api";
export const NewsContext = createContext();
function Context({ children }) {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState("");
  const [index, setIndex] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);
  async function fetchNews(reset = category) {
    try {
      const { data } = await axios.get(getNewsAPI(reset));
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchSourceNews() {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchNews();
  }, [category]);
  useEffect(() => {
    fetchSourceNews();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        index,
        darkTheme,
        setIndex,
        fetchNews,
        setCategory,
        setSource,
        setDarkTheme,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
export default Context;
