export type Catalogue = {
  key: number;
  positions: Position[];
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
};

type Position = {
  id_parent: number;
  key: number;
  title: string;
  title_rus: string;
  url_rus: string;
};

export type Vacancy = {
  profession: string;
  firm_name: string;
  town: Town;
  type_of_work: TypeOfWork;
  payment_to: number;
  payment_from: number;
  currency: string;
  id: number;
  vacancyRichText: string;
};

type Town = { title: string };
type TypeOfWork = { title: string };

export type VacanciesResponse = {
  objects: Vacancy[];
  total: number;
};

export type VacanciesRequestParams = {
  page?: number;
  payment_from?: number;
  payment_to?: number;
  catalogues?: number;
  keyword?: string;
};

export type VacanciesData = {
  vacancies: Vacancy[];
  total: number;
};
