import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Picture from "../components/Picture";
import Search from "../components/Search";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState("");
  const auth = "vzj8IHUfMiw30VhpSCg4eJeI0CNu2UIrQDdZmxk88VgrzcjJM8BNhuES";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  const search = useCallback(
    async (url) => {
      let URL = await axios.get(url, { headers: { Authorization: auth } });
      setData(URL.data.photos);
      setCurrentPage(input);
    },
    [input]
  );
  
  // const search = async (url) => {
  //   let URL = await axios.get(url, { headers: { Authorization: auth } });
  //   setData(URL.data.photos);
  //   setCurrentPage(input);
  // };

  useEffect(() => {
    search(initialURL);
  }, [search]);

  const morePicture = async () => {
    let newURL;
    if (currentPage === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${
        page + 1
      }&per_page=15;`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentPage}&page=${
        page + 1
      }&per_page=15`;
    }
    let URL = await axios.get(newURL, { headers: { Authorization: auth } });
    setData(data.concat(URL.data.photos));
    // 變數跟組件無關係的話，修改變數不會造成組建渲染，因此每次呼叫都要setPage(page+1)，點擊後，newURL才會改變。
    // 第一次渲然完後，page = 1，第二次渲染page = 1
    setPage(page + 1);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((data, index) => {
            return <Picture data={data} key={index} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default HomePage;
