export const formatDate = (d) => {
  const date = new Date(d);
  return date
    .toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC",
    })
    .replace(",", "");
};

export const formatNumber = (num) => {
  if (num < 1000) return num.toString();

  if (num < 1_000_000) {
    // Thousands
    const k = Math.round(num / 1000);
    return `${k}k`;
  }

  // Millions
  const m = (num / 1_000_000).toFixed(2);
  // Remove trailing .00 or .0
  return `${parseFloat(m)}m`;
};
