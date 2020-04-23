import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fabDefault: {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
  },
  fabCenter: {
    position: 'fixed',
    width: '100vw',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    [theme.breakpoints.up("sm")]: {
      backgroundColor: 'transparent',
      position: 'fixed',
      right: '10px',
      bottom: '10px',      
    },
    [theme.breakpoints.down("xs")]: {
      backgroundColor: 'transparent',
      position: 'fixed',
      transform: 'translate(43vw, 0)',
      bottom: '0',
      paddingBottom: '10px',
    },
  }
}));

export default function BottomPanel({ mode, onClick }) {
    const classes = useStyles();
    let classContainer = classes.fab;
    classContainer = (mode === 'DEFAULT')?classes.fabDefault:classContainer;
    classContainer = (mode === 'MOBILE')?classes.fabCenter:classContainer;
    return (
        <div className={classContainer}>
            <Fab onClick={onClick} color="secondary" aria-label="add">
            <AddIcon />
            </Fab>
        </div>
    )
}

BottomPanel.defaultProps = {
    mode: '',
}

BottomPanel.propTypes = {
    mode: PropTypes.string,
    onClick: PropTypes.func,
}