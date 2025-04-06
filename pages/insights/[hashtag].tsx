// /pages/insights/[hashtag].tsx
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { HashtagTrendCard } from '../../components/HashtagTrendCard';
import { useHashtagTrend } from '../../hooks/useHashtagTrend';

const queryClient = new QueryClient();

interface InsightsPageProps {
  toggleTheme: () => void;
}

const InsightsPage = ({ toggleTheme }: InsightsPageProps) => {
  const router = useRouter();
  const { hashtag } = router.query;

  const hashtagStr = typeof hashtag === "string" ? hashtag : "";
  const { data, isLoading, isError, refetch } = useHashtagTrend(hashtagStr);

  if (!router.isReady || !hashtag) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h4">Insights</Typography>
        <Button onClick={toggleTheme}>Toggle Theme</Button>{" "}
        {/* Temporary, replace with ThemeToggle if desired */}
      </Box>
      {isError ? (
        <Box textAlign="center">
          <Typography color="error">Failed to load data</Typography>
          <Button variant="contained" onClick={() => refetch()} sx={{ mt: 2 }}>
            Retry
          </Button>
        </Box>
      ) : (
        <HashtagTrendCard
          hashtag={data?.hashtag || `#${hashtagStr}`}
          range={data?.range || "Loading..."}
          trend={data?.trend || []}
          isLoading={isLoading}
        />
      )}
    </Container>
  );
};

export default function InsightsPageWrapper({
  toggleTheme,
}: InsightsPageProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <InsightsPage toggleTheme={toggleTheme} />
    </QueryClientProvider>
  );
}
