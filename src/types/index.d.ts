export interface ItemType {
    id?: number | string;
    name?: string;
    birth?: string;
    sex?: number;
    address?: string;
    users?: string;
    date?: string;
    [propName: string]: any;
}

export interface FetchType {
    () : Promsise
}

export interface DeleteType {
    (item: ItemType) : Promise
}

export interface AddType {
    (item: ItemType) : Promise
}

export interface EditType {
    (item: ItemType) : Promise
}