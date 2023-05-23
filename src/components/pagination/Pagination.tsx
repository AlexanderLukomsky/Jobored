import { Pagination as MantinePagination, PaginationProps } from '@mantine/core';
import { FC } from 'react';

export const Pagination: FC<PaginationProps> = (props) => (
  <MantinePagination color="blue.5" sx={{ margin: '0 auto' }} {...props} />
);
