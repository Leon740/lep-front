import { useEffect, useState } from 'react';

export default function useDebounce(value, delayNum = 1000) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delayNum);

    return () => clearTimeout(timeoutId);
  }, [value, delayNum]);

  return debouncedValue;
}
