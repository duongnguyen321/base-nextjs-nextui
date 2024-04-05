import moment from 'moment';
import Title from './Text';
import 'moment/locale/vi';
import 'moment/locale/en';
export type Locale = 'vi' | 'en';

/**
 * Returns a human-friendly representation of the time since the given date,
 * e.g., "3 hours ago" or "in 2 days".
 *
 * @param date - A date or a string that can be converted to a date.
 * @param locale - The locale to use for formatting the date. Defaults to 'vi'.
 * @returns A string representing the time since the given date.
 */
export const getDate = (date: string | number, locale: Locale = 'vi') => {
  moment.locale(locale);
  return moment(date).fromNow();
};

/**
 * A React component that displays a human-friendly representation of the time since the given date.
 */
export default function Date({
  date,
  locale = 'vi',
}: {
  date: string | number;
  locale: Locale;
}) {
  return <Title>{getDate(date, locale)}</Title>;
}
