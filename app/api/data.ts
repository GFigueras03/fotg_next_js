import Character from "./Character";
import World from "./World";



export async function fetchCharacters(): Promise<Character[]> {
    try {
        const response = await fetch('https://fallofthegods-data.onrender.com/characters/story/list',);
        const data = await response.json();
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        return data.map((character: any) => new Character(character.identifier, character.name, character.title, character.description, character.world, character.image, character.stats, character.ability));
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchCharactersGame(): Promise<Character[]> {
    try {
        const response = await fetch('https://fallofthegods-data.onrender.com/characters/game/list');
        const data = await response.json();
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        return data.map((character: any) => new Character(character.identifier, character.name, character.title, character.description, new World(character.world.identifier, character.world.name, character.world.description, character.world.image, null ), character.image, character.stats, character.ability));
    } catch (error) {
        console.error(error);
        return [];
    }
}
export async function fetchWorlds(): Promise<World[]> {
    try {
        const response = await fetch('https://fallofthegods-data.onrender.com/worlds/list');
        const data = await response.json();
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        return data.map((world: any) => new World(world.id, world.name, world.description, world.image, world.places));
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchCharacterByWorld(World: World): Promise<Character[]> {
    const characters = (await fetchCharacters()).filter((character) => character.world?.id === World.id);
    return characters;
}

export async function fetchCharacterById(name: string): Promise<Character> {
    try {
        const response = await fetch(`https://fallofthegods-data.onrender.com/characters/game/get?id=${name.toLowerCase()}`, {
            method: 'GET',
            mode: 'cors',
        },);
        const character = await response.json();
        console.log(character)
        return new Character(character.identifier, character.name, character.title, character.description, character.world, character.image, character.stats, character.ability);
    } catch (error) {
        console.error(error);
        return new Character(
            "",
            "",
            "",
            "",
            {
                id: "",
                name: "",
                description: "",
                image: "",
                places: []
            }, "", 
            { damage: 0, defense: 0, accuracy: 0, life: 0, ether: 0, movement: 0 }, { abilityName: "", abilityDesc: "" });
    }
}

