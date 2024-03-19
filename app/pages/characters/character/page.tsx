'use client'
import {useRouter} from 'next/navigation'

export default function routerComponent(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Router = useRouter()
    return(
        <>
            <button className='text-white' onClick={() => Router.push('/new_route')}>huola quetal</button>
        </>
    )
}