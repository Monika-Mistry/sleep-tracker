/**
 * Formats a given date into a string representation.
 * The resulting string is in the format "YYYY-MM-DD".
 *
 * @param date - The date to be formatted.
 * @returns The formatted date string.
 */
export const formatDate = (date: Date): string => {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split("T")[0];
};
