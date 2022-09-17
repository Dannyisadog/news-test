import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 400px;
  border-radius: 8px;
  border: 1px solid #3333332c;
  margin-bottom: 20px;
  position: relative;
  margin-left: 20px;
  cursor: pointer;

  .image {
    width: 100%;
    height: 200px;
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
  }

  .news-title {
    padding: 0 20px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
  }

  .footer {
    position: absolute;
    bottom: 20px;
    display: flex;
    width: 100%;
    padding: 0 20px;
    color: #666;
    .ago {
      margin-left: 20px;
    }
  }
`;

const NewsItem = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Container>
      <div className="image">
        <img src={data.urlToImage} width="100%" height="100%" />
      </div>
      <div className="news-title">{data.title}</div>
      <div className="footer">
        <div className="source">中央通訊社</div>
        <div className="ago">41分鐘</div>
      </div>
    </Container>
  );
}

export default NewsItem;