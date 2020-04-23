import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddDialog({ open, onClose }) {
    const [textTask, setTextTask] = useState('');
    
    const handleChange = (event) => {
        setTextTask(event.target.value)
    }

    const handleClose = () => {
        setTextTask('')
        onClose('')
    }
    const handleAdd = () => {
        if(textTask.length === 0) return;
        const text = textTask;
        setTextTask('')
        onClose(text)
    }

    return (
    <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please write the name of the task you want to add.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="taskName"
                    label="Task Name"
                    type="text"
                    fullWidth
                    value={textTask}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleAdd} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

AddDialog.defaultProps = {
    open: false,
}

AddDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
}