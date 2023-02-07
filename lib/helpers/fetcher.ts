import instance from './axios.helper';

export const fetcher = (url: string) =>
  instance.get(url).then((res) => res.data);
