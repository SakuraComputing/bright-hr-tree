import { IFiles } from "../files";

export function filterTree(array: IFiles[], name: string): IFiles[] {
    return array.reduce((r: IFiles[], { files = [], ...o }: IFiles) => {
        if (o.name.toLowerCase().includes(name.toLowerCase())) {
            r.push(o);
            return r;
        }
        files = filterTree(files, name);
        if (files.length) {
            r.push(Object.assign(o, { files }));
        }
        return r;
    }, []);
}

function sortTreeByOption(node: IFiles, sortBy: keyof IFiles): IFiles {
    
    const sortFunction = (a: any, b: any) => a[sortBy].localeCompare(b[sortBy]);

    const sortedFiles = node.files ? [...node.files].sort(sortFunction) : [];

    return {
        ...node,
        files: sortedFiles.map(file => sortTreeByOption(file, sortBy))
    };
}

export function getSortedTree(root: IFiles, sortBy: keyof IFiles): IFiles {
    return sortTreeByOption(root, sortBy);
}

