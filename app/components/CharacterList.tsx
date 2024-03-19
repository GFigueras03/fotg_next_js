'use client'
import Character from "@/app/api/Character";
import { fetchCharactersGame } from "@/app/api/data";
import { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import World from "../api/World";
import {ButtonDefault, ButtonFilter} from "./Button";

export default function Page() {
    const [characterName, setCharacterName] = useState("");
    const [characters, setCharacters] = useState<Character[] | any>([]);
    const [world, setWorld] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCharacters() {
            const characters = await fetchCharactersGame();
            setCharacters(characters);
            setLoading(false); // Indicate that data loading is complete
        }
        fetchCharacters();
    }, []);

    useEffect(() => {
        console.log(world)
        const charactersLI = document.querySelectorAll('.character-li')
        if (world != "") {
            charactersLI.forEach((character: any) => {
                if (character.getAttribute('data-value')?.toLocaleLowerCase() !== world.toLowerCase()) {
                    character.style.display = "none";
                } else {
                    character.style.display = "flex";
                }
            });
        } else {
            charactersLI.forEach((character:any) => {
                character.style.display = "flex";
            });
        }

    }, [world, characters]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setCharacterName(name);
    }

    function filterCharacters() {
        if (characters) {
            if (characterName === "") {
                return characters.map((character: any) => (
                    <li
                        data-value={character.world}
                        id={`${character.name} characters`}
                        className="character-li w-20 h-20 self-center content-center bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
                                rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white"
                        key={character.name}>
                        {character.name}
                    </li>
                ));
            } else {
                return characters
                    .filter((character: any) => character.name.toLowerCase().startsWith(characterName.toLowerCase()))
                    .map((filteredCharacter: any) => (
                        <li data-value={filteredCharacter.world} id={`${filteredCharacter.name} characters`} className=" character-li w-20 h-20 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
                    rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white" key={filteredCharacter.name}>{filteredCharacter.name}</li>
                    ));
            }
        }
    }

    function skeleton() {
        return Array.from({ length: 58 }, (_, i) => (
            <li key={i} className="w-20 h-20 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
            rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white animate-pulse" ></li>
        ));
    }

    return (
        <div className="w-9/12 h-screen flex flex-col items-center mt-12 justify-start gap-10">
            <input className="w-1/4 h-8 rounded bg-zinc-800 border text-zinc-400 pl-2 border-zinc-400 outline-none " type="text" onChange={handleChange} />
            <div className="flex flex-row gap-3">
                <ButtonDefault currentWorld={world} setWorld={setWorld} mundo={""} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"ASGARD"} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"ALFHEIM"} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"VANAHEIM"} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"SVARTALFHEIM"} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"MIDGARD"} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"JOTUNHEIM"} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"MUSPELHEIM"} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"HELHEIM"} />
                <ButtonFilter currentWorld={world} setWorld={setWorld} mundo={"GINNUNGAGAP"} />
            </div>
            <ul className="w-fit flex flex-row gap-3 flex-wrap items-center justify-center ">

                {loading ? skeleton() : filterCharacters()}
            </ul>
        </div>
    )
}
