import { Loader as MantineLoader } from '@mantine/core';
import { loaderStyle } from './styles';

export const Loader = () => <MantineLoader sx={loaderStyle} size={40} color="grayscale.5" />;
