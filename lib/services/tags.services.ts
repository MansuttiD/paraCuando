import axios from 'axios';
import getConfig from 'next/config';
import useSMR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { TagResponse } from '../interfaces/tags.interfaces';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

function useAllMyTags() {
  const { data, error, isLoading, mutate } = useSMR<TagResponse>(
    `${BASE_URL}/tags`,
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

function addTag(data: { name: string }) {
  return axios.post(`${BASE_URL}/tags`, data);
}

function updateMyTag(data: { name: string }, id: string) {
  return axios.put(`${BASE_URL}/tags/${id}`, data);
}

function deleteMyTag(id: string) {
  return axios.delete(`${BASE_URL}/${id}`);
}

export { useAllMyTags, addTag, updateMyTag, deleteMyTag };
