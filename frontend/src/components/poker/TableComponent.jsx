import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import PokerTable from '../../assets/images/poker/pokerTable.jsx';
import '../../assets/styles/PokerTableComponent.css';

const TableComponent = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '93vh',
        gap: 5,
        padding: '20px',
      }}
    >

      <PokerTable
        style={{
          width: "87%",
          height: "auto",
          maxWidth: '900px',
          marginBottom: '60px',
        }}
      />

    </Box>
  );
};

export default TableComponent;
