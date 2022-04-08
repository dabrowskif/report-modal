import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home tests', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should render home page', async () => {
    // arrange
    const welcomeText = screen.getByText(/welcome!/i);
    const showMovableModalButton = screen.getByText(/show movable modal/i);

    // act

    // assert
    expect(welcomeText).toBeInTheDocument();
    expect(showMovableModalButton).toBeInTheDocument();
  });

  it('should show report modal on button click', async () => {
    // arrange
    const showMovableModalButton = screen.getByText(/show movable modal/i);

    // act
    fireEvent.click(showMovableModalButton);
    const reportModalTitle = screen.getByText(/export report/i);

    // assert
    expect(reportModalTitle).toBeInTheDocument();
  });

  it('should not show report modal before button click', async () => {
    // arrange
    const reportModalTitle = screen.queryByText(/export report/i);

    // act

    // assert
    expect(reportModalTitle).not.toBeInTheDocument();
  });

  it('should close modal after clicking the home button while modal is active', async () => {
    // arrange
    const showMovableModalButton = screen.getByText(/show movable modal/i);

    // act
    fireEvent.click(showMovableModalButton);
    fireEvent.click(showMovableModalButton);
    const reportModalTitle = screen.queryByText(/export report/i);

    // assert
    expect(reportModalTitle).not.toBeInTheDocument();
  });

  it('should close modal after clicking the modal cancel button while modal is active', async () => {
    // arrange
    const showMovableModalButton = screen.getByText(/show movable modal/i);

    // act
    fireEvent.click(showMovableModalButton);
    const cancelButton = screen.getByText(/cancel/i);
    fireEvent.click(cancelButton);
    const reportModalTitle = screen.queryByText(/export report/i);

    // assert
    expect(reportModalTitle).not.toBeInTheDocument();
  });
});
