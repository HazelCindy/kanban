const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FormatDate = (timeStamp, timeInclude, string = false) => {
  const currentDate = string
    ? new Date(timeStamp.replace(" ", "T"))
    : timeStamp;
  const month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let hour = currentDate.getHours();
  let min = currentDate.getMinutes();
  let sec = currentDate.getSeconds();

  day = (day < 10 ? "0" : "") + day;
  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;

  const time = timeInclude ? ` ${hour}:${min}:${sec}` : "";

  return `${monthNames[month - 1]} ${day}, ${currentDate.getFullYear()}${time}`;
};

export default FormatDate;
