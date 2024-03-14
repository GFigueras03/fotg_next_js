import WorldsList from "@/app/components/WorldsList";
import { Suspense } from "react"
import WorldsListSkeleton from "@/app/components/WorldsList";

export default async function Page() {
    return (
        <>
                <Suspense fallback={<WorldsListSkeleton />}>
                    <WorldsList />
                </Suspense>

        </>
    )
}