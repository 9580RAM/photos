import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "./constants/api";

const App = () => {
  const [data, setData] = useState([]);
  const header = {
    Authorization: APIKEY,
  };

  useEffect(() => {
    axios
      .get(`https://api.pexels.com/v1/curated?page=2&per_page=40`, {
        headers: header,
      })
      .then((response) => {
        console.log(response.data?.photos);
        setData(response.data?.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="text-6xl px-5 pt-2">
      <div className="columns-1 sm:columns-2 md:columns-4 lg:columns-5">
      {data &&
        data.map((item) => (
          <div>
            <img className="w-60 mt-6 rounded-lg" src={item?.src?.small} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
