// eslint-disable-next-line no-unused-vars
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay = 300
  // eslint-disable-next-line no-unused-vars
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
