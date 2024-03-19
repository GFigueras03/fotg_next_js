import World from "./World";
export default class Character {

    static getCharacters() {
        throw new Error("Method not implemented.");
    }

    id: string;
    name: string;
    title: string;
    description: string;

    world:World;
    image: string;
    stats: {
        damage: number,
        defense: number,
        accuracy: number,
        life: number,
        ether: number,
        movement: number
    }
    ability: {
        abilityName: string,
        abilityDesc: string
    }

    constructor(id: string, name: string, title:string, description:string, world:World,
         image:string, 
        
        stats: {
         damage: number,
         defense: number,
         accuracy: number,
         life: number,
         ether: number,
         movement: number
        },
        ability: {
            abilityName: string,
            abilityDesc: string
        }
        ) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.world = world;
        this.image = image;
        this.stats = stats;
        this.ability = ability;


    }
}