import { headers } from 'next/headers';

/**
 * Retrieves the value of a specified header from the current request.
 *
 * This function fetches the headers of the current request using the `headers` function
 * from 'next/headers'. It then attempts to retrieve the value of the header specified
 * by the `header` parameter. If the specified header is not found, an empty string is returned.
 *
 * @param header The name of the header whose value is to be retrieved.
 * @returns The value of the specified header if found; otherwise, an empty string.
 */
export function getHeader(header: string) {
  const headersList = headers();
  const pathname = headersList.get(header) || '';
  return pathname;
}
