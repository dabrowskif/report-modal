import axios, { AxiosResponse } from 'axios';
import { IReport } from '../components/MainPage/Home/ExportReport/reportForm';

// const API = axios.create({ baseURL: 'https://postman-echo.com' });

export const sendReport = (formData: IReport): Promise<AxiosResponse> => axios.post('/post', formData);
