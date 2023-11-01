"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const Create = async (formData) => {
    let data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }

    const title = data.title
    const description = data.description

    try {
        const res = await fetch('http://localhost:3000/api/items', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description })
        })

        if (res.ok) {
            revalidateTag('items')
            revalidatePath('/')
            console.log(`${title} added`)
        } else {
            throw new Error('failed to add data')
        }

    } catch (error) {
        console.log(error)
    }

    redirect('/')

}

export const Delete = async (id, title) => {

    try {
        const res = await fetch(`http://localhost:3000/api/items?id=${id}`, {
            method: "DELETE",
        })
        if (res.ok) {
            revalidateTag('items')
            revalidatePath('/')
            console.log(`${title} deleted`)
        }
    } catch (error) {
        console.log(error)
    }

    redirect('/')
}

export const Update = async (formData) => {

    let data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }

    const newTitle = data.newTitle
    const newDescription = data.newDescription
    // console.log(JSON.stringify({}))

    try {
        const res = await fetch(`http://localhost:3000/api/items/${data.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newTitle, newDescription }),
        })

        if(res.ok){
            revalidateTag('items')
            revalidatePath('/')
            console.log(`${newTitle} updated`)
        }
    } catch (error) {
        console.log(error)
    }

    redirect('/')
}