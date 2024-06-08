import { useEffect, useState } from "react";
import { Clock } from "./Clock";

export default function Note({ note }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    console.log("currentTime");
    setCurrentTime(new Date());
  });

  return (
    <div style={{ display: "flex", gap: "2ch" }}>
      <Clock currentTime={currentTime} />
      <div className='note'>{note}</div>
    </div>
  );
}
