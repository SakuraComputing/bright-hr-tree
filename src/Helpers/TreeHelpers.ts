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
