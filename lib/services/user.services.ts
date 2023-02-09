import axios from 'axios';
import getConfig from 'next/config';
import useSMR from 'swr';
import { fetcher } from '../helpers/fetcher';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

function useMyUserInfo() {
  const { data, error, isLoading, mutate } = useSMR(
    `${BASE_URL}/users/user-info`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function useMyUser(id: any) {
  const { data, error, isLoading, mutate } = useSMR(
    `${BASE_URL}/users/${id}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function useMyVotes(id: string | null | undefined) {
  const { data, error, isLoading, mutate } = useSMR(
    `${BASE_URL}/users/${id}/votes`,
    fetcher
  );
  return {
    data,
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
    data,
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
  return axios.put(`${BASE_URL}/users/${id}`, data);
}

export {
  useMyUserInfo,
  useMyVotes,
  useMyPublications,
  updateMyUser,
  useMyUser,
};
