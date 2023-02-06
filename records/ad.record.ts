import {AddEntity} from "../types";
import {ValidationError} from "../utils/error";

interface  NewAdEntity extends Omit<AddEntity, 'id'> {  //bez omita blad ze id jest opcjonalne w NewAdEntity a wymagane w AdEntity
    id?: string;
}

export class AdRecord implements AddEntity {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;

    constructor(obj: AddEntity) {
        if(!obj.name || obj.name.length > 100) {
            throw new ValidationError("Ads name can't be empty or includes more than 100 characters")
        }
        if(obj.description.length > 1000) {
            throw new ValidationError("Description can't be longerthan 1000 characters")
        }
        if(obj.price < 0 || obj.price > 9999999) {
            throw new ValidationError("Price range has to be between 0 - 9 999 999")
        }
        // @TODO check ifurl isvalid
        if(!obj.url || obj.url.length > 100) {
            throw new ValidationError("Link can't be empty or includes more than 100 characters")
        }
        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError("Failed to locate advertisement...")
        }
        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.url = obj.url;
        this.lat = obj.lat;
        this.lon = obj.lon;

    }
}