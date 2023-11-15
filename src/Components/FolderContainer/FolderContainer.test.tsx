import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FolderContainer from './FolderContainer';

describe('/FolderContainer', () => {
    it('should render root files correctly', () => {
        render(<FolderContainer />);
        expect(screen.getByText('Employee Handbook')).toBeInTheDocument();
    });

    it('should display a placeholder', () => {
        render(<FolderContainer />);        
        expect(screen.getByPlaceholderText('Filter by')).toBeInTheDocument();
    });

    // it('should filter container contents', async () => {
    //     render(<FolderContainer />);
    //     expect(screen.getByText('Employee Handbook')).toBeInTheDocument();

    //     console.error(document.body.innerHTML)

    //     const handleChange = jest.fn();

    //     const inputBox = screen.getByTestId('filter-input');
    //     fireEvent.change(inputBox, { target: { value: 'P'}});

    //     expect(handleChange).toHaveBeenCalled();

    // })
});