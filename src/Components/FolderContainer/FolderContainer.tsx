import React, { useState } from 'react';
import { IFiles, root } from './../../files';
import Folder from './../../Components/Folder/Folder';

function filter(array: IFiles[], name: string): IFiles[] {
    return array.reduce((r: IFiles[], { files = [], ...o }: IFiles) => {
        if (o.name.toLowerCase().includes(name.toLowerCase())) {
            r.push(o);
            return r;
        }
        files = filter(files, name);
        if (files.length) {
            r.push(Object.assign(o, { files }));
        }
        return r;
    }, []);
}

const FolderContainer: React.FC = () => {

    const [ tree, setTree ] = useState<IFiles>(root);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {    

        const filterText = e.target.value;

        if (filterText && root.files) {
            const newTree: IFiles = { type: 'folder', name: 'root', files: filter(root.files?.filter((file => file.name.toLowerCase().includes((filterText).toLowerCase()))), filterText)};
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