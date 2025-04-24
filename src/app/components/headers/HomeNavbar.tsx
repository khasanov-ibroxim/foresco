import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Container,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack, useMediaQuery,
} from "@mui/material";
import {NavLink} from "react-router-dom";
import Basket from "./Basket";
import {CartItem} from "../../../lib/types/search";
import {useGlobals} from "../../hooks/useGlobals";
import {serverApi} from "../../../lib/config";
import {BoltOutlined, Logout} from "@mui/icons-material";
import Typography from "@mui/joy/Typography";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from "../images/logo.png"

interface HomeNavbarProps {
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void;
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    onDeleteAll: () => void;
    setSignupOpen: (isOpen: boolean) => void;
    setLoginOpen: (isOpen: boolean) => void;
    handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
    anchorEl: HTMLElement | null;
    handleCloseLogut: () => void;
    handleLogoutRequest: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
    const {
        cartItems,
        onAdd,
        onRemove,
        onDelete,
        onDeleteAll,
        setSignupOpen,
        setLoginOpen,
        handleLogoutClick,
        anchorEl,
        handleCloseLogut,
        handleLogoutRequest,
    } = props;
    const {authMember} = useGlobals();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const media1000 = useMediaQuery("(max-width: 1000px)");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    /** HANDLERS */

    return (
        <div className="home-navbar">
            <Container className="container">


                <Stack className="menu">
                    <Box>
                        <NavLink to="/">
                            <img
                                className="brand-logo"
                                alt="Logo"
                                src={logo}
                            />
                        </NavLink>
                    </Box>
                    <div className="nav_burger" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
                    </div>
                    <Stack className={`links ${isMenuOpen ? 'open' : ''}`}>
                        <Box className={"hover-line"}>
                            <NavLink to="/" activeClassName={"underline"}>
                                Home
                            </NavLink>
                        </Box>
                        <Box className={"hover-line"}>
                            <NavLink to="/about-us" activeClassName={"underline"}>
                                About Us
                            </NavLink>
                        </Box>
                        <Box className={"hover-line"}>
                            <NavLink to="/products" activeClassName={"underline"}>
                                Universities
                            </NavLink>
                        </Box>
                        {authMember ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/orders" activeClassName={"underline"}>
                                    Orders
                                </NavLink>
                            </Box>
                        ) : null}
                        {authMember ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/member-page" activeClassName={"underline"}>
                                    My Page
                                </NavLink>
                            </Box>
                        ) : null}
                        <Box className={"hover-line"}>
                            <NavLink to="/help" activeClassName={"underline"}>
                                Help
                            </NavLink>
                        </Box>
                        {/* BASKET */}
                        <Basket
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            onDelete={onDelete}
                            onDeleteAll={onDeleteAll}
                        />
                        {!authMember ? (
                            <Box className={"auth-wrapper"}>
                                <Button
                                    className="login-button"
                                    onClick={() => setLoginOpen(true)}
                                >
                                    <Typography className={"btn-txt"}>Sign in</Typography>
                                </Button>
                                <Box className={"signup"}>
                                    <Button
                                        variant={"contained"}
                                        className={"signup-button"}
                                        onClick={() => setSignupOpen(true)}
                                    >
                                        <Typography className={"btn-txt"}>Sign up</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        ) : (
                            <img
                                alt="Profile-picture"
                                className="user-avatar"
                                src={
                                    authMember?.memberImage
                                        ? `${serverApi}/${authMember?.memberImage}`
                                        : "/icons/default-user.svg"
                                }
                                aria-haspopup={"true"}
                                onClick={handleLogoutClick}
                            />
                        )}
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={Boolean(anchorEl)}
                            onClose={handleCloseLogut}
                            onClick={handleCloseLogut}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    "&:before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform: "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{horizontal: "right", vertical: "top"}}
                            anchorOrigin={{horizontal: "right", vertical: "bottom"}}
                        >
                            <MenuItem onClick={handleLogoutRequest}>
                                <ListItemIcon>
                                    <Logout fontSize="small" style={{color: "blue"}}/>
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Stack>



            </Container>
        </div>
    );
}
