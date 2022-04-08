import React from 'react';

import useStyles from './styles';
import {
  ESchedule, EFormat,
} from './reportForm';

function CustomRadioButton(props: {
  value: string,
  name: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}): JSX.Element {
  const classes = useStyles();

  const getLabel = (value: string): string => {
    switch (value) {
      case EFormat.Excel:
        return 'Excel';
      case EFormat.CSV:
        return 'CSV';
      case ESchedule.NoRepeat:
        return 'No Repeat';
      case ESchedule.SpecificDate:
        return 'Specific Date';
      case ESchedule.Daily:
        return 'Daily';
      case ESchedule.Weekly:
        return 'Weekly';
      default:
    }
    return '';
  };

  return (
    <label htmlFor={props.value}>
      {props.value === EFormat.Excel || props.value === ESchedule.NoRepeat
        ? (
          <input
            type="radio"
            name={props.name}
            value={props.value}
            id={props.value}
            onChange={props.handleChange}
            className={classes.radioInput}
            defaultChecked
          />
        )
        : (
          <input
            type="radio"
            name={props.name}
            value={props.value}
            id={props.value}
            onChange={props.handleChange}
            className={classes.radioInput}
          />
        )}
      {getLabel(props.value)}
    </label>
  );
}

export default CustomRadioButton;
