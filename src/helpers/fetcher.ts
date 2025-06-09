import { SERVER_URL } from '@/configs/site.config';

/**
 * This function used to call api with x-api-key header
 * @param {string} url is required
 * @param options
 */
const fetcher = async (
  url: string,
  options?: RequestInit
): Promise<any | null> => {
  // Check if running on server
  const isServer = typeof window === 'undefined';

  // Ensure SERVER_URL is defined
  const baseUrl = SERVER_URL || '';

  if (!url.startsWith('http')) {
    url = baseUrl + url;
  }

  const method = options?.method || 'GET';
  const path = url.startsWith(baseUrl) ? url.slice(baseUrl.length) : url;
  const timestamp = new Date().toISOString();

  // Safely parse body for logging
  let bodyForLog: any = undefined;
  if (options?.body) {
    try {
      if (typeof options.body === 'string') {
        bodyForLog = JSON.parse(options.body);
      } else if (
        options.body instanceof FormData ||
        options.body instanceof URLSearchParams
      ) {
        bodyForLog = '[FormData or URLSearchParams]';
      } else {
        bodyForLog = options.body;
      }
    } catch (e) {
      bodyForLog = '[Unparseable body]';
    }
  }

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
      ...options,
    });

    let data = null;
    try {
      const responseData = await response.json();
      if (responseData.status < 400) {
        data = responseData?.data || null;
      }
      if (responseData.errors) {
        if (Array.isArray(responseData.errors)) {
          data = {
            error: responseData.errors.join(', '),
          };
        } else {
          data = {
            error: responseData.errors,
          };
        }
      }

      // Log request info on server
      if (isServer) {
        console.info(
          `[${timestamp}] [${method}] [${path}] ${
            responseData.errors
              ? `[ERROR: ${JSON.stringify(responseData.errors)}]`
              : ''
          } ${bodyForLog ? `[BODY: ${JSON.stringify(bodyForLog)}]` : ''}`
        );
      }

      return data;
    } catch (e) {
      // Log parsing error on server
      if (isServer) {
        console.info(
          `[${timestamp}] [${method}] [${path}] [ERROR: Failed to parse response] ${
            bodyForLog ? `[BODY: ${JSON.stringify(bodyForLog)}]` : ''
          }`
        );
      }
      return null;
    }
  } catch (err) {
    // Log network error on server
    if (isServer) {
      console.info(
        `[${timestamp}] [${method}] [${path}] [ERROR: ${
          err instanceof Error ? err.message : JSON.stringify(err)
        }] ${bodyForLog ? `[BODY: ${JSON.stringify(bodyForLog)}]` : ''}`
      );
    }

    console.error('Error: ', err);
    return {
      status: 500,
      error: err,
    };
  }
};

export default fetcher;
