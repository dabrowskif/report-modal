import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  modalBody: {
    border: '1px solid rgba(0, 0, 0, 0.55)',
    width: '600px',
    backgroundColor: 'rgba(255, 255, 255)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  modalTitle: {
    cursor: 'move',
    backgroundColor: 'rgb(220,220,220)',
    padding: '5px 10px 8px 15px',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
  },
  modalContent: {
    padding: '10px',
  },
}));
