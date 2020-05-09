import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { NavLink } from 'react-router-dom'

export default function NavigationDrawer(props) {
    const [anchorEl, setanchorEl] = React.useState(null)

    const handleClick = (event) => {
        setanchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setanchorEl(null)
    }


    return (
        <div>
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>

                        <MenuIcon />
                        <Menu
                            id="menue"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}

                        >
                            <MenuItem>
                                <NavLink activeStyle={{ textDecorationLine: 'none' }} to="/" >
                                    Home
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink activeStyle={{ textDecorationLine: 'none' }} to="/viewMessages" >
                                    View Messages
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink activeStyle={{ textDecorationLine: 'none' }} to="/addMessage" >
                                    Add Message
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink activeStyle={{ textDecorationLine: 'none' }} to="/deleteMessageByID" >
                                    Delete Message By ID
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink activeStyle={{ textDecorationLine: 'none' }} to="/updateSubjectByID" >
                                    Update Subject By ID
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography variant="h6" align="center">
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
