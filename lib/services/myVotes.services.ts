import getConfig from 'next/config';
import useSMR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { useMyUserInfo } from './user.services';

function useMyVotes() {
  const { publicRuntimeConfig } = getConfig();
  const BASE_URL = publicRuntimeConfig.BASE_URL;
  const { data: user } = useMyUserInfo();
  const { data, error, isLoading, mutate } = useSMR(
    `${BASE_URL}/users/${user?.id}/votes`,
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

export { useMyVotes };
