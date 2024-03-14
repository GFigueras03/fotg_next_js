export default class World{
    id: string;
    name: string;
    description: string;
    places: string[] | any;
    constructor(id: string, name: string, description: string){
        this.id = id;
        this.name = name;
        this.description = description;
    }
}