/**
 * This function used to call api with x-api-key header
 * @param {string} url is required
 */
export default async function fetcher(
  url: string,
  options?: RequestInit
): Promise<any | null> {
  if (!url.startsWith('http')) {
    url = process.env.HOST_URL + url;
  }
  return fetch(url, {
    next: { revalidate: 30 },
    ...options,
    headers: {
      ...options?.headers,
    },
  })
    .then(async (res) => {
      let data = null;
      try {
        const response = await res?.json();
        if (response.status < 400) {
          data = response?.data || null;
        } else {
          // Handle error
        }
        if (response.errors) {
          data = {
            errors: response.errors,
          };
        }
      } catch (e) {
        data = null;
      }
      return data;
    })
    .catch((err) => {
      console.error('Error: ', err);
      return {
        status: 500,
        error: err,
      };
    });
}
