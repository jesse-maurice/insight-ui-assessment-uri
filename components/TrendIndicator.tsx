import React from 'react';

import {
  Box,
  Typography,
} from '@mui/material';

interface TrendIndicatorProps {
  current: number;
  previous: number;
}

export const TrendIndicator = React.memo(
  ({ current, previous }: TrendIndicatorProps) => {
    const direction = current > previous ? "📈" : "📉";
    const color = current > previous ? "success.main" : "error.main";

    return (
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="h6" color={color}>
          {direction}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {current > previous ? "Positive trend" : "Negative trend"}
        </Typography>
      </Box>
    );
  }
);

TrendIndicator.displayName = "TrendIndicator";
