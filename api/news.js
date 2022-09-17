import { fetchData } from "utility/api";

export const getNews = ({ country }) => {
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=6267ac9d385a400f8c539f3e1a1e9a64`;
  return fetchData({
    url,
    method: "GET"
  });
}