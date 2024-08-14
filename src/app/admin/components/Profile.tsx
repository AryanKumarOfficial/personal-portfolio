import React, {useState} from "react";
import Image from "next/image";
import {
    Box,
    Menu,
    Typography,
    Link as MUILink,
    ListItemButton,
    List,
    ListItemText,
    Button,
    Divider,
} from "@mui/material";
import useAuth from "@/backend/store/Auth";
import Icon from "@/app/admin/components/Icon";

const ProfileDD = () => {
    const {logout, user} = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                aria-label="open profile menu"
                color="inherit"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
            >
                <Box display="flex" alignItems="center">
                    <Image
                        src="https://res.cloudinary.com/buyitnowagain/image/upload/v1718826210/mpm48iuyatqyhef8dadr.png"
                        alt="User Avatar"
                        width="30"
                        height="30"
                        className="roundedCircle"
                    />
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex",
                            },
                            alignItems: "center",
                            ml: 1,
                        }}
                    >
                        <Typography color="teal" variant="h6">
                            Hi,
                        </Typography>
                        <Typography variant="h6" fontWeight="bold" sx={{ml: 1}}>
                            {user?.name || "Guest"}
                        </Typography>
                        <Icon className="fas fa-chevron-down ml-1"/>
                    </Box>
                </Box>
            </Button>
            <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                    "& .MuiMenu-paper": {
                        width: "320px",
                        background: "#111827",
                        color: "#2dd4bf",
                    },
                }}
            >
                <Box>
                    <Box p={2} pt={0}>
                        <List component="nav" onClick={handleMenuClose}>
                            <ListItemButton>
                                <ListItemText primary="Account"/>
                            </ListItemButton>
                            <ListItemButton component={MUILink} href="/" underline="none">
                                <ListItemText primary="Visit Site"/>
                            </ListItemButton>
                        </List>
                    </Box>
                    <Divider sx={{borderColor: "#2dd4bf"}}/>
                    <Box p={2}>
                        <Button
                            onClick={logout}
                            fullWidth
                            variant="contained"
                            className="bg-teal-400 hover:bg-teal-500"
                            sx={{
                                backgroundColor: "#2dd4bf",
                                "&:hover": {
                                    backgroundColor: "#14b8a6",
                                },
                            }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Menu>
        </>
    );
};

export default ProfileDD;
