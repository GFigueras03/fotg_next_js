import CharacterListSkeleton from "@/app/components/CharacterListSkeleton";

export default function Loading() {


    return (
        <div className="w-9/12 h-screen flex flex-col items-center justify-center self-center ">
            <ul className="w-fit h-3/5 flex flex-row flex-wrap items-center justify-center gap-2 ">
                {
                    Array.from({ length: 58 }, (_, i) => (
                        <li key={i} className="w-24 h-24 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
                    rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white animate-pulse"></li>
                    ))
                }
            </ul>

        </div>
    )

}