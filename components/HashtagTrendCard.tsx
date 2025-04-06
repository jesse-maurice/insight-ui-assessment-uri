import { useMemo } from 'react';

// /components/HashtagTrendCard.tsx
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
} from '@mui/material';

import { TrendPoint } from '../hooks/useHashtagTrend';
import { SentimentChart } from './SentimentChart';

interface HashtagTrendCardProps {
  hashtag: string;
  range: string;
  trend: TrendPoint[];
  isLoading?: boolean;
}

export const HashtagTrendCard = ({
  hashtag,
  range,
  trend,
  isLoading,
}: HashtagTrendCardProps) => {
  const trendDirection = useMemo(() => {
    if (trend.length < 2) return null;
    const first = trend[0].sentiment;
    const last = trend[trend.length - 1].sentiment;
    return last > first ? "📈" : "📉";
  }, [trend]);

  if (isLoading) {
    return (
      <Card sx={{ maxWidth: 600, width: "100%", m: 2, }}>
        <CardContent>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="rectangular" height={300} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ maxWidth: 600, width: "100%", m: 2, borderRadius: 7 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{hashtag}</Typography>
          {trendDirection && (
            <Typography variant="h6" color="text.secondary">
              {trendDirection}
            </Typography>
          )}
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {range}
        </Typography>
        <SentimentChart trend={trend} />
      </CardContent>
    </Card>
  );
};
