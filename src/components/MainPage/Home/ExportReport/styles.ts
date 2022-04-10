import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  mainGrid: {
    width: '100%',
    fontSize: '14px',
  },
  rowTitle: {
    paddingBottom: '25px',
    paddingTop: '5px',
    marginBottom: '22px',
    textAlign: 'left',
  },
  rowContent: {
    display: 'flex',
    fontSize: '12px',
  },
  textInput: {
    borderRadius: '0px',
    border: '1px solid rgba(0, 0, 0, 0.33)',
    height: '25px',
    width: '90%',
    '&:focus': {
      outline: 'none', // fixes firefox default colors
    },
  },
  scheduleRow: {
    marginLeft: '-51px',
  },
  scheduleOptionInput: {
    borderRadius: '0px',
    marginLeft: '-25px',
    border: '1px solid rgba(0, 0, 0, 0.33)',
    width: '120px',
    height: '25px',
    '&:focus': {
      outline: 'none', // fixes firefox default colors
    },
  },
  daysDropdownList: {
    borderRadius: '0px',
    backgroundColor: 'white',
    marginLeft: '-25px',
    width: '125px',
    height: '28px',
    border: '1px solid rgba(0, 0, 0, 0.33)',
  },
  radioInput: {
    marginLeft: '20px',
    marginTop: '8px',
    '&:focus': {
      backgroundColor: 'red',
    },
  },
  buttonRow: {
    display: 'flex',
    paddingTop: '10px',
    textAlign: 'right',
  },
  correctResponse: {
    color: 'green',
  },
  errorResponse: {
    color: 'red',
  },
  button: {
    width: '80px',
    height: '30px',
    borderRadius: '0px',
    marginRight: '15px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  buttonCancel: {
    border: '1px solid rgba(0, 0, 0, 0.55)',
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.75)',
    '&:hover': {
      backgroundColor: 'rgb(235, 235, 235)',
    },
    '&:active': {
      backgroundColor: 'rgb(235, 235, 235)',
      transform: 'scale(0.85)',
      boxShadow: '3px 2px 5px 1px rgba(0,0,0,0.25)',
    },
  },
  buttonSubmit: {
    border: '1px solid black',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(50, 50, 50)',
    },
    '&:active': {
      backgroundColor: 'rgb(70, 70, 70)',
      transform: 'scale(0.85)',
      boxShadow: '3px 2px 5px 1px rgba(0,0,0,0.25)',
    },
  },
}));
