import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const DrawerMenu = ({ open, toggleDrawer, handleLogout }) => {
    const navigate = useNavigate();

    const DrawerList = (
        <Box sx={{ width: '250px' }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {[ 
                    { text: 'Profile', icon: <AccountBoxIcon />, path: '/profiloìe' },
                    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' }
                ].map(({ text, icon, path }) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => navigate(path)}>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Exit the game" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Drawer open={open} onClose={toggleDrawer(false)} >
            {DrawerList}
        </Drawer>
    );
};

export default DrawerMenu;
