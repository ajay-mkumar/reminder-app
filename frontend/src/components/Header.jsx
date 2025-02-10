import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/authAction";


const menuItems = [{
    menu: 'Home',
    link: '/home'
},
{
    menu: 'About US',
    link: '/about'
}];

const Header = () => {
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNav = (e) => {
        setAnchorElNav(e.currentTarget);
    }

    const handleCloseNav = (e) => {
        setAnchorElNav(null);
    }

    const handleLogout = () => {
        dispatch(logoutUser());
    }
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        href="#app-bar-with-responsive-menu"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: "flex" },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit'
                        }}>
                        Reminder App
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            aria-label="account of current user"
                            onClick={handleOpenNav}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNav}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item.menu} onClick={handleCloseNav}>
                                    <Typography component={Link}
                                        to={item.link}
                                        sx={{ color: "white", textDecoration: "none" }}
                                    >
                                        {item.menu}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        href="#app-bar-with-responsive-menu"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: "none" },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit'
                        }}>
                        Reminder App
                    </Typography>
                    <Box sx={{ display: { xs: "none", md: 'flex' } }}>
                        {menuItems.map((item) => (
                            <Button component={Link}
                                to={item.link}
                                sx={{
                                    my: 2,
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                            >
                                {item.menu}
                            </Button>
                        ))}
                        <Button sx={{
                            my: 2,
                            display: 'block',
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        >
                            Hi {user}
                        </Button>
                        <Button 
                        onClick={handleLogout}
                                sx={{
                                    my: 2,
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                            >
                            Logout
                            </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;