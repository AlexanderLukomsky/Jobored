import { Suspense } from 'react';
import { Flex, Skeleton } from '@mantine/core';
import { Await, useLoaderData } from 'react-router-dom';
import { VacanciesData, Vacancy } from 'services';
import { FavoritesStorageKey } from 'common/constants';
import { useLocalStorage } from 'common/helpers';
import { VacancyItem } from 'components/vacancy-item';
import { Nullable } from 'common/types';

const fakeArr = [1, 2, 3, 4];

export const VacanciesList = () => {
  const { data } = useLoaderData() as {
    data: Promise<VacanciesData>;
  };

  const [favoritesData, setFavoritesData] = useLocalStorage<Nullable<{ [key: string]: Vacancy }>>(
    null,
    FavoritesStorageKey,
  );

  const handleFavoriteClick = (vacancyId: number, vacancy: Vacancy) => {
    if (favoritesData) {
      if (favoritesData[vacancyId]) {
        const copyFavoritesData = { ...favoritesData };

        delete copyFavoritesData[vacancyId];

        setFavoritesData(copyFavoritesData);

        return;
      }

      setFavoritesData({ [vacancyId]: vacancy, ...favoritesData });

      return;
    }

    setFavoritesData({ [vacancyId]: vacancy });
  };

  return (
    <Flex direction="column" gap="16px" w="100%" sx={{ flexGrow: 1, marginBottom: '40px' }}>
      <Suspense
        fallback={fakeArr.map((element, index) => (
          <Skeleton key={index} height={140} w="100%" />
        ))}
      >
        <Await resolve={data}>
          {(data: VacanciesData) => (
            <>
              {data.vacancies.map((vacancy) => (
                <VacancyItem
                  onFavoriteClick={handleFavoriteClick}
                  key={vacancy.id}
                  vacancy={vacancy}
                  selected={!!favoritesData && !!favoritesData[vacancy.id]}
                />
              ))}
            </>
          )}
        </Await>
      </Suspense>
    </Flex>
  );
};
