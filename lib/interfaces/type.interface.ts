export interface TypesResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  currentPage: number;
  results: PublicationType[];
}

export interface PublicationType {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
