import { getNews } from "api/news";
import Template from "components/Template";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const Container = styled.div`
  h1 {
    margin: 0;
  }

  .title-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .support-text {
      font-size: 14px;
      color: #666;
    }
  }

  .news-wrapper {
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    margin-top: 20px;
  }
`;

const News = () => {
  const [loader, setLoader] = useState(false);
  const [title, setTitle] = useState({
    text: "熱門報導",
    id: 1
  });
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // STEP 2：使用 Promise.all 搭配 await 等待兩個 API 都取得回應後才繼續
      const data = await getNews({
        country: 'us'
      });

      setNews(data.articles);
    };
    fetchData();
  }, []);

  return (
    <Template title={title} setTitle={setTitle} loader={loader} setLoader={setLoader} setNews={setNews}>
      <Container>
        <div className="title-wrapper">
          <h1>{title.text}</h1>
          <div className="support-text">由Microsoft News支援</div>
        </div>
        <div className="news-wrapper">
          {
            news.map((newsItem, index) => {
              return (
                <NewsItem key={index} data={newsItem} />
              );
            })
          }
        </div>
      </Container>
    </Template>
  );
}

export default News;