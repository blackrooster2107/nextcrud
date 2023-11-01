import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi"
import RemoveBtn from "./RemoveBtn";

const getItems = async () => {
    try {
        const res = await fetch('http:localhost:3000/api/items', {
            cache: "no-store",
            next: {
                tags: ['items']
            }
        })
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        // console.log('error loading items',error)
        return { items: null }
    }
}

export default async function ItemList() {
    const { items } = await getItems()
    if (items === null) {
        return null
    } else {
        return (
            <>
                {items.map((i, k) => {
                    return (
                        <div key={k} className="flex justify-between items-start p-2 border-2 my-2 gap-5">
                            <div>
                                <h2 className="font-bold text-xl">{i.title}</h2>
                                <p>{i.description}</p>
                            </div>

                            <div className="flex gap-2" >
                                <Link href={`/edit/${i._id}`} ><HiPencilAlt size={24} /></Link>
                                <RemoveBtn id={i._id} title={i.title} />
                            </div>
                        </div>
                    )
                })}
            </>

        )
    }
}