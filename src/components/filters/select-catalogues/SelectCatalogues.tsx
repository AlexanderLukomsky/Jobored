import { Catalogue, api } from 'services';
import { Flex, Select, Skeleton, Text } from '@mantine/core';
import { useState, useEffect, FC } from 'react';
import { searchQuery } from 'common/constants';
import { Nullable } from 'common/types';
import { ReactComponent as IconDown } from 'common/assets/icons/down.svg';
import { categoryContainerStyle, categoryTitleStyle } from '../styles';

type SelectCataloguesProps = {
  value: Nullable<number>;
  onChange: (value: Nullable<number>) => void;
};

export const SelectCatalogues: FC<SelectCataloguesProps> = ({ value, onChange }) => {
  const [catalogues, setCatalogues] = useState<Nullable<Catalogue[]>>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getCatalogues();

      setCatalogues(data);
    };

    fetchData();
  }, []);

  return (
    <Flex sx={categoryContainerStyle}>
      <Text sx={categoryTitleStyle} content="p">
        Отрасль
      </Text>

      {!catalogues && <Skeleton height={42} />}

      {catalogues && (
        <Select
          value={value ? `${value}` : null}
          sx={{ input: { fontSize: '14px', height: '42px' } }}
          rightSectionWidth="36px"
          styles={{ rightSection: { pointerEvents: 'none' } }}
          rightSection={<IconDown />}
          onChange={(value) => onChange(value ? +value : null)}
          placeholder="Выберете отрасль"
          name={searchQuery.catalogues}
          data={catalogues.map((catalogue) => ({
            value: `${catalogue.key}`,
            label: catalogue.title_rus,
          }))}
        />
      )}
    </Flex>
  );
};
