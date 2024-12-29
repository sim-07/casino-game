import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';  
import { useNavigate } from 'react-router-dom';
import '../assets/styles/MiddlePage.css';
import RouletteImage from '../assets/images/roulette.jpg';

import PokerIcon from '../assets/images/PokerIcon';
import RouletteIcon from '../assets/images/RouletteIcon';
import BlackjackIcon from '../assets/images/BlackjackIcon'

const ItemIcon = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: 'none', 
  width: '80px',
  height: '100px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
  },
}));


const MiddlePage = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ py: 5 }} className="middlePageContainer" id="middleSection">
      <Typography variant="h3" gutterBottom>
        Welcome to the Ultimate Casino Experience!
      </Typography>
      <Typography variant="h6" gutterBottom style={{ maxWidth: '600px', marginTop: '40px', marginBottom: '50px' }}>
        Play your favorite games, try your luck, and <span style={{ color: '#FFD700' }}>enjoy the thrill of winning!</span>
      </Typography>
      <img src={RouletteImage} alt="Roulette" className="rouletteImage" />

      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mt: 5, position: 'relative', width: '170px', left: '65px' }}>
        
        <ItemIcon onClick={() => handleRedirect('/poker')}>
          <PokerIcon />
          <Typography variant="body1" sx={{ mt: 1 }}>Poker</Typography>
        </ItemIcon>

        <ItemIcon onClick={() => handleRedirect('/roulette')}>
          <RouletteIcon style={{  transform: 'scale(1.8)', marginLeft: '6px'}}/>
          <Typography variant="body1" sx={{ mt: 1 }}>Roulette</Typography>
        </ItemIcon>

        <ItemIcon onClick={() => handleRedirect('/blackjack')}> {/* Redirects to /blackjack */}
          <BlackjackIcon style={{ transform: 'scale(1.8)', marginLeft: '6px' }}/>
          <Typography variant="body1" sx={{ mt: 1 }}>Blackjack</Typography>
        </ItemIcon>


      </Stack>
    
    </Box>
  );
};

export default MiddlePage;
