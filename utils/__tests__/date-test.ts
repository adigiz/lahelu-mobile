import timeUtils from '../date';

describe('timeAgo', () => {
  it('should return "Baru saja" if less than a minute ago', () => {
    const timestamp = new Date(new Date().getTime() - 10 * 1000).toISOString();
    const expectedResult = "Baru saja";

    const result = timeUtils.timeAgo(timestamp);

    expect(result).toBe(expectedResult);
  });

  it('should return minutes if less than an hour ago', () => {
    const timestamp = new Date(new Date().getTime() - 10 * 60 * 1000).toISOString();
    const expectedResult = "10 Menit";

    const result = timeUtils.timeAgo(timestamp);

    expect(result).toBe(expectedResult);
  });

  it('should return hours if less than a day ago', () => {
    const timestamp = new Date(new Date().getTime() - 2 * 60 * 60 * 1000).toISOString();
    const expectedResult = "2 Jam";

    const result = timeUtils.timeAgo(timestamp);

    expect(result).toBe(expectedResult);
  });

  it('should return days if less than a month ago', () => {
    const timestamp = new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000).toISOString();
    const expectedResult = "3 Hari";

    const result = timeUtils.timeAgo(timestamp);

    expect(result).toBe(expectedResult);
  });

  it('should return months if less than a year ago', () => {
    const timestamp = new Date(new Date().getTime() - 2 * 30 * 24 * 60 * 60 * 1000).toISOString();
    const expectedResult = "2 Bulan";

    const result = timeUtils.timeAgo(timestamp);

    expect(result).toBe(expectedResult);
  });

  it('should return years if more than a year ago', () => {
    const timestamp = new Date(new Date().getTime() - 3 * 12 * 30 * 24 * 60 * 60 * 1000).toISOString();
    const expectedResult = "3 Tahun";

    const result = timeUtils.timeAgo(timestamp);

    expect(result).toBe(expectedResult);
  });
});
