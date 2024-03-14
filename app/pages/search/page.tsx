'use client'
import Character from "@/app/api/Character";
import { fetchCharactersGame } from "@/app/api/data";
import { useEffect, useState } from "react";

export default function Page() {
    const [characterName, setCharacterName] = useState("");
    const [characters, setCharacters] = useState<Character[] | any>([]);

    useEffect(() => {
        async function fetchCharacters() {
            const cachedCharacters = localStorage.getItem('characters');
            if (cachedCharacters) {
                setCharacters(JSON.parse(cachedCharacters));
            } else {
                const characters = await fetchCharacters();
                localStorage.setItem('characters', JSON.stringify(characters));
                setCharacters(characters);
            }
        }
        fetchCharacters();
    }, [characters]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setCharacterName(name);
    }

    function filterCharacters() {
        if(characters){
            if (characterName === "") {
            return characters.map((character: any) => (
                <li key={character.name} className="character w-24 h-24 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
                rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white">{character.name}</li>
            ));
        } else {
            return characters
                .filter((character: any) => character.name.toLowerCase().startsWith(characterName.toLowerCase()))
                .map((filteredCharacter: any) => (
                    <li key={filteredCharacter.name} className="character w-24 h-24 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
                    rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white">{filteredCharacter.name}</li>
                ));
        }
        }
    }

    return (
        <div className="w-11/12 h-3/4 flex flex-col items-center justify-center self-center overflow-x-hidden gap-16">
            <input onChange={handleChange} placeholder="Introduce un personaje" />
            <ul className="character-list w-full h-96 flex flex-row flex-wrap items-center justify-center gap-2 overflow-auto">
                {filterCharacters()}
            </ul>
        </div>
    )
}