import { useState, Dispatch, SetStateAction, useEffect } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export const useLocalStorage = <T>(initialValue: T, key: string): [T, SetValue<T>] => {
  const getLocalStorage = (): T => {
    const items = localStorage.getItem(key);

    if (items) {
      return JSON.parse(items);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
