export default class World{
    id: string;
    name: string;
    description: string;
    image: string;
    places: string[] | any;
    constructor(id: string, name: string, description: string, image: string, places: string[] | any){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.places = places;
    }
}