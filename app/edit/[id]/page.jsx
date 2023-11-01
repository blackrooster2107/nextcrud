
import { Update } from "@/libs/actions"

export default async function Page({ params }) {

    const { id } = params

    const getItem = async () => {

        try {
            const res = await fetch(`http://localhost:3000/api/items/${id}`,{
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
            return null
        }

    }

    const data = await getItem()

    if (await data === null) {

        return <>data error</>

    } else {

        const item = data.item

        return (
            <form action={Update} className="flex flex-col mt-5 gap-3">
                <input type="hidden" name="id" value={item._id} />
                <input
                    placeholder="Title"
                    name="newTitle"
                    defaultValue={item.title}
                    className="border-2 px-5 py-2"
                ></input>
                <textarea
                    placeholder="Description"
                    name='newDescription'
                    defaultValue={item.description}
                    className="border-2 px-5 py-2"
                ></textarea>
                <button
                    name="intent"
                    value="update"
                    className="bg-green-500 rounded-md w-fit px-4 py-2 font-bold"
                >Update Item</button>
            </form>
        )
    }

}