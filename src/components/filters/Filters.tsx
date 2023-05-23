import { Box, Button, Flex, NumberInput, Text, UnstyledButton } from '@mantine/core';
import { searchQuery } from 'common/constants';
import { FormEvent, FC } from 'react';
import { ReactComponent as Cross } from 'common/assets/icons/cross.svg';
import { Nullable } from 'common/types';
import {
  containerStyle,
  categoryTitleStyle,
  headStyle,
  mainTitleStyle,
  resetButtonStyle,
  categoryContainerStyle,
  submitButtonStyle,
  paymentStyle,
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
}) => (
  <Box bg="grayscale.0" sx={containerStyle}>
    <Flex sx={headStyle} justify="space-between">
      <Text sx={mainTitleStyle}>Фильтры</Text>
      <UnstyledButton sx={resetButtonStyle} onClick={onReset}>
        Сбросить все
        <Cross />
        {/* <img src={Cross} alt="reset form" /> */}
      </UnstyledButton>
    </Flex>

    <form id="search-form" role="search" onSubmit={onSubmit}>
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
        />
      </Flex>

      <Button type="submit" sx={submitButtonStyle}>
        Применить
      </Button>
    </form>
  </Box>
);
