import getConfig from 'next/config';
import useSMR from 'swr';
import instance from '../helpers/axios.helper';
import { fetcher } from '../helpers/fetcher';
import { Publication } from '../interfaces/publication.interface';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

function usePublication() {
  const { data, error, isLoading, mutate } = useSMR(
    `/publications?size=20`,
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
  return instance.post(`/publications`, data);
}

function usePublicationId(id: string | string[] | undefined) {
  const { data, error, isLoading, mutate } = useSMR(
    `/publications/${id}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function publicationIdVotes(id: string | string[] | undefined | null) {
  return instance.post(`/publications/${id}/votes`);
}

function usePublicationDeleted(id: string) {
  return instance.delete(`/publications${id}`);
}

export {
  usePublication,
  publicationPost,
  usePublicationId,
  publicationIdVotes,
  usePublicationDeleted,
};
