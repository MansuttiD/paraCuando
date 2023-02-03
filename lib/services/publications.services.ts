import useSMR from 'swr';
import { fetcher } from '../helpers/fetcher';

function usePublication() {
  const { data, error, isLoading, mutate } = useSMR(
    'https://paracuando-team1.academlo.tech/api/v1/publications',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { usePublication };
