const TopStoriesTemplate = (props) => {
  // Published Time Calculation.
  const publishedHour = props.news.publishedAt.slice(11, 13);
  const publishedHourIn12 = publishedHour % 12 ? publishedHour % 12 : 12;
  const currentHour = new Date().getHours();
  const currentHourIn12 = currentHour % 12 ? currentHour % 12 : 12;

  let publishedAgo = publishedHourIn12 - currentHourIn12;
  publishedAgo =
    publishedAgo < 0 ? publishedAgo * -1 + "hr" : publishedAgo + "hr";

  publishedAgo = publishedAgo === "0hr" ? "less than 1hr" : publishedAgo;

  return (
    <div className="bg-lightGray text-gray-200 px-5 pb-5 w-full">
      <div className="img">
        <a href={props.news.url}>
          {props.news.urlToImage && (
            <img
              src={props.news.urlToImage}
              alt=""
              className="w-full max-h-[200px] rounded-xl"
              loading="lazy"
            />
          )}
        </a>
      </div>
      <div className="info p-1">
        <div className="source mt-2">
          <p className="text-xs">{props.news.source.name}</p>
        </div>
        <div className="headline mt-1 mb-3">
          <p className="text-xl">
            <a href={props.news.url} className="hover:underline">
              {props.news.title}
            </a>
          </p>
          <p className="text-xs mt-2">{publishedAgo}</p>
        </div>
      </div>
      <hr className="rounded-md border-gray-400 h-1" />
    </div>
  );
};

export default TopStoriesTemplate;