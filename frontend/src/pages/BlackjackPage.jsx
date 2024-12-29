// App.js
import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Container, Paper } from '@mui/material';

const Blackjack = () => {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [message, setMessage] = useState('Welcome to Blackjack!');
  const [gameOver, setGameOver] = useState(false);

  const deck = [
    { value: 2, suit: '♠️' }, { value: 3, suit: '♠️' }, { value: 4, suit: '♠️' },
    { value: 5, suit: '♠️' }, { value: 6, suit: '♠️' }, { value: 7, suit: '♠️' },
    { value: 8, suit: '♠️' }, { value: 9, suit: '♠️' }, { value: 10, suit: '♠️' },
    { value: 'J', suit: '♠️' }, { value: 'Q', suit: '♠️' }, { value: 'K', suit: '♠️' },
    { value: 'A', suit: '♠️' },
    // Continua per ogni seme
  ];

  const getCardValue = (card) => {
    if (card.value === 'J' || card.value === 'Q' || card.value === 'K') return 10;
    if (card.value === 'A') return 11; 
    return card.value;
  };

  const calculateScore = (cards) => {
    let score = cards.reduce((sum, card) => sum + getCardValue(card), 0);
    const aces = cards.filter(card => card.value === 'A').length;
    while (score > 21 && aces > 0) score -= 10; // Aggiusta l'asso se il punteggio supera 21
    return score;
  };

  const drawCard = () => deck[Math.floor(Math.random() * deck.length)];

  const handleHit = () => {
    if (gameOver) return;
    const newCard = drawCard();
    const newPlayerCards = [...playerCards, newCard];
    const newScore = calculateScore(newPlayerCards);
    setPlayerCards(newPlayerCards);
    setPlayerScore(newScore);

    if (newScore > 21) {
      setMessage('You busted! Dealer wins.');
      setGameOver(true);
    }
  };

  const handleStand = () => {
    if (gameOver) return;
    let newDealerCards = [...dealerCards];
    let newDealerScore = dealerScore;

    while (newDealerScore < 17) {
      const newCard = drawCard();
      newDealerCards = [...newDealerCards, newCard];
      newDealerScore = calculateScore(newDealerCards);
    }

    setDealerCards(newDealerCards);
    setDealerScore(newDealerScore);
    setGameOver(true);

    if (newDealerScore > 21 || playerScore > newDealerScore) {
      setMessage('You win!');
    } else if (newDealerScore === playerScore) {
      setMessage('It\'s a tie!');
    } else {
      setMessage('Dealer wins.');
    }
  };

  const handleNewGame = () => {
    setPlayerCards([]);
    setDealerCards([]);
    setPlayerScore(0);
    setDealerScore(0);
    setMessage('New Game! Good Luck!');
    setGameOver(false);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>Blackjack</Typography>
        <Typography variant="h6" color="text.secondary">{message}</Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Your Cards</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {playerCards.map((card, index) => (
                <Box key={index} sx={{ border: '1px solid', p: 1 }}>
                  {card.value} {card.suit}
                </Box>
              ))}
            </Box>
            <Typography>Score: {playerScore}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Dealer's Cards</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {dealerCards.map((card, index) => (
                <Box key={index} sx={{ border: '1px solid', p: 1 }}>
                  {card.value} {card.suit}
                </Box>
              ))}
            </Box>
            <Typography>Score: {dealerScore}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleHit} disabled={gameOver}>Hit</Button>
          <Button variant="contained" color="secondary" onClick={handleStand} sx={{ ml: 2 }} disabled={gameOver}>Stand</Button>
          <Button variant="outlined" onClick={handleNewGame} sx={{ ml: 2 }}>New Game</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Blackjack;
