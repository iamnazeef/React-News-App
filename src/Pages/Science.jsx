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
        return <TopStoriesTemplate news={news} key={news.link} />;
      });
      setNewsTemps(temps);
    }
  }, [news]);

  //Fetching News
  useEffect(() => {
    if (props.country) {
      Axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_129376965a51c291ca4273aa7684e0c0cdd17&country=${props.country}&category=science`
      )
        .then((response) => {
          const articles = response.data.results.map((article) => article);
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
        <p>Science</p>
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
