import { searchQuery } from 'common/constants';
import { convertQueryToNumber } from 'common/helpers';
import { defer } from 'react-router-dom';
import { VacanciesRequestParams, api } from 'services';

type ParamsType = { request: Request };

export const jobsLoader = async ({ request }: ParamsType) => {
  const { searchParams } = new URL(request.url);

  const entriesParams = searchParams.entries();

  const requestParams: VacanciesRequestParams = {};

  const schemeForNumberParams: string[] = [
    searchQuery.catalogues,
    searchQuery.payment_from,
    searchQuery.payment_to,
    searchQuery.page,
  ];

  for (const [key, value] of entriesParams) {
    if (schemeForNumberParams.includes(key)) {
      const convertedQuery = convertQueryToNumber(value);

      if (convertedQuery !== null) {
        requestParams[key as keyof Omit<VacanciesRequestParams, 'keyword'>] = convertedQuery;
      }
    }

    if (key === searchQuery.keyword) {
      requestParams[key] = value;
    }
  }

  return defer({
    data: api.getVacancies(requestParams),
    loaderQueryParams: requestParams,
  });
};
