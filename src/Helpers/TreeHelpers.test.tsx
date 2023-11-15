
import React from 'react';
import { render } from '@testing-library/react';
import { IFiles } from '../files';
import { filterTree } from './TreeHelpers';

describe('filterTree', () => {
  const testData: IFiles[] = [
    {
      type: 'folder',
      name: 'Folder A',
      files: [
        {
          type: 'file',
          name: 'File 1',
          added: '2022-01-01',
        },
      ],
    },
    {
      type: 'file',
      name: 'File B',
      added: '2022-02-01',
    },
  ];

  it('should filter tree based on name', () => {
    const result = filterTree(testData, 'File');
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Folder A');
    expect(result[0].files).toHaveLength(1);
    expect(result[0].files![0].name).toBe('File 1');
    expect(result[1].name).toBe('File B');
  });
});