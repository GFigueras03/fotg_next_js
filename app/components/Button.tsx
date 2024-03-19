import { VscAccount } from "react-icons/vsc";

export function ButtonFilter({ setWorld, mundo, currentWorld }: { setWorld: any, mundo: string, currentWorld: string }) {
    return (
        <button onClick={() => setWorld(mundo.toLowerCase())} className="w-32 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black"
            style={mundo.toLowerCase() === currentWorld ? { backgroundColor: "white", color: "black" } : {}}>
            {mundo}</button>
    );

}
export function ButtonDefault({ setWorld, mundo, currentWorld }: { setWorld: any, mundo: string, currentWorld: string }) {
    return (
            <button onClick={() => setWorld(mundo.toLowerCase())} className="w-12 h-10 dark:text-zinc-200  bold rounded border border-transparent transition duration-500 ease-in-out hover:dark:border-zinc-300 hover:dark:bg-white hover:dark:text-zinc-900 dark:bg-zinc-800 bg-zinc-50 text-black flex items-center justify-center hover:text-black overflow-hidden"><VscAccount width={"3em"} className="hover:text-black text-white text-2xl transition duration-500 ease-in-out w-full h-full p-2" style={currentWorld === "" ? { backgroundColor: "white", color: "black" } : {}}/></button>

    );

}