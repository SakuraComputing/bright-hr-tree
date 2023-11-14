import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

    it('should filter container contents', () => {
        render(<FolderContainer />);
        expect(screen.getByText('Employee Handbook')).toBeInTheDocument();

        const inputBox = screen.getByTestId('filter-input');
        fireEvent.change(inputBox, 'Cost');

        expect(screen.queryByText('Employee Handbook')).not.toBeInTheDocument();
        expect(screen.getByText('Cost Centre')).toBeInTheDocument();
    })
});