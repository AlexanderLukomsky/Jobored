import { useState, ChangeEvent, FC } from 'react';
import { Button, Flex, Image, Input } from '@mantine/core';
import SearchIcon from 'common/assets/icons/search.svg';
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
        icon={<Image width={16} src={SearchIcon} />}
        onChange={handleChange}
        value={value}
        height="48px"
        sx={inputStyle}
        rightSection={
          <Button onClick={handleButtonClick} sx={buttonStyle}>
            Поиск
          </Button>
        }
        placeholder="Введите название вакансии"
        rightSectionWidth="105px"
      />
    </Flex>
  );
};
