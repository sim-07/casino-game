import { Box, Button, TextField, Typography } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';

type LoginFormProps = {
    signinTypeP: string;
};

export default function LoginForm({ signinTypeP }: LoginFormProps) {
    const [signinType, setSigninType] = useState(signinTypeP);

    const formField = [
        { label: 'Email', type: 'email', formType: ["signup"] },
        { label: 'Username', type: 'text', formType: ["login", "signup"] },
        { label: 'Password', type: 'password', formType: ["login", "signup"] }
    ];


    return (
        <Box sx={{ p: 4, width: 300, display: 'flex', flexDirection: 'column', gap: 2 }}>


            <Typography sx={{ color: '#535353', position: 'relative', top: '-10px' }}>{signinType == "login" ? "LOGIN" : "SIGN UP"}</Typography>
            {formField.map((field, index) => {
                return field.formType.includes(signinType) && (
                    <TextField key={index} label={field.label} type={field.type} variant="filled" />
                );
            })}
            <Button variant="contained"
                sx={{
                    backgroundColor: '#c6a700',
                    color: 'black'
                }}
            >
                {signinType == "login" ? "LOGIN" : "SIGN UP"}
            </Button>
            {signinType == "login" ? (
                <Typography sx={{ color: '#535353', display: 'inline-flex', alignItems: 'center', gap: 1, mt: 2 }}>
                    Don't have account?
                    <Button variant="text" sx={{ padding: 0, minWidth: 'auto', textTransform: 'none' }} onClick={() => { setSigninType("signup") }}>
                        Sign up
                    </Button>
                </Typography>
            ) : (
                <Typography sx={{ color: '#535353', display: 'inline-flex', alignItems: 'center', gap: 1, mt: 2 }}>
                    Already registered?
                    <Button variant="text" sx={{ padding: 0, minWidth: 'auto', textTransform: 'none' }} onClick={() => { setSigninType("login") }}>
                        Sign up
                    </Button>
                </Typography>
            )}



        </Box>
    );
}
