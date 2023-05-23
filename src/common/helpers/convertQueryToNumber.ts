import { Nullable } from 'common/types';

export const convertQueryToNumber = (query: Nullable<string>): Nullable<number> => {
  if (!query || Number.isNaN(+query)) {
    return null;
  }

  return +query;
};
