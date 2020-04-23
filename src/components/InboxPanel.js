import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './InboxPanel.module.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TaskList from './TaskList';
import { setArchiveVisible } from '../redux/store.js';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export function InboxPanel({ isArchivedVisible, onArchivedVisible}) {
    const classes = useStyles();
    const buttonText = (isArchivedVisible)?'Hide Archived':'Show Archived';
    
    return (
        <div className={styles.page}>            
            <AppBar style={{ backgroundColor: '#1ea7fd'}} position="sticky">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Taskbox
                    </Typography>
                    <Button color="inherit" onClick={() => onArchivedVisible(!isArchivedVisible)}>{buttonText}</Button>
                </Toolbar>
            </AppBar>
            <TaskList isArchivedVisible={isArchivedVisible} />
        </div>
    )
}

InboxPanel.propTypes = {
    isArchivedVisible: PropTypes.bool,
    onArchivedVisible: PropTypes.func,
}

const mapStateToProps = (state) => {
    const { isArchivedVisible } = state.visible;
    return {
        isArchivedVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onArchivedVisible: (flag) => {
            dispatch(setArchiveVisible(flag));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxPanel);


