const TopStoriesTemplate = (props) => {
  // Published Time Calculation.
  const publishedHour = props.news.pubDate.slice(11, 13);
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
        <a href={props.news.link}>
          {props.news.image_url && (
            <img
              src={props.news.image_url}
              alt=""
              className="w-full max-h-[200px] rounded-xl sm:max-h-[250px] md:max-h-[280px] lgmd:max-h-[300px] mdlg:max-h-[320px] lg:max-h-[355px] xl:max-h-[420px]"
              loading="lazy"
            />
          )}
        </a>
      </div>
      <div className="info p-1">
        <div className="source mt-2">
          <p className="text-xs">{props.news.source_id}</p>
        </div>
        <div className="headline mt-1 mb-3">
          <p className="text-xl">
            <a href={props.news.link} className="hover:underline">
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
