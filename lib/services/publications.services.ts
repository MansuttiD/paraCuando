import useSMR from 'swr';
import { fetcher } from '../helpers/fetcher';

function usePublication() {
  const { data, error, isLoading, mutate } = useSMR(
    'http://68.183.49.192:8001/api/v1/publications',
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
