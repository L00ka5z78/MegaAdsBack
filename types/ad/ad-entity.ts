export interface NewAdEntity extends Omit<AddEntity, 'id'> {  //bez omita blad ze id jest opcjonalne w NewAdEntity a wymagane w AdEntity
    id?: string;
}

export interface AddEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
    lat: number;    //koordynanty lattitude longitude
    lon: number;
}