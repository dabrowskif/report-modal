import React, { useEffect } from 'react';
import {
  Grid,
} from '@mui/material';

import { EDays, ESchedule, IReport } from './reportForm';
import useStyles from './styles';

function ScheduleRow(props: {
  reportForm: IReport,
  setReportForm: React.Dispatch<React.SetStateAction<IReport>>,
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
  scheduleType: string
}): JSX.Element {
  const classes = useStyles();
  const { schedule } = props.reportForm;

  const getLabel = (value: string): string => {
    switch (value) {
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

  const getScheduleOptions = (scheduleType: string): JSX.Element => {
    switch (scheduleType) {
      case ESchedule.NoRepeat:
        return <></>;
      case ESchedule.SpecificDate:
        return (
          <>
            <Grid item xs={4}>
              <input
                id="date"
                data-testid="date"
                type="date"
                name="date"
                onChange={props.handleChange}
                className={classes.scheduleOptionInput}
              />
            </Grid>
            <Grid item xs={1} sx={{ paddingRight: '23px', paddingTop: '5px' }}>
              at
            </Grid>
            <Grid item xs={4}>
              <input
                id="time"
                data-testid="time"
                type="time"
                name="time"
                onChange={props.handleChange}
                className={classes.scheduleOptionInput}
              />
            </Grid>
          </>
        );
      case ESchedule.Daily:
        return (
          <Grid item xs={4}>
            <select
              id="day"
              data-testid="day"
              name="day"
              onChange={props.handleChange}
              className={classes.daysDropdownList}
            >
              {(Object.keys(EDays)).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </Grid>
        );
      case ESchedule.Weekly:
        return (
          <>
            <Grid item xs={4}>
              <select
                id="day"
                data-testid="day"
                name="day"
                onChange={props.handleChange}
                className={classes.daysDropdownList}
              >
                {(Object.keys(EDays)).map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </Grid>
            <Grid item xs={1} sx={{ paddingRight: '23px', paddingTop: '5px' }}>
              at
            </Grid>
            <Grid item xs={4}>
              <input
                id="time"
                data-testid="time"
                type="time"
                name="time"
                onChange={props.handleChange}
                className={classes.scheduleOptionInput}
              />
            </Grid>
          </>
        );
      default:
        return <></>;
    }
    return <></>;
  };

  useEffect(() => {
    props.setReportForm({
      ...props.reportForm, day: 'Monday', time: '', date: '',
    });
  }, [schedule]);

  return (
    <>
      <Grid item xs={2} className={classes.rowTitle}>
        {getLabel(props.scheduleType)}
      </Grid>
      {getScheduleOptions(props.scheduleType)}
    </>
  );
}

export default ScheduleRow;
