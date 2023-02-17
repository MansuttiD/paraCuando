import getConfig from 'next/config';
import useSMR from 'swr';
import instance from '../helpers/axios.helper';
import { fetcher } from '../helpers/fetcher';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

function useMyUserInfo() {
  const { data, error, isLoading, mutate } = useSMR(
    `/users/user-info`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function useMyPublications(id: string) {
  const { data, error, isLoading, mutate } = useSMR(
    `${BASE_URL}/users/${id}/publications`,
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function updateMyUser(
  data: {
    username: string;
    first_name: string;
    last_name: string;
    image_url: string;
    code_phone: number;
    phone: number;
  },
  id: string
) {
  return instance.put(`${BASE_URL}/users/${id}`, data);
}

export { useMyUserInfo, useMyPublications, updateMyUser };
