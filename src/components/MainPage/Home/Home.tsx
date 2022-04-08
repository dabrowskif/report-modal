import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';

import useStyles from './styles';
import ReportModal from '../Modal/Modal';
import ExportReport from './ExportReport/ExportReport';

function Home(): JSX.Element {
  const classes = useStyles();
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);

  const changeModalVisibility = (): void => setIsReportModalVisible(!isReportModalVisible);

  return (
    <Grid container className={classes.mainGrid}>
      <Grid item xs={12} sx={{ marginBottom: '50px' }}>
        <Typography variant="h3">Welcome!</Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: '50px' }}>
        <button type="button" onClick={() => changeModalVisibility()}>Show movable modal</button>
      </Grid>
      {
        isReportModalVisible
          ? (
            <Grid item xs={12}>
              <ReportModal title="Export Report" innerComponent={<ExportReport closeModal={() => changeModalVisibility()} />} />
            </Grid>
          )
          : null
      }
    </Grid>
  );
}

export default Home;
