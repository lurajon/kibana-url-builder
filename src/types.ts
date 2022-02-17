export interface KibanaQueryRefreshInterval {
  pause: boolean;
  value: bigint; // In milliseconds
}

export interface KibanaQueryPeriod {
  from: string;
  to: string;
  mode: 'quick' | 'relative' | 'absolute';
}

export interface KibanaQueryFilter {
  type: 'exists' | 'query' | 'phrases' | 'range' | 'phrase';
  field: string;
  value?: string|boolean|number|string[]; // Required for query and phrases
  negate: boolean;
  alias?: string;
  disabled: boolean;
}

export interface KibanaQuerySort {
  field: string;
  direction: 'desc' | 'asc';
}

export interface KibanaDiscoverUrlBuildParameters {
  host: string;
  discoveryId?: string;
  refreshInterval?: KibanaQueryRefreshInterval;
  period?: KibanaQueryPeriod;
  columns?: string[];
  filters: KibanaQueryFilter[];
  index?: string;
  indexId?: string;
  interval?: string;
  query?: string;
  sort?: KibanaQuerySort;
}
