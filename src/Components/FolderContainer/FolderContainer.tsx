import React, { useState } from 'react';
import { IFiles, SortOption, root } from './../../files';
import Folder from './../../Components/Folder/Folder';
import { filterTree, getSortedTree } from '../../Helpers/TreeHelpers';

const FolderContainer: React.FC = () => {

    const [ tree, setTree ] = useState<IFiles>(root);
    const [sortOption, setSortOption] = useState<SortOption>('name');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {    

        const filterText = e.target.value;

        if (filterText && root.files) {
            const newTree: IFiles = { type: 'folder', name: 'root', files: filterTree(root.files?.filter((file => file.name.toLowerCase().includes((filterText).toLowerCase()))), filterText.toLowerCase())};
            setTree(newTree);
        } else {
            setTree(root);
        }
    };

    const handleSortChange = (sortBy: string) => {    
        setSortOption(sortBy as SortOption);
        setTree(getSortedTree(root, sortOption));
    }
    
    return <div>
        <input 
            onChange={handleChange} 
            placeholder='Filter by' 
            style={{ borderLeft: "2px solid black", margin: "20px 5px" }}
            data-testid = 'filter-input'
        />
         <div>
        <div style={{ marginBottom: "20px", marginLeft: '20px'}}>
            <label style={{ margin: '0 20px'}}>
                <input
                    type="radio"
                    value="name"
                    checked={sortOption === 'name'}
                    onChange={() => handleSortChange('name')}
                />
                Sort by Name
            </label>
            <label style={{ marginRight: '20px'}}>
                <input
                type="radio"
                value="added"
                checked={sortOption === 'added'}
                onChange={() => handleSortChange('added')}
                />
                Sort by Added
            </label>
            <label>
                <input
                type="radio"
                value="type"
                checked={sortOption === 'type'}
                onChange={() => handleSortChange('type')}
                />
                Sort by Type
            </label>
        </div>
    </div>
        <div style={{ padding: '10px' }}>
            {tree.files && tree.files.map((folder, i) => (
                <Folder key={i} folder={folder} depth={1}/>
            ))}
        </div>
    </div>
};
export default FolderContainer;