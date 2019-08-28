import React from 'react';
import { firebase } from '../firebase';

function Checkbox({ id }) {
  function archiveTask() {
    firebase
      .fireStore()
      .collection('tasks')
      .doc(id)
      .update({ archived: true });
  }

  return (
    <div
      className='checkbox-holder'
      data-testid='checkbox-action'
      onClick={() => archiveTask()}
    >
      <span className='checkbox' />
    </div>
  );
}

export { Checkbox };
