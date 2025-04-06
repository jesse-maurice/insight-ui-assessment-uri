import {
  memo,
  useMemo,
} from 'react';

// /components/SentimentChart.tsx
import { LineChart } from '@mui/x-charts/LineChart';

import { TrendPoint } from '../hooks/useHashtagTrend';

interface SentimentChartProps {
  trend: TrendPoint[];
}

export const SentimentChart = memo(({ trend }: SentimentChartProps) => {
  const dates = trend.map((point) => new Date(point.date));
  const sentiments = trend.map((point) => point.sentiment);

  // Calculate min and max sentiment values with their indices
  const { min, max } = useMemo(() => {
    const values = sentiments;
    const minIdx = values.indexOf(Math.min(...values));
    const maxIdx = values.indexOf(Math.max(...values));
    return {
      min: { value: values[minIdx], date: dates[minIdx] },
      max: { value: values[maxIdx], date: dates[maxIdx] },
    };
  }, [sentiments, dates]);

  return (
    <LineChart
      xAxis={[{ data: dates, scaleType: "time", label: "Date" }]}
      series={[
        {
          data: sentiments,
          label: "Sentiment",
          color: "#1976d2",
        },
      ]}
      height={300}
      margin={{ top: 20, bottom: 40, left: 40, right: 20 }}
    >
      {/* Min marker */}
      <g>
        {/* <circle
          cx={dates.indexOf(min.date) * (600 / (dates.length - 1))} // Approximate x-position
          cy={300 - (min.value + 0.5) * (260 / 1)} // Scale y-position (assuming sentiment range -0.5 to 0.5)
          r={5}
          fill="red"
        /> */}
        <text
          x={dates.indexOf(min.date) * (600 / (dates.length - 1)) + 10}
          y={300 - (min.value + 0.5) * (260 / 1)}
          fill="red"
          fontSize={12}
        >
          Min: {min.value}
        </text>
      </g>
      {/* Max marker */}
      <g>
        <circle
          cx={dates.indexOf(max.date) * (600 / (dates.length - 1))}
          cy={300 - (max.value + 0.5) * (260 / 1)}
          r={5}
          fill="green"
        />
        <text
          x={dates.indexOf(max.date) * (600 / (dates.length - 1)) + 10}
          y={300 - (max.value + 0.5) * (260 / 1)}
          fill="green"
          fontSize={12}
        >
          Max: {max.value}
        </text>
      </g>
    </LineChart>
  );
});

SentimentChart.displayName = "SentimentChart";
