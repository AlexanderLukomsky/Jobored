import { useState } from 'react';
import { Flex } from '@mantine/core';
import { FavoritesStorageKey } from 'common/constants';
import { useLocalStorage } from 'common/helpers';
import { VacancyItem } from 'components/vacancy-item';
import { NotFound } from 'pages/404';
import { Vacancy } from 'services';
import { Nullable } from 'common/types';
import { Pagination } from 'components/pagination';

export const Favorites = () => {
  const [favoritesData, setFavoritesData] = useLocalStorage<Nullable<{ [key: string]: Vacancy }>>(
    null,
    FavoritesStorageKey,
  );

  const [page, setPage] = useState(1);

  if (favoritesData === null || !Object.keys(favoritesData).length) {
    return <NotFound />;
  }

  const favoritesKeys = Object.keys(favoritesData);

  const handleFavoriteClick = (vacancyId: number) => {
    const copyFavoritesData = { ...favoritesData };

    delete copyFavoritesData[vacancyId];

    if (favoritesKeys.length) {
      setFavoritesData(copyFavoritesData);
      return;
    }
    setFavoritesData(null);
  };

  const favorites = favoritesKeys.map((key) => (
    <VacancyItem
      selected
      key={key}
      vacancy={favoritesData[key]}
      onFavoriteClick={handleFavoriteClick}
    />
  ));

  const indexOfLastFavorite = page * 4;
  const indexOfFirstFavorite = indexOfLastFavorite - 4;
  const currentFavorites = favorites.slice(indexOfFirstFavorite, indexOfLastFavorite);

  return (
    <Flex direction="column" w="100%" sx={{ maxWidth: '773px', margin: '0 auto' }}>
      <Flex direction="column" gap="16px" sx={{ flexGrow: 1 }}>
        {currentFavorites}
      </Flex>

      {favoritesKeys.length > 4 && (
        <Pagination
          value={page}
          total={Math.ceil(favoritesKeys.length / 4)}
          defaultValue={1}
          onChange={setPage}
        />
      )}
    </Flex>
  );
};
