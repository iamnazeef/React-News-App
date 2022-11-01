import Axios from "axios";
import { useEffect, useState } from "react";
import { findDay } from "../components/findDay";
import { findMonth } from "../components/findMonth";
import turnOnLocation from "../assets/icons/myLocation.png";

const Weather = () => {
  let count = 0;

  const [geoTag, setGeoTag] = useState({
    longitude: ``,
    latitude: ``,
  });

  const [weather, setWeather] = useState({
    temp: ``,
    location: ``,
    condition: ``,
  });

  const [date, setDate] = useState({
    day: ``,
    dateNum: ``,
    month: ``,
  });

  useEffect(() => {
    setDate((prev) => {
      const date = new Date();

      return {
        ...prev,
        day: findDay(date.getDay()),
        dateNum: date.getDate(),
        month: findMonth(date.getMonth()),
      };
    });
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoTag((prev) => ({
          ...prev,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        }));
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [count]);

  useEffect(() => {
    if (geoTag.latitude && geoTag.longitude) {
      Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          geoTag.latitude
        }&lon=${geoTag.longitude}&units=metric&appid=951ae4d28175a0f119122e34d7af3d6a`
      ).then((response) => {
        setWeather((prev) => ({
          ...prev,
          temp: response.data.main.temp,
          location: response.data.name,
          condition: response.data.weather[0].icon,
        }));
      });
    }
  }, [geoTag.latitude, geoTag.longitude]);

  return (
    <div className="font-Rubik bg-lightGray text-gray-200 mt-16">
      <div className="w-full h-20 flex justify-around items-center flex-wrap relative">
        <div className={`text-start ${geoTag.latitude ? "pr-0" : "pr-0"}`}>
          <p className="text-[1.6rem] font-medium tracking-normal">
            Your briefing
          </p>
          <p className="text-sm text-gray-400">{`${date.day}, ${date.dateNum} ${date.month}`}</p>
        </div>
        {navigator.geolocation && (
          <div className="items-center relative flex flex-wrap mr-1">
            <div className="weatherCondition mr-[0.20rem]">
              {weather.condition && (
                <img
                  src={`http://openweathermap.org/img/wn/${weather.condition}@2x.png`}
                  alt=""
                  className="w-[70px]"
                />
              )}
            </div>
            <div className="w-10 justify-center items-start flex flex-col mr-[0.35rem]">
              {weather.location && (
                <p className="text-[0.73rem]">{weather.location}</p>
              )}
              {weather.temp && (
                <p className="text-[1.30rem] tracking-wide">
                  {Math.floor(weather.temp)}°C
                </p>
              )}
            </div>
          </div>
        )}
        {!geoTag.latitude && (
          <img
            onClick={() => ++count}
            src={turnOnLocation}
            alt="turn on location"
            className="w-7"
          />
        )}
      </div>
      <hr className="border-gray-700" />
    </div>
  );
};

export default Weather;
