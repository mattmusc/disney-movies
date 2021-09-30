export interface Movie {
  id: number;
  title: string;
  country: string | null;
  language: string | null;
  runningTime: number | null;
  productionCompany: string[] | null;
  releaseDate: string;
  boxOffice: number | undefined;
  budget: number | undefined;
  starring: string[] | null;
  directedBy: string[] | null;
  musicBy: string | null;
  distributedBy: string | null;
}
