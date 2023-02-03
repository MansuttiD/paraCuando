import axios from 'axios';
import getConfig from 'next/config';
import useSMR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { Publication } from '../interfaces/publication.interface';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

function usePublication() {
  const { data, error, isLoading, mutate } = useSMR(
    `${BASE_URL}/publications`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function publicationPost(data: Publication) {
  return axios.post(`${BASE_URL}/publications`, data);
}

function usePublicationId(id: string) {
  const { data, error, isLoading, mutate } = useSMR(
    `${BASE_URL}/publications${id}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function usePublicationIdVotes(id: string) {
  const { data, error, isLoading, mutate } = useSMR(
    `${BASE_URL}/publications${id}/votes`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function usePublicationDeleted(id: string) {
  return axios.delete(`${BASE_URL}/publications${id}`);
}

export {
  usePublication,
  publicationPost,
  usePublicationId,
  usePublicationIdVotes,
  usePublicationDeleted,
};