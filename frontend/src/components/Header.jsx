import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import '../assets/styles/Header.css';

const Header = ({ scrollToSection }) => {
  const theme = useTheme();
  return (
    <>
      <Box className='headerContainer'>
        <div className='backgroundImage'></div>
        <Stack spacing={2} direction="row" className='navbar'>
          <Button variant="text" size="large">Home</Button>
          <Button variant="text" size="large">About Us</Button>
          <Button variant="text" size="large">Contact</Button>
        </Stack>

        <Typography
          variant='h1'
          className="headerTitle"
        >
          <Typography
            component="span"
            sx={{
              color: theme.palette.primary.main,
              display: 'inline',
              fontWeight: 'bold',
              fontSize: '92px',
            }}
          >
            99%{" "}
          </Typography>
          of gamblers quit <br /> before they{" "}
          <Typography
            component="span"
            sx={{
              color: theme.palette.primary.main,
              display: 'inline',
              fontWeight: 'bold',
              fontSize: '92px',
            }}
          >
            win big
          </Typography>
          <br />

          <Button
            variant="outlined"
            sx={{
              width: '160px',
              padding: '20px',
              fontSize: '17px',
            }}
            onClick={() => scrollToSection('middleSection')}
          >
            PLAY NOW
          </Button>
        </Typography>
      </Box>
    </>
  );
};

export default Header;
