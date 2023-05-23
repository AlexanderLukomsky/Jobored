import axios from 'axios';
import { authParams } from './constants';
import { Catalogue, VacanciesRequestParams, VacanciesResponse, Vacancy } from './types';

export const instance = axios.create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0',
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id':
      'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  },
});

export const api = {
  auth: async () => {
    const res = await instance.get('/oauth2/password/', {
      params: authParams,
    });

    instance.defaults.headers.common = {
      Authorization: `Bearer ${res.data.access_token}`,
    };
  },

  getVacancies: async (params?: VacanciesRequestParams) => {
    const res = await instance.get<VacanciesResponse>('/vacancies', {
      params: {
        count: 4,
        catalogues: params?.catalogues,
        page: params?.page,
        payment_from: params?.payment_from,
        payment_to: params?.payment_to,
        keyword: params?.keyword,
      },
    });

    return { total: res.data.total, vacancies: res.data.objects };
  },

  getCatalogues: async () => {
    const res = await instance.get<Catalogue[]>('/catalogues');
    return res.data;
  },

  getVacancy: async (id: string) => {
    const res = await instance.get<Vacancy>(
      `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/${id}`,
    );

    return res.data;
  },
};
