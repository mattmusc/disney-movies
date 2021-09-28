import {StringDictionary} from 'core/types';


interface UseFrequencyProps<T> {
  data: T[];
  k: keyof T;
  limit: number;
}


export function useFrequency<T>({data, k, limit}: UseFrequencyProps<T>) {
  const ds = data
    .filter((m: T) => m[k])
    .reduce((d: StringDictionary<number>, m: T) => {
      let values: string[] = [];
      const value = m[k];

      if (value && Array.isArray(value)) {
        values = value;
      }

      if (value && typeof value === 'string') {
        values = [value];
      }

      for (let v of (values)) {

        if (d[v]) {
          d[v] = d[v] + 1;
        } else {
          d[v] = 1;
        }

      }

      return d;
    }, {});

  const hist = Object.entries(ds)
    .map(([actor, freq]) => ({name: actor, appearances: freq}))
    .sort((a, b) => b.appearances - a.appearances)
    .filter((_, idx) => idx <= limit);

  return {
    hist, ds,
  };
}
