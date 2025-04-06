import {
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import {
  IconButton,
  useTheme,
} from '@mui/material';

interface ThemeToggleProps {
  toggleTheme: () => void;
}

export const ThemeToggle = ({ toggleTheme }: ThemeToggleProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {isDark ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
