import { fetchCharacterById } from "@/app/api/data"
import Image from "next/image"


async function page({params}: {params: {character: string}}){
    const {character} = params
    const datos = await fetchCharacterById(character)

    function returnColorWorld(){
       switch(datos.world?.name){
        case "Asgard":
            return "text-amber-200"
        case "Midgard":
            return "text-green-800"
        case "Niflheim":
            return "text-sky-950"
        case "Vanaheim":
            return "text-green-500"
        case "Jötunheim":
            return "text-cyan-400"
        case "Alfheim":
            return "text-pink-500"
        case "Svartalfheim":
            return "text-stone-900"
        case "Helheim":
            return "text-teal-400"
        case "Muspelheim":
            return "text-red-500"
        case "Ginnungagap":
            return "text-purple-600"
        default:
            return "text-white"
       }
    }
    return <div className="flex flex-col items-center h-full gap-2 pt-2">
        <Image src={datos.image} alt={""} width={100} height={100} />
        <div className="flex flex-col bg-zinc-800 text-zinc-50 w-3/4 rounded p-4">
        <h1 className="text-zinc-50 text-xl font-medium tracking-wider">ID: {datos.id}</h1>
        <h1 className="text-zinc-50 text-xl font-medium tracking-wider">Name: {datos.name}</h1>
        <h1 className="text-zinc-50 text-xl font-medium tracking-wider">Title: {datos.title}</h1>
        <h1 className="text-zinc-50 text-xl font-medium tracking-wider">Description: {datos.description}</h1>
        </div>
        <div className="flex flex-col bg-zinc-800 text-zinc-50 w-3/4 rounded p-4">
        <h1 className={returnColorWorld() + " text-xl font-medium tracking-wider"}>World: {datos.world?.name}</h1>
        </div>
        
        <div className="flex flex-col bg-zinc-800 text-zinc-50 w-3/4 rounded p-4">
        <h1 className="text-white text-xl font-medium tracking-wider">Damage: {datos.stats.damage}</h1>
        <h1 className="text-white text-xl font-medium tracking-wider">Defense: {datos.stats.defense}</h1>
        <h1 className="text-white text-xl font-medium tracking-wider">Accuracy: {datos.stats.accuracy}</h1>
        <h1 className="text-white text-xl font-medium tracking-wider">Life: {datos.stats.life}</h1>
        <h1 className="text-white text-xl font-medium tracking-wider">Ether: {datos.stats.ether}</h1>
        <h1 className="text-white text-xl font-medium tracking-wider">Movement: {datos.stats.movement}</h1>
        </div>
        <div className="flex flex-col bg-zinc-800 text-zinc-50 w-3/4 rounded p-4">
        <h1 className="text-white text-xl font-medium tracking-wider">AbilityName: {datos.ability.abilityName}</h1>
        <h1 className="text-white text-xl font-medium tracking-wider">AbilityDescription: {datos.ability.abilityDesc}</h1>
        </div>
            
        
        

    </div>
}
export default page