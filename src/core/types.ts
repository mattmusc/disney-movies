export type Dictionary<T> = {[key: number]: T}

export type StringDictionary<T> = {[key: string]: T}

export type MovieNode = {
    id: number;
    name: string;
    value: number;
    children: MovieNode[];
};
