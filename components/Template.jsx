import SearchIcon from '@mui/icons-material/Search';
import { getNews } from 'api/news';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { menuItems } from "./constants";
import Loader from './Loader';

const navbarHeight = '80px';
const leftBarWidth = '180px';

const Container = styled.div`
  .navbar-wrapper {
    position: fixed;
    height: ${navbarHeight};
    width: 100vw;
    background: white;
    box-shadow: 0 4px 4px -4px #0000003a;
    z-index: 5;
    display: flex;
    align-items: center;
    padding-left: 40px;

    .logo {
      cursor: pointer;
    }

    .input-wrapper {
      margin-left: 20px;
      position: relative;
      input {
        width: 400px;
        height: 40px;
        border-radius: 24px;
        border: 1px solid #0000002a;
        padding: 0 40px 0 20px;
        font-size: 14px;
      }

      .icon {
        position: absolute;
        right: 20px;
        top: 8px;
        color: #666;
        cursor: pointer;
      }
    }
  }

  .left-bar {
    height: 100vh;
    padding-top: ${navbarHeight};
    background: red;
    width: ${leftBarWidth};
    background: white;
    box-shadow: 0 4px 4px #0000003a;
    padding-left:20px;

    .menu-item {
      cursor: pointer;
      height: 30px;
      margin-top: 20px;
      transition: 0.3s;
      display: flex;
      align-items: center;
      color: #666;

      .text {
        margin-left: 4px;
      }
    }
    .menu-item.active {
      color: #2c80e7;
    }
  }
  
  .content {
    position: fixed;
    left: ${leftBarWidth};
    top: ${navbarHeight};
    padding: 30px 0 100px 30px;
    width: calc(100% - 200px);
    height: 100%;
    overflow: scroll;
  }
`;

const Template = (props) => {
  const { children, title, setTitle, loader, setLoader, setNews } = props;
  const getData = async ({
    text, id, country
  }) => {
    setLoader(true);
    setTitle({
      text,
      id
    })
    const data = await getNews({
      country
    });
    setNews(data.articles);
    setLoader(false);
  }
  return (
    <Container>
      <>
        <Head>
          <title>News App</title>
          <meta name="description" content="An news app for interview" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className="navbar-wrapper">
          <Link href="/">
            <div className="logo">
              <Image src="/logo.png" width="116" height="60" />
            </div>
          </Link>
          <div className="input-wrapper">
            <input type="text" className="search-input" />
            <SearchIcon className="icon" />
          </div>
        </div>
        <div className="left-bar">
          {
            menuItems.map((item, index) => {
              return (
                <div key={index} className={`menu-item ${title.id == item.id ? 'active' : ''}`} onClick={() => {
                  getData({
                    text: item.text,
                    id: item.id,
                    country: item.key
                  })
                }}>
                  <div className="icon">{item.icon}</div>
                  <div className="text">{item.text}</div>
                </div>
              );
            })
          }
        </div>
        <div className="content">
          {children}
        </div>
      </>
      <Loader show={loader} />
    </Container>
  );
}

export default Template;