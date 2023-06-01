"use client";

import React, { useState, useRef, useEffect } from "react";

interface IPosts {
  type: "video" | "image";
  url: string;
}

export default function Stories() {
  let list: IPosts[] = [
    {
      type: "image",
      url: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
    },
    {
      type: "video",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      type: "image",
      url: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
    },
    {
      type: "image",
      url: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
    },
    {
      type: "image",
      url: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
    },
    {
      type: "image",
      url: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
    },
    {
      type: "image",
      url: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
    },
  ];

  const [nowPlaying, setNowPlaying] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);

  function StoriesFunction() {
    return (
      <div className="story-line">
        <div className="story-null-2">
          {haveDataAtIndex(nowPlaying - 2, list)}
        </div>
        <div className="story-null-1">
          {haveDataAtIndex(nowPlaying - 1, list)}
        </div>
        <div className="story-focus">
          <div className="story-counter">{timerCounter(nowPlaying, list)}</div>
          {haveDataAtIndex(nowPlaying, list)}
        </div>
        <div className="story-null-1">
          {haveDataAtIndex(nowPlaying + 1, list)}
        </div>
        <div className="story-null-2">
          {haveDataAtIndex(nowPlaying + 2, list)}
        </div>
      </div>
    );
  }

  function timerCounter(index: number, array: IPosts[]) {
    let list = [];

    for (let i = 0; i < array.length; i++) {
      if (i < index) {
        list.push(<div className="timer-viewed"></div>);
      } else if (i == index) {
        list.push(<div className="timer-active"></div>);
      } else {
        list.push(<div className="timer"></div>);
      }
    }

    return list;
  }

  function haveDataAtIndex(index: number, array: IPosts[]) {
    if (array[index] !== undefined) {
      if (array[index].type == "image") {
        return <img src={array[index].url} alt="" />;
      } else {
        return <video src={array[index].url} autoPlay={isPlaying} />;
      }
    } else {
      return "";
    }
  }

  return (
    <div className="flex items-center w-full h-full justify-center">
      <button
        className="w-20 button-previous"
        onClick={() => {
          if (list[nowPlaying - 1] !== undefined) {
            setNowPlaying(nowPlaying - 1);
            setTimer(0);
            if (
              list[nowPlaying - 1] != undefined &&
              list[nowPlaying - 1].type == "video"
            ) {
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
            }
          }
        }}
      >
        {"<"}
      </button>
      {StoriesFunction()}
      <button
        className="w-20 button-forward"
        onClick={() => {
          if (list[nowPlaying + 1] !== undefined) {
            setNowPlaying(nowPlaying + 1);
            setTimer(0);
            if (
              list[nowPlaying + 1] != undefined &&
              list[nowPlaying + 1].type == "video"
            ) {
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
            }
          }
        }}
      >
        {">"}
      </button>
    </div>
  );
}
