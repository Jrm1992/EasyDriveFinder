export interface Filter {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}

export interface Option {
  title: string;
  value: string;
}

export interface CustomFilter {
  title: string;
  options: Option[];
}