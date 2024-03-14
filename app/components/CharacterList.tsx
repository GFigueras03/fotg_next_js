'use client'
import Character from "@/app/api/Character";
import { fetchCharactersGame } from "@/app/api/data";
import { useEffect, useState } from "react";

export default function Page() {
    const [characterName, setCharacterName] = useState("");
    const [characters, setCharacters] = useState<Character[] | any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCharacters() {
            const characters = await fetchCharactersGame();
            setCharacters(characters);
            setLoading(false); // Indicate that data loading is complete
        }
        fetchCharacters();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setCharacterName(name);
    }

    function filterCharacters() {
        if (characters) {
            if (characterName === "") {
                return characters.map((character: any) => (
                    <li id={character.name} className="w-24 h-24 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
                rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white" key={character.name}>{character.name}</li>
                ));
            } else {
                return characters
                    .filter((character: any) => character.name.toLowerCase().startsWith(characterName.toLowerCase()))
                    .map((filteredCharacter: any) => (
                        <li id={filterCharacters.name} className="w-24 h-24 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
                    rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white" key={filteredCharacter.name}>{filteredCharacter.name}</li>
                    ));
            }
        }
    }
    function skeleton() {
        return Array.from({ length: 58 }, (_, i) => (
            <li key={i} className="w-24 h-24 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
            rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white animate-pulse" ></li>
        ));
    }

    return (
        <div className="w-9/12 h-screen flex flex-col items-center justify-center gap-10">
            <input className="w-1/4 h-8 rounded bg-zinc-800 border text-zinc-400 pl-2 border-zinc-400 outline-none" type="text" onChange={handleChange} />
            <div className="flex flex-row gap-3">
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">ASGARD</button>
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">ALFHEIM</button>
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">VANAHEIM</button>
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">SVARTALFHEIM</button>
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">MIDGARD</button>
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">JÖTUNHEIM</button>
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">MUSPELHEIM</button>
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">HELHEIM</button>
                <button className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black">GINNUNGAGAP</button>
            </div>
            <ul className="w-fit h-3/5 flex flex-row flex-wrap items-center justify-center gap-2 overflow-auto overflow-x-hidden">
                {loading ? skeleton() : filterCharacters()}
            </ul>
        </div>
    )
}
