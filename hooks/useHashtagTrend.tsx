import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

export interface TrendPoint {
  date: string;
  sentiment: number;
}

interface TrendData {
  hashtag: string;
  range: string;
  trend: TrendPoint[];
}

export const useHashtagTrend = (hashtag: string) => {
  return useQuery<TrendData, Error>({
    queryKey: ["trend", hashtag], 
    queryFn: async () => {
      const { data } = await axios.get(`/api/trends/${hashtag}`);
      return data;
    },
    enabled: !!hashtag,
    retry: 2,
  });
};