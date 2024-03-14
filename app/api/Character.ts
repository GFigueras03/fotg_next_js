import World from "./World";
export default class Character {
    static getCharacters() {
        throw new Error("Method not implemented.");
    }
    id: string;
    name: string;
    description: string;
    world: World | null;

    constructor(id: string, name: string, description: string, world: World | null) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.world = world;
    }
}