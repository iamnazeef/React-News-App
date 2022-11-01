import Axios from "axios";
import { useEffect, useState } from "react";
import TopStoriesTemplate from "./TopStoriesTemplate";
import Loading from "../assets/gif/loading.gif";

const TopStories = (props) => {
  const [geoTag, setGeoTag] = useState({
    longitude: ``,
    latitude: ``,
  });
  const [news, setNews] = useState("");
  const [newsTemps, setNewsTemps] = useState("");

  //Creating News Templates
  useEffect(() => {
    if (news) {
      let temps = news.articles.map((news) => {
        // console.log(news);
        return <TopStoriesTemplate news={news} key={news.link} />;
      });
      setNewsTemps(temps);
    }
  }, [news]);

  //Longitude and Latitude
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoTag((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      });
    }
  }, []);

  //Locating Country
  useEffect(() => {
    if (geoTag.latitude && geoTag.longitude) {
      Axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${
          geoTag.latitude
        }&lon=${geoTag.longitude}&limit=1&appid=${
          import.meta.env.VITE_WEATHER_KE
        }`
      )
        .then((response) => {
          props.setCountry(response.data[0].country);
        })
        .catch((e) => console.log("ERROR: ", e));
    }
  }, [geoTag.latitude, geoTag.longitude]);

  //Fetching News
  useEffect(() => {
    if (props.country) {
      Axios.get(
        `https://newsdata.io/api/1/news?apikey=${
          import.meta.env.VITE_NEWS_KEY
        }&country=${props.country}&category=top`
      )
        .then((response) => {
          // console.log(response.data.results);
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
      <div
        className={`px-6 max-h-screen py-4 text-blue-400 text-[1.7rem] font-medium`}
      >
        <p>Top Stories</p>
      </div>
      {newsTemps ? (
        <div>{newsTemps}</div>
      ) : (
        <div className="flex justify-center mt-24">
          <img src={Loading} alt="loading" className="w-12" />
        </div>
      )}
    </div>
  );
};

export default TopStories;
