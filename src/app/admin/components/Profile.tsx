import React, {useEffect} from "react";
import Image from "next/image";
import {
    Box,
    Menu,
    Typography,
    Link,
    ListItemButton,
    List,
    ListItemText,
    Button,
    Divider,
} from "@mui/material";
import useAuth from "@/backend/store/Auth";

const ProfileDD = () => {
    const {logout, user} = useAuth();
    useEffect(() => {
    }, []);
    React.useEffect(() => {
    }, []);

    const [anchorEl4, setAnchorEl4] = React.useState(null);

    const handleClick4 = (event: any) => {
        setAnchorEl4(event.currentTarget);
        document.body.style.minHeight = "100vh";
    };

    const handleClose4 = () => {
        setAnchorEl4(null);
        document.body.style.minHeight = "auto";
    };


    return (
        <>
            <Button
                aria-label="menu"
                color="inherit"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleClick4}
            >
                <Box display="flex" alignItems="center">
                    <Image
                        src={`https://res.cloudinary.com/buyitnowagain/image/upload/v1718826210/mpm48iuyatqyhef8dadr.png`}
                        alt={`aryan`}
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
                        }}
                    >
                        <Typography
                            color="teal"
                            variant="h5"
                            fontWeight="400"
                            sx={{ml: 1}}
                        >
                            Hi,
                        </Typography>
                        <Typography
                            variant="h5"
                            fontWeight="700"
                            sx={{
                                ml: 1,
                            }}
                        >
                            {user?.name || "Guest"}
                        </Typography>
                        <i className="fas fa-chevron-down ml-1"/>
                    </Box>
                </Box>
            </Button>
            <Menu
                id="profile-menu"
                anchorEl={anchorEl4}
                keepMounted
                open={Boolean(anchorEl4)}
                onClose={handleClose4}
                sx={{
                    "& .MuiMenu-paper": {
                        width: "385px",
                        background: "#111827",
                        color: "#2dd4bf",
                    },
                }}
            >
                <Box>
                    <Box p={2} pt={0}>
                        <List
                            component="nav"
                            aria-label="secondary mailbox folder"
                            onClick={handleClose4}
                        >
                            <ListItemButton>
                                <ListItemText primary="Account"/>
                            </ListItemButton>
                            <ListItemButton href="/">
                                <ListItemText primary="Visit Site"/>
                            </ListItemButton>
                        </List>
                    </Box>
                    <Divider color={"2dd4bf"}/>
                    <Box p={2}>
                        <Link href="/admin/login">
                            <Button onClick={logout} fullWidth variant="contained"
                                    className={"bg-teal-400 hover:bg-teal-500"}>
                                Logout
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Menu>
        </>
    );
};


export default ProfileDD;