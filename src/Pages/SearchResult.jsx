import Axios from "axios";
import { useEffect, useState } from "react";
import TopStoriesTemplate from "../components/TopStoriesTemplate";
import Loading from "../assets/gif/loading.gif";

const SearchResult = (props) => {
  const [news, setNews] = useState("");
  const [newsTemps, setNewsTemps] = useState("");
  const [searchedKeyword, setSearchedKeyword] = useState("");

  //Creating News Templates
  useEffect(() => {
    if (news) {
      let temps = news.articles.map((news) => {
        return <TopStoriesTemplate news={news} key={news.link} />;
      });
      setNewsTemps(temps);
      props.setSearchInput("");
    }
  }, [news]);

  const date = new Date();

  //Fetching News

  useEffect(() => {
    // console.log(props.searchInput);
    if (props.country) {
      Axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_129376965a51c291ca4273aa7684e0c0cdd17&q=${props.searchInput}` //restricted to one keyword search
      )
        .then((response) => {
          const articles = response.data.results.map((article) => article);
          setNews((prev) => ({
            ...prev,
            articles,
          }));
          setSearchedKeyword(props.searchInput);
          props.setSearchInput("");
        })
        .catch((e) => console.log("ERROR: ", e));
    }
  }, [props.country, props.searchBtnClicked]);

  return (
    <div className="px-[0.6rem] sm:px-20 md:px-28 lgmd:px-[8rem] mdlg:px-[9.5rem] lg:px-[11.2rem] xl:px-[15.2rem] 1.5xl:px-[25rem]">
      <div className="px-6 py-4 text-blue-400 text-[1.7rem] font-medium">
        <p>
          <span className="text-sm font-normal mr-1">Showing results for</span>
          <span className="text-[1.7rem]">"{searchedKeyword}"</span>
        </p>
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

export default SearchResult;
