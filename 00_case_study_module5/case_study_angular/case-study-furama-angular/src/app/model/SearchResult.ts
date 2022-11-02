export interface SearchResult<T> {
  content: T[];
  pagination: {
    page: number,
    size: number,
  };
  totalElements: number;
}
