export interface Movie {
  id: number;
  title: string;
  productionCompany: string[] | null;
  releaseDate: string;
  boxOffice: number | undefined;
  budget: number | undefined;
  starring: string[] | string | null;
}
