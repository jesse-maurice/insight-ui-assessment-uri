import React from 'react';

import {
  Alert,
  Button,
} from '@mui/material';

interface ErrorAlertProps {
  message: string;
  onRetry: () => void;
}

export const ErrorAlert = React.memo(
  ({ message, onRetry }: ErrorAlertProps) => {
    return (
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={onRetry}>
            Retry
          </Button>
        }
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
    );
  }
);

ErrorAlert.displayName = "ErrorAlert";
