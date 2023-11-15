export type IFiles = {
    type: string;
    name: string;
    files?: IFiles[];
    added?: string;
  }

export type SortOption = 'name' | 'added' | 'type'; 

export const root: IFiles = {
    type: "folder",
    name: "root",
    added: "2017-01-01",
    files: [
        {     
            "type": "pdf",     
            "name": "Employee Handbook",     
            "added": "2017-01-06"
        },
        {     
            "type": "pdf",     
            "name": "Public Holiday policy",     
            "added": "2016-12-06"
        },
        {     
            "type": "folder",     
            "name": "Expenses",    
            "added": "2017-05-02", 
            "files": [
                {         
                    "type": "doc",         
                    "name": "Expenses claim form",
                    "added": "2017-05-02"
                },
                {         
                    "type": "doc",
                    "name": "Fuel allowances",
                    "added": "2017-05-03"
                }
            ]
        },
        {     
            "type": "csv",
            "name": "Cost centres",     
            "added": "2016-08-12"
        },
        {     
            "type": "folder",     
            "name": "Misc",     
            "added": "",
            "files": [
                {         
                    "type": "doc",         
                    "name": "Christmas party",         
                    "added": "2017-12-01"
                },
                {         
                    "type": "mov",         
                    "name": "Welcome to the company!",         
                    "added": "2015-04-24"
                }
            ]
        }
    ]
}
    
