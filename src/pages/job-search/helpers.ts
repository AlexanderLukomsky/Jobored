import { VacanciesRequestParams } from 'services';

export const getInitialValue = (loaderQueryParams: VacanciesRequestParams) => {
  const initialPaymentFrom =
    loaderQueryParams.payment_from !== undefined ? loaderQueryParams.payment_from : ('' as const);
  const initialPaymentTo = loaderQueryParams.payment_to
    ? loaderQueryParams.payment_to
    : ('' as const);
  const initialCatalogue = loaderQueryParams.catalogues || null;
  const initialPage = loaderQueryParams.page;
  const initialSearch = loaderQueryParams.keyword;

  return {
    initialPaymentFrom,
    initialPaymentTo,
    initialCatalogue,
    initialPage,
    initialSearch,
  };
};
