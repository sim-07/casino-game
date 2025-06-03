import { Box, Button, Divider, Stack, Typography } from '@mui/material';

export default function HeroSection() {
    return (
        <Box
            sx={{
                minHeight: '93vh',
                backgroundImage: 'url(/images/chips_background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Stack direction="row" justifyContent="space-between">

                <Box
                    sx={{
                        width: '40%',
                        minWidth: '250px',
                        maxWidth: '450px',
                        height: '600px',
                        border: '3px solid #bd9f00',
                        marginTop: '120px',
                        position: 'relative',
                        marginLeft: '40px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-18px',
                            left: '30px',
                            backgroundColor: 'black',
                            borderRadius: '10px',
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#bd9f00',
                                fontWeight: 'bold',
                                userSelect: 'none',
                                padding: '0 10px',
                                backgroundColor: 'black'
                            }}
                        >
                            PLAY NOW
                        </Typography>
                    </Box>

                    <Stack direction="column" spacing={6}>
                        <Button
                            variant="outlined"
                            sx={{
                                width: '160px',
                                padding: '20px',
                                fontSize: '17px',
                                color: 'gold',
                                borderColor: 'gold',
                            }}
                        //onClick={() => scrollToSection('middleSection')}
                        >
                            JOIN GAME
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                width: '160px',
                                padding: '20px',
                                fontSize: '17px',
                                color: 'gold',
                                borderColor: 'gold',
                            }}
                        //onClick={() => scrollToSection('middleSection')}
                        >
                            HOST GAME
                        </Button>
                    </Stack>
                </Box>



                <Box
                    sx={{
                        width: '80%',
                        minWidth: '250px',
                        height: '600px',
                        marginTop: '120px',
                        marginLeft: '110px',
                        position: 'relative',
                        right: '80px',
                        borderRadius: '15px',
                        backgroundColor: '#0f0f0f',
                        padding: '40px'
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#bbb',
                            fontWeight: 'bold',
                            userSelect: 'none',
                            mb: '10px'
                        }}
                    >
                        PUBLIC HOSTS
                    </Typography>

                    <Divider sx={{ backgroundColor: '#3c3c3c' }} />

                    <Box
                        sx={{
                            width: '100%',
                            height: '440px',
                            marginTop: '30px',
                            borderRadius: '15px',
                            backgroundColor: '#131313',
                          }}
                    >

                    </Box>

                </Box>

            </Stack>
        </Box >

    );
}