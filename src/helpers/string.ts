import { HOST_URL } from '@/configs/site.config';
import { UrlParamQuery } from '@/types/URL.types';

/**
 * Function to remove Vietnamese accents from a string
 * @function
 * @param {string} str - The string from which to remove accents
 * @returns {string} - The string after removing accents
 */
export function removeAccents(str: string) {
  if (!str) {
    return '';
  }
  return str
    .normalize('NFD') // Normalize the string to Unicode Normalization Form D (NFD)
    .replace(/[\u0300-\u036f]/g, '') // Remove all combining diacritical marks
    .replace('đ', 'd') // Replace specific Vietnamese characters with their non-accented counterparts
    .replace('Đ', 'D'); // Replace specific Vietnamese characters with their non-accented counterparts
}

/**
 * Function to create a slug from a string
 * @function
 * @param {string} str - The string from which to create a slug
 * @returns {string} - The slug created from the input string
 */
export function slug(str: string, id?: string | number) {
  str = removeAccents(str);
  str = str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
  if (id) {
    str += `~${id}`;
  }
  return str;
}

/**
 * Clones an object or array.
 * @param {any} any - the value to clone
 * @returns {object} a clone of the input value
 */
export function cloneObj<T>(any: T): T {
  if (typeof any === 'object') {
    return JSON.parse(JSON.stringify(any));
  }
  return any;
}

/**
 * Parse JSON value to object.
 * @param {string} obj - the value to parse
 * @returns {object | null}  Object parsed or null
 */
export function parseObj(obj: string): object | null {
  let result: object | null = {};
  try {
    result = JSON.parse(obj);
  } catch {
    result = null;
  }
  return result;
}

/**
 * Constructs a URL string from a given path, optional parameters, query parameters, and a domain.
 * This function allows for the dynamic creation of URLs with path parameters and query strings.
 *
 * @param {string} path - The base path of the URL. This should not include the domain.
 * @param {UrlParamQuery} paramQuery - An object containing both `param` and `query` properties.
 *   - `param`: An optional array of path parameters to be appended to the URL.
 *   - `query`: An optional object representing query parameters, where keys are parameter names and values are parameter values.
 * @param {string} [domain=HOST_URL] - The domain to prepend to the path, defaults to HOST_URL if not provided.
 * @returns {string} - The constructed URL string including the domain, path, path parameters (if any), and query parameters (if any).
 */
export function urlBuilder(
  path: string,
  { param, query }: UrlParamQuery,
  domain = HOST_URL
) {
  const url = new URL(path, domain);
  if (param) {
    url.pathname += `/${param.join('/')}`;
  }
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  return url.toString();
}

/**
 * Converts a time string into seconds.
 * This function takes a string representing a time duration and converts it into the total number of seconds.
 * The input string must specify the number followed by a time unit (e.g., "10 minutes").
 * Supported time units are seconds, minutes, hours, days, months, and years.
 * Note: Months are approximated to 30 days and years to 365 days for conversion.
 *
 * @param {string} time - The time duration string to be converted. The string should include a number followed by a time unit.
 * @returns {number} The total number of seconds representing the input time duration.
 * @throws {Error} Throws an error if the input string format is invalid or if an unsupported time unit is provided.
 */
export function timer(time: string): number {
  // Trim whitespace and convert to lowercase for easier parsing
  const trimmedTime = removeAccents(time.trim().toLowerCase());

  // Regular expression to match the number and unit
  const timePattern = /^(\d+)\s*(giay?|phut?|gio?|ngay?|thang?|nam?)$/;
  const match = trimmedTime.match(timePattern);

  if (!match) {
    throw new Error('Ngày không hợp lệ');
  }

  const quantity = parseInt(match[1], 10);
  const unit = match[2];

  switch (unit) {
    case 'giay':
      return quantity;
    case 'phut':
      return quantity * 60;
    case 'gio':
      return quantity * 60 * 60;
    case 'ngay':
      return quantity * 60 * 60 * 24;
    case 'thang':
      return quantity * 60 * 60 * 24 * 30; // Approximation, considering a month as 30 days
    case 'nam':
      return quantity * 60 * 60 * 24 * 365; // Approximation, considering a year as 365 days
    default:
      throw new Error('Ngày không hợp lệ');
  }
}

/**
 * Formats a phone number by removing all non-numeric characters except the plus sign, and replaces the country code +84 with 0.
 * This function is specifically designed for Vietnamese phone numbers but can be adapted for other formats.
 *
 * @param {string} phone - The phone number to be formatted.
 * @returns {string} - The formatted phone number with non-numeric characters removed and the country code +84 replaced with 0.
 */
export function formatPhone(phone: string): string {
  let cleanPhone = phone.replace(/[^\d+]/g, '');
  cleanPhone = cleanPhone.replace(/^\+84/, '0');
  return cleanPhone;
}
