import { useState, ChangeEvent, FC } from 'react';
import { Button, Flex, Input } from '@mantine/core';
import { buttonStyle, inputStyle } from './styles';

type SearchProps = {
  initialValue?: string;
  onSearch: (value: string) => void;
};

export const Search: FC<SearchProps> = ({ initialValue = '', onSearch }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;

    setValue(currentValue);
  };

  const handleButtonClick = () => {
    onSearch(value);
  };

  return (
    <Flex>
      <Input
        onChange={handleChange}
        value={value}
        height="48px"
        sx={inputStyle}
        rightSection={
          <Button onClick={handleButtonClick} sx={buttonStyle}>
            Поиск
          </Button>
        }
        rightSectionWidth="105px"
      />
    </Flex>
  );
};
