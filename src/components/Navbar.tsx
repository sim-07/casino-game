'use client';

import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';

import DialogComponent from './DialogComponent';
import LoginForm from './LoginForm';
import { useState } from 'react';

export default function Navbar() {
    const [openLogin, setOpenLogin] = useState(false);

    const openLoginDialog = () => {
        setOpenLogin(true);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#111" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Poker
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit">Game Rules</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit" onClick={openLoginDialog}>Login</Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            <DialogComponent open={openLogin} onClose={() => setOpenLogin(false)}>
                <LoginForm signinTypeP={"login"} />
            </DialogComponent>
        </>

    );
}