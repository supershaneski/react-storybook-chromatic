import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import InboxPanel from './components/InboxPanel';
import BottomPanel from './components/BottomPanel';
import AddDialog from './components/AddDialog';
import { onAddTask } from './redux/store.js';

function App({ onAddTask }) {
  
  const [openDialog, setOpenDialog] = useState(false)
  
  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE || 'React App';
  })

  const handleAdd = (taskName) => {
    setOpenDialog(false);
    if(taskName.length === 0) return;
    onAddTask(taskName)
  }

  return (
    <div className="container">
      <InboxPanel />
      <BottomPanel onClick={() => setOpenDialog(!openDialog)} />
      <AddDialog open={openDialog} onClose={handleAdd} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      tasks: state.task.tasks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onAddTask: (item) => {
          dispatch(onAddTask(item));
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);