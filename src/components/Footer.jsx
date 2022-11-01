const Footer = () => {
  return (
    <div className="text-gray-300 pb-28 relative px-5 pt-5 bg-mediumGray">
      <div>
        <p className="text-sm mb-1 w-fit">
          <a href="/" className="hover:underline">
            Refresh
          </a>
        </p>
        <p className="text-sm w-fit mb-1">
          <a href="#" className="hover:underline">
            Back to top
          </a>
        </p>
        <p className="text-sm mt-1 w-fit">Report bug</p>
      </div>
      <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mt-7">
        <p className="text-sm">&copy; 2022 The Morning Post</p>
      </div>
    </div>
  );
};

export default Footer;
