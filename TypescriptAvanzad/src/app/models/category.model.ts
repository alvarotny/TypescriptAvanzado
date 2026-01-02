export enum AccesType{
    PRIVATE = 'private',
    PUBLIC = 'public'
}

export interface Category{
    id: number;
    name: string;
    image: string;
    access?: AccesType;
}