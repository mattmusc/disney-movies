import {StringDictionary} from 'core/types';


interface UseFrequencyProps<T> {
  data: T[];
  k: keyof T;
  limit: number | null;
}

type HistogramElem = { name: string, appearances: number };


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

  const buildNameFreqObj = ([name, appearances]: [string, number]) => ({name, appearances});
  const sortByFreqDesc = (a: HistogramElem, b: HistogramElem) => b.appearances - a.appearances;
  const filterLimit = (x: HistogramElem, idx: number) => limit ? idx <= limit : true;

  const hist = Object.entries(ds)
    .map(buildNameFreqObj)
    .sort(sortByFreqDesc)
    .filter(filterLimit);

  return {
    hist, ds,
  };
}
