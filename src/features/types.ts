export interface Movie {
  id: number;
  title: string;
  productionCompany: string;
  releaseDate: string;
  boxOffice: number | undefined;
  budget: number | undefined;
  starring: string[] | string | null;
}
