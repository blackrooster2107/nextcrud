'use client'

import { Delete } from "@/libs/actions"
import { useRouter } from "next/navigation"
import { HiOutlineTrash } from "react-icons/hi"

export default function RemoveBtn({ id, title }) {

    const router = useRouter()

    const removeItem = async () => {
        const confirmed = confirm(`Are you sure want to delete "${title}"`)

        if (confirmed) {
            Delete(id,title)
        }
    }

    return (
        <form action={removeItem} >
            <button className="text-red-600">
                <HiOutlineTrash size={24} />
            </button>
        </form>
    )
}