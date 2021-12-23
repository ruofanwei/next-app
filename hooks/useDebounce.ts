import React, { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debounceValue, setSebounceValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
}

export default useDebounce;
