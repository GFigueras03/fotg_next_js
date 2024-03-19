import Character from "./api/Character";
import { fetchCharacters } from "./api/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-full text-center">
      <Page />
    </main>
  );
}

function Page(){
  return (
    <h1 className="text-center text-4xl text-zinc-900 dark:text-zinc-50 font-bold flex ">WELLCOME TO FALL OF THE GODS</h1>
  )
}