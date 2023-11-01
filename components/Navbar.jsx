import Link from "next/link";

export default function () {
    return (
        <div className="flex justify-between px-4 py-3 bg-slate-500 items-center">
            <Link href={'/'}>
                <h1 className="font-bold text-2xl">Crud-App</h1>
            </Link>
            <Link href={'/additem'} className="bg-white rounded-md font-bold p-2">Add Item</Link>
        </div>
    )
}