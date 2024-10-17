function timeAgo(timestamp: string) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now - past) / 1000);
  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInMonth = 30 * secondsInDay;
  const secondsInYear = 12 * secondsInMonth;

  if (diffInSeconds < secondsInMinute) {
    return "Baru saja";
  }
  if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} Menit`;
  }
  if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return hours === 1 ? "1 Jam" : `${hours} Jam`;
  }
  if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return days === 1 ? "1 Hari" : `${days} Hari`;
  }
  if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return months === 1 ? "1 Bulan" : `${months} Bulan`;
  }
  const years = Math.floor(diffInSeconds / secondsInYear);
  return years === 1 ? "1 Tahun" : `${years} Tahun`;
}

export default { timeAgo };
