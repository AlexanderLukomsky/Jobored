import { ActionIcon, Flex, Text, Title } from '@mantine/core';
import { FC } from 'react';
import { Vacancy } from 'services';
import { ReactComponent as FavoriteIcon } from 'common/assets/icons/favorite.svg';
import { NavLink } from 'react-router-dom';
import { PagesPaths } from 'components/routes';
import {
  containerStyle,
  dotStyle,
  favoriteIconStyle,
  paymentContainerStyle,
  paymentStyle,
  textStyle,
  titleStyle,
  useStales,
} from './styles';

type VacancyItemProps = {
  vacancy: Vacancy;
  variant?: 'small' | 'large';
  selected?: boolean;
  onFavoriteClick: (vacancyId: number, vacancy: Vacancy) => void;
};

export const VacancyItem: FC<VacancyItemProps> = ({
  vacancy,
  variant = 'small',
  selected,
  onFavoriteClick,
}) => {
  const { classes } = useStales();

  const paymentValue = getPaymentValue(vacancy.payment_from, vacancy.payment_to, vacancy.currency);

  return (
    <Flex
      bg="grayscale.0"
      direction="column"
      sx={{ ...containerStyle.default, ...containerStyle[variant] }}
      data-elem={`vacancy-${vacancy.id}`}
    >
      <NavLink to={`${PagesPaths.vacancy.path}/${vacancy.id}`}>
        <Title sx={titleStyle[variant]} order={2}>
          {vacancy.profession}
        </Title>
      </NavLink>

      <Flex gap="12px" align="center" sx={paymentContainerStyle}>
        {paymentValue && (
          <>
            <Text sx={paymentStyle[variant]} component="p">
              {paymentValue}
            </Text>

            <Text sx={dotStyle} component="span">
              &#183;
            </Text>
          </>
        )}

        <Text sx={textStyle[variant]} component="p">
          {vacancy.type_of_work.title}
        </Text>
      </Flex>

      <Text sx={{ lineHeight: '22px' }}>{vacancy.town.title}</Text>

      <ActionIcon
        sx={favoriteIconStyle}
        onClick={() => {
          onFavoriteClick(vacancy.id, vacancy);
        }}
        data-elem={`vacancy-${vacancy.id}-shortlist-button`}
      >
        <FavoriteIcon className={selected ? classes.selected : ''} />
      </ActionIcon>
    </Flex>
  );
};

const getPaymentValue = (paymentFrom: number, paymentTo: number, currency: string) => {
  if (paymentFrom === 0 && paymentTo === 0) return null;

  if (paymentFrom > paymentTo) {
    return `з/п от ${paymentFrom} ${currency}`;
  }

  if (paymentFrom === paymentTo) {
    return `з/п ${paymentFrom} ${currency}`;
  }

  if (paymentFrom === 0 && paymentTo > 0) {
    return `з/п до ${paymentTo} ${currency}`;
  }

  return `з/п ${paymentFrom} - ${paymentTo} ${currency}`;
};
