import getConfig from 'next/config';
import useSMR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { TypesResponse } from '../interfaces/type.interface';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

function usePublicationsTypes() {
  const { data, error, isLoading, mutate } = useSMR<TypesResponse>(
    `${BASE_URL}/publications-types`,
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

export { usePublicationsTypes };
