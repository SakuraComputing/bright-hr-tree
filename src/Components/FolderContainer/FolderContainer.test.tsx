import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FolderContainer from './FolderContainer';

describe('/FolderContainer', () => {
    it('should render root files correctly including date', () => {
        render(<FolderContainer />);
        expect(screen.getByText('Employee Handbook')).toBeInTheDocument();
        expect(screen.getByText('2017-01-06')).toBeInTheDocument();
    });

    it('should display a placeholder', () => {
        render(<FolderContainer />);        
        expect(screen.getByPlaceholderText('Filter by')).toBeInTheDocument();
    });

    it('should filter container contents', async () => {
        render(<FolderContainer />);
        expect(screen.getByText('Employee Handbook')).toBeInTheDocument();

        const inputBox = screen.getByTestId('filter-input');
        fireEvent.change(inputBox, { target: { value: 'Cost'}});

        
        expect(screen.getByText('Cost centres')).toBeInTheDocument();
    })
});