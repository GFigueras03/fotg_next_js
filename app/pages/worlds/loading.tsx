export default function Loading(){
    return (

        <div className="w-full h-full flex flex-col items-center justify-center ">
            <ul className="w-fit h-fit flex flex-row flex-wrap items-center justify-center gap-2 overflow-hidden ">
            {
                Array.from({length: 10}, (_, i) => (
                     <div key={i} className="w-20 h-20 bg-zinc-50 dark:bg-zinc-800 text-center flex items-center justify-center dark:text-white text-black
                     rounded transition duration-500 ease-in-out border border-transparent dark:hover:border-white dark:hover:bg-white dark:hover:text-black  hover:border-black hover:bg-black hover:text-white animate-pulse"></div>
                ))
           }
           </ul>
        
        </div>
    )
}