import { Box, Button, TextField } from '@mui/material';

export default function LoginForm() {
  return (
    <Box sx={{ p: 4, width: 300, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Email" />
      <TextField label="Password" type="password" />
      <Button variant="contained">Login</Button>
    </Box>
  );
}
