import { fetchCharacters, fetchCharactersGame } from "../api/data";


export async function getCharacters(){
    const response = await fetchCharactersGame();
    return await response;
}

