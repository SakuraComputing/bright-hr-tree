import React, { useState } from 'react';
import { IFiles, root } from './../../files';
import Folder from './../../Components/Folder/Folder';
import { filterTree } from '../../Helpers/TreeHelpers';

const FolderContainer: React.FC = () => {

    const [ tree, setTree ] = useState<IFiles>(root);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {    

        const filterText = e.target.value;

        if (filterText && root.files) {
            const newTree: IFiles = { type: 'folder', name: 'root', files: filterTree(root.files?.filter((file => file.name.toLowerCase().includes((filterText).toLowerCase()))), filterText.toLowerCase())};
            setTree(newTree);
        } else {
            setTree(root);
        }
    };
    
    return <div>
        <input 
            onChange={handleChange} 
            placeholder='Filter by' 
            style={{ borderLeft: "2px solid black", margin: "5px 5px" }}
            data-testid = 'filter-input'
        />
        <div style={{ padding: '10px' }}>
            {tree.files && tree.files.map((folder, i) => (
                <Folder key={i} folder={folder} depth={1}/>
            ))}
        </div>
    </div>
};
export default FolderContainer;