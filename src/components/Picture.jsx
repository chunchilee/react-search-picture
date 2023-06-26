import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        在此點擊下載圖片:
        <a target="_blank" rel="noreferrer noopener" href={data.src.large}>
          點擊此處
        </a>
      </p>
    </div>
  );
};

export default Picture;
