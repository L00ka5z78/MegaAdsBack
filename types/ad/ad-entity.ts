export interface NewAdEntity extends Omit<AdEntity, 'id'> {  //bez omita blad ze id jest opcjonalne w NewAdEntity a wymagane w AdEntity
    id?: string;
}

export interface SimpleAdEntity {
    id: string;
    lat: number;    //koordynanty lattitude longitude
    lon: number;
}

export interface AdEntity extends SimpleAdEntity{
    name: string;
    description: string;
    price: number;
    url: string;
}