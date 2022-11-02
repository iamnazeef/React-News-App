import { useState } from "react";

const ReportBug = () => {
  const [name, setName] = useState("");
  const [bug, setBug] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-6 py-4">
      <h2 className="text-gray-300 text-xl font-medium border-b-2 border-b-gray-300 w-fit">
        Report Bug
      </h2>
      <form
        onSubmit={handleSubmit}
        className="text-gray-300 mt-4 flex flex-col space-y-3 justify-center items-start"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="rounded-md bg-mediumGray py-1 px-2 border-gray-600 border-2 caret-gray-300 placeholder:text-gray-500 placeholder:text-sm max-w-[230px]"
          placeholder="eg: Your_Name"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="description">Explain the bug:</label>
        <textarea
          id="description"
          name="text"
          className="rounded-md w-[250px] border-gray-600 border-2 caret-gray-300 bg-mediumGray min-h-[150px] placeholder:text-gray-500 placeholder:text-sm py-1 px-2"
          placeholder="eg: Please try to explain the bug as specific as possible. Also if it's possible please try to mention the device you are using to access the website"
          value={bug}
          onChange={(event) => setBug(event.target.value)}
        />
        <button className="border-2 rounded-md px-1 py-[0.2rem] font-thin bg-red-500 border-red-400 shadow-md hover:shadow-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportBug;
