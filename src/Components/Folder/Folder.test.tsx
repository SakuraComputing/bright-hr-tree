import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Folder from './Folder';
import { IFiles } from '../../files';

describe('./Folder', () => {

    const root: IFiles = 
    { 
        type: 'folder',
        name: 'root',
        added: '2017-01-02',
        files: [
            {     
                "type": "pdf",     
                "name": "Employee Handbook",     
                "added": "2017-01-06"
            },        
        ]
    }    

    it('should render correctly', () => {
        render(<Folder folder={root} depth={1}/>);
        expect(screen.getByText('root')).toBeInTheDocument();
    });

    it('should show expanded files when button clicked', () => {
        render(<Folder folder={root} depth={1}/>);
        const folder = screen.getByTestId('folder-button');
        fireEvent.click(folder);

        expect(screen.getByText('Employee Handbook')).toBeInTheDocument();
    })
});