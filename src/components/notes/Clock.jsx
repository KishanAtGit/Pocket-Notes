export const Clock = ({ currentTime }) => {
  if (typeof currentTime === "string") {
    currentTime = new Date(currentTime);
  }

  const formatTime = date => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "Pm" : "Am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
    return strTime;
  };

  const formatDate = date => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day.toString().padStart(2, "0")} ${month} ${year}`;
  };

  return (
    <div className='date-time'>
      <div>{formatTime(currentTime)}</div>
      <div>{formatDate(currentTime)}</div>
    </div>
  );
};
