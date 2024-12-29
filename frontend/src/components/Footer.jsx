import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        py: 5, 
        px: 2, 
        backgroundColor: '#252525',
        color: '#F0F0F0'
      }} 
      className="footer"
    >
      <footer>
        <Grid container spacing={2} alignItems="center">
          
          <Grid
            item 
            xs={12} 
            sm={4} 
            sx={{
              display: 'flex', 
              justifyContent: 'flex-start', 
              alignItems: 'center'
            }}
          >
            <Typography 
              variant="h6" 
              component="p" 
              sx={{ color: 'white' }}
            >
              © 2024 Casino
            </Typography>
          </Grid>
          
          <Grid
            item 
            xs={12} 
            sm={4} 
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box>
              <Typography variant="body1" gutterBottom>
                <Link to="/about" className="footer-link">About Us</Link>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Link to="/services" className="footer-link">Services</Link>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Link to="/contact" className="footer-link">Contact</Link>
              </Typography>
            </Box>
          </Grid>
        
          <Grid 
            item 
            xs={12} 
            sm={4} 
            sx={{
              display: 'flex', 
              justifyContent: 'flex-end', 
              alignItems: 'center'
            }}
          >
            <Typography variant="body1" component="p" >
              <a 
                href="mailto:info@example.com"  
                style={{ textDecoration: 'none', color: '#FFD700', fontSize: '30px' }} // Remove underline and set text color
              >
                porco@dio.com
              </a>
            </Typography>
          </Grid>
        </Grid>
      </footer>
     

    </Box>
  );
};

export default Footer;
