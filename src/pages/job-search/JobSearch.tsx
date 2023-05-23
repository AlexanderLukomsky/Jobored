import { Suspense, useState, FormEvent } from 'react';
import { Filters } from 'components/filters';
import { VacanciesList } from 'components/vacancies-list';
import { Flex, Skeleton } from '@mantine/core';
import { Await, useLoaderData, useSearchParams } from 'react-router-dom';
import { Pagination } from 'components/pagination';
import { Search } from 'components/search';
import { VacanciesData, VacanciesRequestParams } from 'services';
import { searchQuery } from 'common/constants';
import { getInitialValue } from './helpers';

export const JobSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loaderQueryParams } = useLoaderData() as {
    data: Promise<VacanciesData>;
    loaderQueryParams: VacanciesRequestParams;
  };

  const { initialPaymentFrom, initialPaymentTo, initialCatalogue, page, initialSearch } =
    getInitialValue(loaderQueryParams);

  const [paymentFrom, setPaymentFrom] = useState(initialPaymentFrom);
  const [paymentTo, setPaymentTo] = useState(initialPaymentTo);
  const [catalogue, setCatalogue] = useState(initialCatalogue);

  const handleResetFilters = () => {
    searchParams.delete(searchQuery.payment_from);
    searchParams.delete(searchQuery.payment_to);
    searchParams.delete(searchQuery.catalogues);
    searchParams.delete(searchQuery.page);

    setSearchParams(searchParams);

    setPaymentFrom('');
    setPaymentTo('');
    setCatalogue(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (paymentFrom !== '' && paymentFrom > -1) {
      searchParams.set(searchQuery.payment_from, `${paymentFrom}`);
    }

    if (paymentTo) {
      searchParams.set(searchQuery.payment_to, `${paymentTo}`);
    }

    if (catalogue) {
      searchParams.set(searchQuery.catalogues, `${catalogue}`);
    }

    searchParams.delete(searchQuery.page);

    setSearchParams(searchParams);
  };

  const handleChangePage = (value: number) => {
    searchParams.set('page', `${value - 1}`);

    setSearchParams(searchParams);
  };

  const handleSearch = (value: string) => {
    searchParams.delete(searchQuery.page);

    if (value) {
      searchParams.set(searchQuery.keyword, value);

      setSearchParams(searchParams);

      return;
    }

    searchParams.delete(searchQuery.keyword);

    setSearchParams(searchParams);
  };

  return (
    <Flex
      gap="28px"
      w="100%"
      sx={{
        '@media (max-width: 920px)': {
          flexDirection: 'column' as const,
        },
      }}
    >
      <Filters
        paymentFrom={paymentFrom}
        paymentTo={paymentTo}
        catalogue={catalogue}
        onChangePaymentFrom={setPaymentFrom}
        onChangePaymentTo={setPaymentTo}
        onChangeCatalogue={setCatalogue}
        onReset={handleResetFilters}
        onSubmit={handleSubmit}
      />

      <Flex direction="column" w="100%">
        <Search onSearch={handleSearch} initialValue={initialSearch} />

        <VacanciesList />

        <Suspense fallback={<Skeleton height={32} w="100%" />}>
          <Await resolve={data}>
            {(data: VacanciesData) => (
              <Pagination
                total={Math.ceil(data.total / 4) > 125 ? 125 : Math.ceil(data.total / 4)}
                value={page ? page + 1 : 1}
                onChange={handleChangePage}
              />
            )}
          </Await>
        </Suspense>
      </Flex>
    </Flex>
  );
};
