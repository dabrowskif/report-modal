import React from 'react';
import Draggable from 'react-draggable';

import useStyles from './styles';

function Modal(props: { title: string, innerComponent: JSX.Element }): JSX.Element {
  const classes = useStyles();

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Draggable handle="strong">
      <div className={classes.modalBody}>
        <strong className="cursor">
          <div className={classes.modalTitle}>
            <div>{props.title}</div>
          </div>
        </strong>
        <div className={classes.modalContent}>{props.innerComponent}</div>
      </div>
    </Draggable>
  );
}

export default Modal;
