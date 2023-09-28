"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [Images, SetImages] = useState([]);
  const GetImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      SetImages(data);
    } catch (error) {
      console.error("error in fetching images");
    }
  };
  return (
    <div>
      <buttton
        onClick={GetImages}
        className="px-5 py-3 bg bg-green-600 text-white font-bold"
      >
        Getimages
      </buttton>
      <div className="p-10">
        {Images.map((elem, i) => {
          /* return <img key={i}>{elem.author}</img>; */
          return (
            <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="m-10 rounded inline-block"
              // m-10 means margin 10 rounder corner inline block means grid view me
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
