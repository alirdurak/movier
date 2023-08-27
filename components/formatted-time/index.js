"use client";

import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth();
  const day = currentTime.getDate();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="text-orange-light bg-title-gray/10 p-4 rounded-lg">
      <p>{formattedTime}</p>
      <h1>{`${day}.${month + 1}.${year}`}</h1>
    </div>
  );
};

export default Clock;
