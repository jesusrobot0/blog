export function getFormattedDate(date: Date): string {
  const months: Record<number, string> = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const month = months[new Date(date).getMonth()];
  const day = new Date(date).getDay();
  const year = new Date(date).getFullYear();

  return `${month} ${day}, ${year}`;
}
