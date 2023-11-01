import connectMongoDb from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description} = await request.json()
    await connectMongoDb()
    await Item.create({title, description})
    return NextResponse.json({message:"Item created"},{status:201})
}

export async function GET(){
    await connectMongoDb()
    const items = await Item.find()
    return NextResponse.json({items})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDb()
    await Item.findByIdAndDelete(id)
    return NextResponse.json({message:'Item deleted'}, {status:200})
}