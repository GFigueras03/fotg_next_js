import CharacterList from "@/app/components/CharacterList";
import { Suspense } from "react";
export default function Page(){
    return (
        <>
        <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <Suspense fallback={<h2 className="text-white">LOADING</h2>}>
                <CharacterList />
            </Suspense>
        </div>
        </>
        
    )
}
