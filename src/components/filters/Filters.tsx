import { ActionIcon, Box, Button, Flex, NumberInput, Text, UnstyledButton } from '@mantine/core';
import { searchQuery } from 'common/constants';
import { FormEvent, FC, useRef } from 'react';
import { ReactComponent as Cross } from 'common/assets/icons/cross.svg';
import { Nullable } from 'common/types';
import { ReactComponent as FilterIcon } from 'common/assets/icons/filter.svg';
import {
  categoryTitleStyle,
  headStyle,
  mainTitleStyle,
  resetButtonStyle,
  categoryContainerStyle,
  submitButtonStyle,
  paymentStyle,
  actionIconStyle,
  filterContainerStyle,
  containerStyle,
} from './styles';
import { SelectCatalogues } from './select-catalogues';

type FiltersProps = {
  paymentFrom: number | '';
  paymentTo: number | '';
  catalogue: Nullable<number>;

  onChangePaymentFrom: (value: number | '') => void;
  onChangePaymentTo: (value: number | '') => void;
  onChangeCatalogue: (value: Nullable<number>) => void;

  onReset: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const Filters: FC<FiltersProps> = ({
  paymentFrom,
  paymentTo,
  catalogue,
  onChangePaymentFrom,
  onChangePaymentTo,
  onChangeCatalogue,
  onReset,
  onSubmit,
}) => {
  const ref = useRef<Nullable<HTMLDivElement>>(null);

  const handleOpenFilters = () => {
    if (ref && ref.current) {
      if (!ref.current.style.display) {
        ref.current.style.display = 'block';

        return;
      }

      if (ref.current.style.display === 'block') {
        ref.current.style.display = '';
      }
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit(event);

    if (ref.current?.style.display === 'block') {
      ref.current.style.display = '';
    }
  };

  return (
    <Box sx={containerStyle}>
      <ActionIcon onClick={handleOpenFilters} sx={actionIconStyle}>
        <FilterIcon />
      </ActionIcon>

      <Box ref={ref} bg="grayscale.0" sx={filterContainerStyle}>
        <Flex sx={headStyle} justify="space-between">
          <Text sx={mainTitleStyle}>Фильтры</Text>
          <UnstyledButton sx={resetButtonStyle} onClick={onReset}>
            Сбросить все
            <Cross />
          </UnstyledButton>
        </Flex>

        <form id="search-form" role="search" onSubmit={handleSubmit}>
          <SelectCatalogues value={catalogue} onChange={onChangeCatalogue} />

          <Flex sx={categoryContainerStyle}>
            <Text sx={categoryTitleStyle} content="p">
              Оклад
            </Text>

            <NumberInput
              value={paymentFrom}
              onChange={onChangePaymentFrom}
              aria-label="Search payment from"
              type="number"
              name={searchQuery.payment_from}
              placeholder="От"
              min={0}
              sx={paymentStyle}
              data-elem="salary-from-input"
            />

            <NumberInput
              value={paymentTo}
              onChange={onChangePaymentTo}
              type="number"
              aria-label="Search payment to"
              name={searchQuery.payment_to}
              placeholder="До"
              min={1}
              sx={paymentStyle}
              data-elem="salary-to-input"
            />
          </Flex>

          <Button type="submit" sx={submitButtonStyle} data-elem="search-button">
            Применить
          </Button>
        </form>
      </Box>
    </Box>
  );
};
