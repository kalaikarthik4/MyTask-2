import React, { useState, useEffect } from "react";
import axios from "axios";

const LoadImage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    return await axios.get("https://picsum.photos/200/300.jpg");
  };

  useEffect(() => {
    fetchData().then((res) => {
      setData(res.config.url);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>
          <h3>Get Image</h3>
          <img alt="picsum-api" src={`${data}`} />
        </div>
      )}
    </div>
  );
};