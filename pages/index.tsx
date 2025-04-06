// /pages/index.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

import { ThemeToggle } from '../components/ThemeToggle';

interface HomeProps {
  toggleTheme: () => void;
}

export default function Home({ toggleTheme }: HomeProps) {
  const router = useRouter();
  const hashtags = ["uri", "react", "nextjs", "mui"];

  return (
    <>
      <Head>
        <title>Hashtag Sentiment Analyzer</title>
      </Head>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: 3,
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Hashtag Sentiment Analysis
          </Typography>
          <ThemeToggle toggleTheme={toggleTheme} />
        </Box>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Select a hashtag to view sentiment trends:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {hashtags.map((hashtag) => (
            <Button
              key={hashtag}
              variant="contained"
              size="large"
              onClick={() => router.push(`/insights/${hashtag}`)}
            >
              #{hashtag}
            </Button>
          ))}
        </Box>
      </Container>
    </>
  );
}
