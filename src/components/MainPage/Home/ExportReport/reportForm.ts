export interface IReport {
  name: string,
  format: string,
  email: string,
  schedule: string,
  day: string,
  date: string,
  time: string,
}

export enum EFormat {
  Excel = 'Excel',
  CSV = 'CSV',
}

export enum ESchedule {
  NoRepeat = 'NoRepeat',
  SpecificDate = 'SpecificDate',
  Daily = 'Daily',
  Weekly = 'Weekly',
}

export enum EDays {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export const defaultReportState = {
  name: '',
  format: EFormat.Excel,
  email: '',
  schedule: ESchedule.NoRepeat,
  day: EDays.Monday,
  date: '',
  time: '',
};
