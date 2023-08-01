import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const params = useParams();
  console.log(params);
  const [searchParams] = useSearchParams();
  console.log("SP", searchParams);
  //   const history = useHistory();
  const goBack = () => {
    window.history.back();
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={goBack}
      >
        Back
      </button>
      <iframe
        width="1960"
        height="915"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default WatchPage;
