import React, { useState } from 'react';
import { Divider, Grid } from '@mui/material';

import CustomRadioButton from './CustomRadioButton';
import {
  IReport, defaultReportState, ESchedule, EFormat,
} from './reportForm';
import ScheduleRow from './ScheduleRow';
import useStyles from './styles';
import { sendReport } from '../../../../api';

function ExportReport(props: { closeModal: () => void }): JSX.Element {
  const classes = useStyles();
  const [formData, setFormData] = useState<IReport>(defaultReportState);
  const [requestResponse, setRequestResponse] = useState<string>('');

  const changeBorderOfElement = (elementName: string, color: string): void => {
    (document.getElementById(elementName) as HTMLInputElement).style.borderColor = color;
  };

  const isFormCorrect = (reportForm: IReport): boolean => {
    // console.log(reportForm);
    const defaultBorderColor = 'rgba(0, 0, 0, 0.33)';

    if (reportForm.name === '') {
      changeBorderOfElement('name', 'red');
      return false;
    }
    changeBorderOfElement('name', defaultBorderColor);

    if (reportForm.email === '') {
      changeBorderOfElement('email', 'red');
      return false;
    }
    changeBorderOfElement('email', defaultBorderColor);

    switch (reportForm.schedule) {
      case ESchedule.NoRepeat:
        return true;
        break;
      case ESchedule.SpecificDate:
        if (reportForm.date === '') {
          changeBorderOfElement('specificDate', 'red');
          return false;
        }
        changeBorderOfElement('specificDate', defaultBorderColor);
        if (reportForm.time === '') {
          changeBorderOfElement('specificTime', 'red');
          return false;
        }
        changeBorderOfElement('specificTime', defaultBorderColor);
        break;
      case ESchedule.Daily:
        if (reportForm.day === '') {
          changeBorderOfElement('dailyDay', 'red');
          return false;
        }
        changeBorderOfElement('dailyDay', defaultBorderColor);
        break;
      case ESchedule.Weekly:
        if (reportForm.day === '') {
          changeBorderOfElement('weeklyDay', 'red');
          return false;
        }
        changeBorderOfElement('weeklyDay', defaultBorderColor);
        if (reportForm.time === '') {
          changeBorderOfElement('weeklyTime', 'red');
          return false;
        }
        changeBorderOfElement('weeklyTime', defaultBorderColor);
        break;
      default:
        return false;
    }

    return true;
  };

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const setResponse = (text: string, color: string): void => {
    const requestResponseDiv = document.getElementById('requestResponse') as HTMLDivElement;
    setRequestResponse(text);
    requestResponseDiv.style.color = color;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (isFormCorrect(formData)) {
      setResponse('Pending...', 'orange');
      const { status } = await sendReport(formData);
      setResponse(`Request sent! Status: ${status} `, 'green');
    } else {
      setResponse('Something went wrong.', 'red');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid container className={classes.mainGrid}>
        <Grid item xs={2} className={classes.rowTitle}>
          Report name
        </Grid>
        <Grid item xs={10}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Shareablee Report"
            onChange={handleFormDataChange}
            className={classes.textInput}
          />
        </Grid>
        <Grid item xs={2} className={classes.rowTitle}>
          Format
        </Grid>
        <Grid item xs={10} className={classes.rowContent}>
          {(Object.keys(EFormat)).map((key) => (
            <CustomRadioButton key={key} value={key} name="format" handleChange={handleFormDataChange} />
          ))}
        </Grid>
        <Grid item xs={2} className={classes.rowTitle}>
          E-mail to
        </Grid>
        <Grid item xs={10}>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="client@company.com"
            onChange={handleFormDataChange}
            className={classes.textInput}
          />
        </Grid>
        <Grid item xs={2} className={classes.rowTitle}>
          Schedule
        </Grid>
        <Grid item xs={10} className={classes.rowContent}>
          {(Object.keys(ESchedule)).map((key) => (
            <CustomRadioButton
              key={key}
              value={key}
              name="schedule"
              handleChange={handleFormDataChange}
            />
          ))}
        </Grid>
        <Grid container>
          <ScheduleRow
            formData={formData}
            setFormData={setFormData}
            handleChange={handleFormDataChange}
            scheduleType={formData.schedule}
          />
        </Grid>
        <Divider sx={{ border: '1px solid rgba(0, 0, 0, 0.55)', width: 'calc(100% + 18.5px)', marginLeft: '-10px' }} />
        <Grid item xs={12} className={classes.buttonRow}>
          <Grid container sx={{ justifyContent: 'center', textAlign: 'left', paddingTop: '5px' }}>
            <Grid item xs={6}>
              <div id="requestResponse">
                {requestResponse}
              </div>
            </Grid>
          </Grid>
          <button
            type="button"
            onClick={() => props.closeModal()}
            className={`${classes.button} ${classes.buttonCancel}`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${classes.button} ${classes.buttonSubmit}`}
          >
            Ok
          </button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ExportReport;
