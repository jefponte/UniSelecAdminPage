

export interface Results {
  data: EnemScore[];
  links: Links;
  meta: Meta;
}
export interface Result {
  data: EnemScore;
}

export interface EnemScore {
  id: number;
  application_id: number;
  enem: string;
  scores: string;
  original_scores: string;
  created_at: null | string;
  updated_at: null | string;
}

export interface Links {
  prev: string;
  last: string;
  next: string;
  first: string;
}

export interface Meta {
  to: number;
  from: number;
  path: string;
  total: number;
  per_page: number;
  last_page: number;
  current_page: number;
}

export interface EnemScoreParams {
  page?: number;
  perPage?: number;
  search?: string;
  isActive?: boolean;
}