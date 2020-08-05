import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (<><AppBar position="static" id ="appbar">
                    <Toolbar>
                        <Typography id="title" variant="h6" component={Link} to='/' >
                            Good Little Helpers
                        </Typography>
                    </Toolbar>
                    <nav>
                    <Link to="/">
                    home
                    </Link>
                    <Link to="/login">
                    Login
                    </Link>
                    <Link to="/signup">
                    signup
                    </Link>
                    <Link to="/profile">
                    profile
                    </Link>
                    <Link to="/newtaskform">
                    New Task
                    </Link>
                    </nav>
                </AppBar>
                <div style={{ padding: '8px' }}>
                    {children}
                </div>
            </>)
}

export default Layout;
