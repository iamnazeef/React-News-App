import Axios from "axios";
import { useEffect, useState } from "react";
import TopStoriesTemplate from "../components/TopStoriesTemplate";
import Loading from "../assets/gif/loading.gif";

const Business = (props) => {
  const [news, setNews] = useState("");
  const [newsTemps, setNewsTemps] = useState("");

  //Creating News Templates
  useEffect(() => {
    if (news) {
      let temps = news.articles.map((news) => {
        return <TopStoriesTemplate news={news} key={news.url} />;
      });
      setNewsTemps(temps);
    }
  }, [news]);

  //Fetching News
  useEffect(() => {
    if (props.country) {
      Axios.get(
        `https://newsapi.org/v2/top-headlines?country=${
          props.country
        }&category=general&apiKey=${import.meta.env.VITE_NEWS_KEY}`
      )
        .then((response) => {
          const articles = response.data.articles.map((article) => article);
          setNews((prev) => ({
            ...prev,
            articles,
          }));
        })
        .catch((e) => console.log("ERROR: ", e));
    }
  }, [props.country]);

  return (
    <div>
      <div className="px-6 py-4 text-blue-400 text-[1.7rem] font-medium">
        <p>General</p>
      </div>
      {newsTemps ? (
        <div>{newsTemps}</div>
      ) : (
        <div className="flex justify-center mt-10">
          <img src={Loading} alt="loading" className="w-12" />
        </div>
      )}
    </div>
  );
};

export default Business;
