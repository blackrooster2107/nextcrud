"use client"

import { Create } from "@/libs/actions"

export default function Page(){
    
    return (
        <form id="form" action={Create} className="flex flex-col mt-5 gap-3">
            <input name="title" placeholder="Title" className="border-2 px-5 py-2"></input>
            <textArea name="description" placeholder="Description" className="border-2 px-5 py-2"></textArea>
            <button name="intent" value="add" className="bg-green-500 rounded-md w-fit px-4 py-2 font-bold">Add Item</button>
        </form>
    )
}