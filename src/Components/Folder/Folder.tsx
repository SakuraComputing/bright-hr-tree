import React, {useState} from 'react';
import { IFiles } from '../../files';

interface FolderProps {
    folder: IFiles;
    depth: number;
}

const Folder: React.FC<FolderProps> = ({ folder, depth }): ReturnType<React.FC> => {

    const [ isExpanded, setIsExpanded ] = useState(true);

    return (
      <div>
        <div style={{ borderLeft: "1px solid black", margin: "5px 5px" }}>
          <button onClick={() => setIsExpanded(prev => !prev)} data-testid='folder-button'>
              {folder?.files && (
                  <div style={{ paddingLeft: "6px", paddingRight: "6px", width: "20px" }} >
                      {isExpanded ? "-" : "+"}
                  </div>
              )}
            <span className="name" style={{ paddingLeft: folder?.files ? "" : "20px" }} >{folder?.name}</span>
          </button>
          {isExpanded && (<div style={{ paddingLeft: `5px` }} >
            {folder.files?.map((file, i) => (
              <Folder key={i} folder={file} depth={depth + 1}/>
            ))}
          </div>)}
        </div>
      </div>
    )
}
export default Folder;