import React from 'react';

import {
  configure,
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Modal from '../../../Modal/Modal';
import ExportReport from '../ExportReport';

const mockedCloseModal = jest.fn();

function ReportModal(): JSX.Element {
  return (
    <Modal
      title="Export Report"
      innerComponent={(
        <ExportReport closeModal={mockedCloseModal} />
      )}
    />
  );
}

describe('Export Report modal first render tests', () => {
  beforeEach(() => {
    render(<ReportModal />);
  });

  it('should render row titles properly', async () => {
    // arrange
    const name = screen.getByText(/report name/i);
    const format = screen.getByText(/format/i);
    const email = screen.getByText(/e-mail to/i);
    const schedule = screen.getByText(/schedule/i);

    // act

    // assert
    expect(name).toBeInTheDocument();
    expect(format).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(schedule).toBeInTheDocument();
  });

  it('should have default radio buttons checked', () => {
    // arrange
    const excelRadioButton = screen.getByLabelText(/excel/i);
    const csvRadioButton = screen.getByLabelText(/csv/i);

    const noRepeatRadioButton = screen.getByLabelText(/no repeat/i);
    const specificDateRadioButton = screen.getByLabelText(/specific date/i);
    const dailyRadioButton = screen.getByLabelText(/daily/i);
    const weeklyRadioButton = screen.getByLabelText(/weekly/i);

    // act

    // assert
    expect(excelRadioButton).toBeChecked();
    expect(noRepeatRadioButton).toBeChecked();

    expect(csvRadioButton).not.toBeChecked();
    expect(specificDateRadioButton).not.toBeChecked();
    expect(dailyRadioButton).not.toBeChecked();
    expect(weeklyRadioButton).not.toBeChecked();
  });

  it('should render inputs properly', async () => {
    // arrange
    const nameInput = screen.getByPlaceholderText(/shareablee report/i);
    const excelFormat = screen.getByLabelText(/excel/i);
    const emailInput = screen.getByPlaceholderText(/client@company.com/i);

    // act

    // assert
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(excelFormat).toBeInTheDocument();
  });

  it('should render cancel and ok buttons properly', async () => {
    // arrange
    const cancelButton = screen.getByText(/cancel/i);
    const okButton = screen.getByText(/ok/i);

    // act

    // assert
    expect(cancelButton).toBeInTheDocument();
    expect(okButton).toBeInTheDocument();
  });
});

describe('Export report modal basic functionalities tests', () => {
  beforeEach(() => {
    render(<ReportModal />);
  });

  it('should be able to type into inputs', async () => {
    // arrange
    const nameInput = screen.getByPlaceholderText(/shareablee report/i) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(/client@company.com/i) as HTMLInputElement;

    // act

    fireEvent.change(nameInput, { target: { value: 'Test report name' } });
    fireEvent.change(emailInput, { target: { value: 'Test report email' } });

    // assert
    expect(nameInput.value).toBe('Test report name');
    expect(emailInput.value).toBe('Test report email');
  });

  it('should be able to check format radio buttons', async () => {
    // arrange
    const excelRadioButton = screen.getByLabelText(/excel/i);
    const CSVRadioButton = screen.getByLabelText(/csv/i);

    // act
    fireEvent.click(CSVRadioButton);

    // assert
    expect(excelRadioButton).not.toBeChecked();
    expect(CSVRadioButton).toBeChecked();
  });

  it('should be able to check schedule radio buttons', async () => {
    // arrange
    const noRepeatRadioButton = screen.getByLabelText(/no repeat/i);
    const specificDateRadioButton = screen.getByLabelText(/specific date/i);

    // act
    fireEvent.click(specificDateRadioButton);

    // assert
    expect(noRepeatRadioButton).not.toBeChecked();
    expect(specificDateRadioButton).toBeChecked();
  });

  it('should be able to see date and time inputs for Specific Date schedule', async () => {
    // arrange
    const specificDateRadioButton = screen.getByLabelText(/specific date/i);

    // act
    fireEvent.click(specificDateRadioButton);
    const dateInput = screen.getByTestId('date');
    const tiemInput = screen.getByTestId('time');

    // assert
    expect(dateInput).toBeInTheDocument();
    expect(tiemInput).toBeInTheDocument();
  });

  it('should be able to type into inputs of Specific Date schedule', async () => {
    // arrange
    const specificDateRadioButton = screen.getByLabelText(/specific date/i);
    fireEvent.click(specificDateRadioButton);
    const dateInput = screen.getByTestId('date');
    const timeInput = screen.getByTestId('time');

    // act
    fireEvent.change(specificDateRadioButton, { target: { value: '12/12/2012' } });
    fireEvent.change(timeInput, { target: { value: '12:00' } });

    // assert
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
  });
});

describe('Export report modal advanced functioanities', () => {
  beforeEach(() => {
    render(<ReportModal />);
  });

  it('should show error borders when trying to send report with empty inputs', async () => {
    // arrange
    const nameInput = screen.getByPlaceholderText(/shareablee report/i) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(/client@company.com/i) as HTMLInputElement;
    const okButton = screen.getByText(/ok/i);

    // act
    fireEvent.change(emailInput, { target: { value: 'Test report email' } });
    fireEvent.click(okButton);

    // assert
    expect(nameInput).toHaveStyle('border-color: red');
    expect(emailInput).not.toHaveStyle('border-color: red');
  });

  it('should show error label when trying to send report with empty inputs', async () => {
    // arrange
    const okButton = screen.getByText(/ok/i);

    // act
    fireEvent.click(okButton);
    const errorLabel = screen.getByText(/Something went wrong./i);

    // assert
    expect(errorLabel).toBeInTheDocument();
  });

  it('should return status 200 on sending correct report', async () => {
    // arrange
    const nameInput = screen.getByPlaceholderText(/shareablee report/i) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(/client@company.com/i) as HTMLInputElement;
    const okButton = screen.getByText(/ok/i);

    // act
    fireEvent.change(nameInput, { target: { value: 'Test report name' } });
    fireEvent.change(emailInput, { target: { value: 'Test report email' } });

    fireEvent.click(okButton);

    // assert
    const successLabel = await screen.findByText(/Request sent!/i);
    expect(successLabel).toBeInTheDocument();
  });
});
