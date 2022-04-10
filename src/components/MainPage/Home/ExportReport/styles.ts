import { makeStyles } from '@mui/styles';

const BASIC_BORDER = '1px solid rgba(0, 0, 0, 0.33)';
const INPUT_HEIGHT = '25px';

export default makeStyles(() => ({
  mainGrid: {
    width: '100%',
    fontSize: '14px',
    '& input[type="text"], input[type="date"], input[type="time"]': {
      height: INPUT_HEIGHT,
    },
  },
  rowTitle: {
    paddingTop: '5px',
    paddingBottom: '25px',
    textAlign: 'left',
  },
  rowContent: {
    display: 'flex',
  },
  textInput: {
    borderRadius: '0px',
    border: BASIC_BORDER,
    width: '90%',
    '&:focus': {
      outline: 'none', // fixes firefox default colors
    },
  },
  scheduleOptionInput: {
    borderRadius: '0px',
    marginLeft: '-25px',
    border: BASIC_BORDER,
    width: '120px',
    '&:focus': {
      outline: 'none', // fixes firefox default colors
    },
  },
  daysDropdownList: {
    borderRadius: '0px',
    backgroundColor: 'white',
    marginLeft: '-25px',
    width: '125px',
    height: '29px',
    border: BASIC_BORDER,
  },
  radioInput: {
    margin: '8px 5px 0px 20px',
    '&:focus': {
      backgroundColor: 'red',
    },
  },
  buttonRow: {
    display: 'flex',
    paddingTop: '10px',
  },
  button: {
    width: '80px',
    height: '30px',
    borderRadius: '0px',
    marginRight: '15px',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      transform: 'scale(0.85)',
      boxShadow: '3px 2px 5px 1px rgba(0,0,0,0.25)',
    },
  },
  buttonCancel: {
    border: '1px solid rgba(0, 0, 0, 0.55)',
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.75)',
    '&:hover': {
      backgroundColor: 'rgb(235, 235, 235)',
    },
  },
  buttonSubmit: {
    border: '1px solid black',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(50, 50, 50)',
    },
  },
}));
