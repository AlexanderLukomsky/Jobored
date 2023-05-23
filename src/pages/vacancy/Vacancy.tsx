import { Flex } from '@mantine/core';
import { FavoritesStorageKey } from 'common/constants';
import { useLocalStorage } from 'common/helpers';
import { Nullable } from 'common/types';
import { Loader } from 'components/loader';
import { VacancyItem } from 'components/vacancy-item';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Vacancy as VacancyType } from 'services';
import { api } from 'services/api';
import { containerStyle, vacancyDescriptionStyle } from './styles';

export const Vacancy = () => {
  const { id } = useParams();

  const [vacancy, setVacancy] = useState<Nullable<VacancyType>>(null);

  const [favoritesData, setFavoritesData] = useLocalStorage<
    Nullable<{ [key: string]: VacancyType }>
  >(null, FavoritesStorageKey);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await api.getVacancy(id);

        setVacancy(data);
      }
    };

    fetchData();
  }, []);

  const handleFavoriteClick = (vacancyId: number, vacancy: VacancyType) => {
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

  if (vacancy) {
    return (
      <Flex direction="column" sx={containerStyle}>
        <VacancyItem
          selected={!!favoritesData && !!favoritesData[vacancy.id]}
          variant="large"
          vacancy={vacancy}
          onFavoriteClick={handleFavoriteClick}
        />

        <Flex
          bg="grayscale.0"
          direction="column"
          sx={vacancyDescriptionStyle}
          dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
        />
      </Flex>
    );
  }

  return <Loader />;
};
