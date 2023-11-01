import connectMongoDb from "@/libs/mongodb"
import Item from "@/models/item"
import { NextResponse } from "next/server"

export async function PUT (request, {params}){
    const {id} = params
    const {newTitle:title, newDescription:description} = await request.json()
    await connectMongoDb()
    await Item.findByIdAndUpdate(id, {title,description})
    return NextResponse.json({message:"Item updated"},{status:200})
}

export async function GET (request, {params}){
    const {id} = params
    await connectMongoDb()
    const item = await Item.findOne({ _id: id })
    return NextResponse.json({item}, {status:200})
}