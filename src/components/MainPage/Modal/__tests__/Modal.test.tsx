import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';

function MockComponent(): JSX.Element {
  return (
    <div>
      Mocked Component Text
    </div>
  );
}

describe('Modal tests', () => {
  it('should show proper title', async () => {
    // arrange
    render(<Modal title="Proper Title" innerComponent={<MockComponent />} />);
    const modalTitle = screen.getByText(/proper title/i);

    // act

    // assert
    expect(modalTitle).toBeInTheDocument();
  });

  it('should show proper inner component content', async () => {
    // arrange
    render(<Modal title="Proper Title" innerComponent={<MockComponent />} />);
    const innerComponentContent = screen.getByText(/mocked component text/i);

    // act

    // assert
    expect(innerComponentContent).toBeInTheDocument();
  });
});
