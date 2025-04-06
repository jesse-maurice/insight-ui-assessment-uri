// /pages/_app.tsx
import {
  useMemo,
  useState,
} from 'react';

import type { AppProps } from 'next/app';

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark" && {
            background: {
              default: "#121212",
              paper: "#1d1d1d",
            },
          }),
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalizes styles and applies background */}
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
