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
  const [reportForm, setReportForm] = useState<IReport>(defaultReportState);
  const [requestResponse, setRequestResponse] = useState<string>('');

  const changeBorderOfElement = (elementName: string, color: string): void => {
    (document.getElementById(elementName) as HTMLInputElement).style.borderColor = color;
  };

  const isInputCorrect = (form: IReport, inputName: keyof IReport): boolean => {
    if (form[inputName] === '') {
      changeBorderOfElement(inputName, 'red');
      return false;
    }
    changeBorderOfElement(inputName, 'rgba(0, 0, 0, 0.33)');
    return true;
  };

  const isFormCorrect = (form: IReport): boolean => {
    if (!isInputCorrect(form, 'name')) return false;
    if (!isInputCorrect(form, 'email')) return false;

    switch (reportForm.schedule) {
      case ESchedule.NoRepeat:
        return true;
      case ESchedule.SpecificDate:
        if (!isInputCorrect(reportForm, 'date')) return false;
        if (!isInputCorrect(reportForm, 'time')) return false;
        break;
      case ESchedule.Daily:
        if (!isInputCorrect(reportForm, 'day')) return false;
        break;
      case ESchedule.Weekly:
        if (!isInputCorrect(reportForm, 'day')) return false;
        if (!isInputCorrect(reportForm, 'time')) return false;
        break;
      default:
        return false;
    }

    return true;
  };

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setReportForm({ ...reportForm, [name]: value });
  };

  const setResponse = (text: string, color: string): void => {
    const requestResponseDiv = document.getElementById('requestResponse') as HTMLDivElement;
    setRequestResponse(text);
    requestResponseDiv.style.color = color;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (isFormCorrect(reportForm)) {
      setResponse('Pending...', 'orange');
      const { status } = await sendReport(reportForm);

      if (status === 200) {
        setResponse(`Request sent! Status: ${status}`, 'green');
      } else {
        setResponse('Something went wrong.', 'red');
      }
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
            reportForm={reportForm}
            setReportForm={setReportForm}
            handleChange={handleFormDataChange}
            scheduleType={reportForm.schedule}
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
