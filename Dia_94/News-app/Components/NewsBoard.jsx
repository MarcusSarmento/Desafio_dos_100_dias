import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({categorias}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categorias}&apiKey=1e46e467732846b5beae2f6bcdcae7ee`
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
  }, [categorias])// consumo da api

  return (
    <div>
      <h2 className="text-center">
        Últimas <span className="badge bg-danger">Notícias</span>
      </h2>
      <div className="d-flex flex-wrap jsutify-content-center">
        {
          articles.map((noticias, index) => {
            return <NewsItem key={index} title={noticias.title} description={noticia.description} src={noticias.urlToImage} url={noticias.url} />
          })
        };
      </div>
     
    </div>
  )
};

export default NewsBoard