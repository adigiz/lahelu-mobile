function timeAgo(timestamp: string): string {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const timeIntervals: { [key: string]: number } = {
    minute: 60,
    hour: 60 * 60,
    day: 24 * 60 * 60,
    month: 30 * 24 * 60 * 60,
    year: 12 * 30 * 24 * 60 * 60,
  };

  if (diffInSeconds < timeIntervals.minute) {
    return "Baru saja";
  }
  if (diffInSeconds < timeIntervals.hour) {
    const minutes = Math.floor(diffInSeconds / timeIntervals.minute);
    return `${minutes} Menit`;
  }
  if (diffInSeconds < timeIntervals.day) {
    const hours = Math.floor(diffInSeconds / timeIntervals.hour);
    return `${hours} Jam`;
  }
  if (diffInSeconds < timeIntervals.month) {
    const days = Math.floor(diffInSeconds / timeIntervals.day);
    return `${days} Hari`;
  }
  if (diffInSeconds < timeIntervals.year) {
    const months = Math.floor(diffInSeconds / timeIntervals.month);
    return `${months} Bulan`;
  }

  const years = Math.floor(diffInSeconds / timeIntervals.year);
  return `${years} Tahun`;
}

export default { timeAgo };
