import Character from "./Character";
import World from "./World";

export async function fetchCharacters(): Promise<Character[]> {
    try{
        const response = await fetch('https://fallofthegods-data.onrender.com/characters/story/list');
        const data = await response.json();
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        return data.map((character: any) => new Character(character.identifier, character.name, character.description, character.world));
    }catch(error){
        console.error(error);
        return [];
    }
}

export async function fetchCharactersGame(): Promise<Character[]> {
    try{
        const response = await fetch('https://fallofthegods-data.onrender.com/characters/game/list');
        const data = await response.json();
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        return data.map((character: any) => new Character(character.identifier, character.name, character.description, character.world));
    }catch(error){
        console.error(error);
        return [];
    }
}
export async function fetchWorlds(): Promise<World[]>{
    try{
        const response = await fetch('https://fallofthegods-data.onrender.com/worlds/list');
        const data = await response.json();
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        return data.map((world: any) => new World(world.id, world.name, world.description));
    }catch(error){
        console.error(error);
        return [];
    }
}

export async function fetchCharacterByWorld(World:World): Promise<Character[]>{
    const characters = (await fetchCharacters()).filter((character) => character.world?.id === World.id);
    return characters;
}

export async function fetchCharacterById(name: string): Promise<Character>{
    try{
        const response = await fetch(`https://fallofthegods-data.onrender.com/characters/story/get?id=${name}`, {
            method: 'GET',
            mode: 'cors', // Agrega esta línea
    });
        const data = await response.json();
        return new Character(data.identifier, data.name, data.description, data.world);
    }catch(error){
        console.error(error);
        return new Character("", '', '', null);
    }
}

